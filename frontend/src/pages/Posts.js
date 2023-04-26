import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Button, Form } from "react-bootstrap";
import Modal from "react-bootstrap/Modal"
import '../index.css';
import { auth } from '../config/firebase'

function Posts() {

  const navigate = useNavigate();

  const [posts, setPosts] = useState([]);
  const [updatedPost, setUpdatedPost] = useState({
    id: "",
    title: "",
    description: "",

  });

  const timeElapsed = Date.now();
  const today = new Date(timeElapsed);
  const date = today.toLocaleDateString();

  const [answer,setAnswer ] = useState("")
  const [score,setScore] = useState(0)
  const [attempts,setAttempts] = useState(0)
  const [show, setShow] = useState(false);


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    axios
      .get("/posts")
      .then((res) => {
        console.log(res);
        setPosts(res.data);
      })
      .catch((err) => console.log(err));
  }, [setScore]);

  const deletePost = (id) => {
    console.log(id);

    axios
      .delete(`/delete/${id}`)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));

    window.location.reload();
  };

  const updatePost = (id, title, description) => {
    setUpdatedPost((prev) => {
      return {
        ...prev,
        id: id,
        title: title,
        description: description,
      };
    });
    handleShow();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedPost((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  function checkAnswer(){ 
    setAttempts(attempts+1)
    posts.map((post)=>{
      if(post.description===answer){
        setScore(score+10)
      }
    })  
  };

  function terminateQuiz(){ 

    navigate("/");
  };

  const saveUpdatedPost = () => {
    console.log(updatedPost);

    axios
      .put(`/update/${updatedPost.id}`, updatedPost)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));

    handleClose();
    window.location.reload();
  };

  return (
    <div style={{ width: "70%", margin: "auto auto", textAlign: "center" }}>    
      <nav className="navbar navbar-expand-lg  navbar-dark bg-dark">
        <div className="container-fluid">
          <p className="navbar-brand">The Alzhma Project 2.0</p>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">    
                <a className="nav-link active" href="./">Sair</a>         
            </div>
          </div>
        </div>
      </nav>
      <h1>Quiz</h1>
      <h3>Olá , {auth?.currentUser?.email}</h3>
      <Button
        variant="outline-dark"
        style={{ width: "100%", marginBottom: "1rem" }}
        onClick={() => navigate("/create")}
      >
        Criar outras Perguntas ?      
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Mudar Perguntas e Respostas</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Control
            placeholder="Pergunta"
            name="title"
            value={updatedPost.title ? updatedPost.title : ""}
            style={{ marginBottom: "1rem" }}
            onChange={handleChange}
          />
          <Form.Control
            placeholder="Resposta"
            name="description"
            onChange={handleChange}
            value={updatedPost.description ? updatedPost.description : ""}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Voltar
          </Button>
          <Button variant="primary" onClick={saveUpdatedPost}>
    
          </Button>
        </Modal.Footer>
      </Modal>
  
        <>
         <h3> Hoje é : {date}</h3>

          {posts.map((post) => {
            if(post.uid===auth?.currentUser?.uid){
              console.log("sim");
                 
            return(
              <div
                style={{
                  marginBottom: "1rem",
                  border: "solid lightgray 1px",
                  borderRadius: "8px",
                }}
                key={post._id}
              >
                <p> Suas tentativas : {attempts}</p>
                <p> Sua pontuação : {score}</p>    
                <h4> Pergunta : {post.title}</h4>                       
           
                <Form.Control
                  placeholder="Sua Resposta"
                  name="answer"                      
                  value={answer}
                  onChange={(e)=>setAnswer([e.target.value])}
                />                
                     <Button onClick={checkAnswer}>Verificar sua Resposta</Button>                  

                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    padding: "1rem",
                  }}
                >
                  <Button
                    variant="outline-info"
                    onClick={() =>
                      updatePost(post._id, post.title, post.description)
                    }
                    style={{ width: "100%", marginRight: "1rem" }}
                  >
                    Modificar essa Pergunta ?
                  </Button>
                  <Button
                    onClick={() => deletePost(post._id)}
                    variant="outline-danger"
                    style={{ width: "100%" }}
                  >
                    Remover essa Pergunta?
                  </Button>
                </div>
              </div>)}    
           })}
        </>
      
      <Button
       onClick={terminateQuiz}
       variant="outline-danger"
       style={{ width: "100%" }} >Finalizar Quiz</Button>
    </div>
  );
}
export default Posts;