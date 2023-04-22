import {useNavigate} from 'react-router-dom'
import {Button,Form} from 'react-bootstrap'
import { useState } from 'react';
import axios from "axios";
import '../index.css';

function CreatePost() {
    const navigate = useNavigate();
    const [post, setPost] = useState({
      title: "",
      description: "",     
    });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setPost((prev) => {
        return {
          ...prev,
          [name]: value,
        };
      });
    };
  
    const createPost = (e) => {
      e.preventDefault();
      // console.log(post)  
      axios
        .post("/create", post)
        .then((res) => console.log(res))
        .catch((err) => console.log(err));  
    navigate("/posts");
    };
  
    return (
      <div style={{ textAlign: "center", width: "100%", margin: "auto auto" }}>     
        <nav className="navbar navbar-expand-lg  navbar-dark bg-dark">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">The Alzhma Project 2.0</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
              <a className="nav-link active" aria-current="page" href="./register">Registro</a>
                  <a className="nav-link active" href="./login">Login</a>
                  <a className="nav-link active" href="./profile">Perfil</a>
                  <a className="nav-link active" href="./create">Perguntas</a>
                  <a className="nav-link active" href="./posts">Quiz</a>
                  <a className="nav-link active" href="./">Sair</a>          
              </div>
            </div>
          </div>
        </nav>
        <Form>
        <h1>Crie Seu Quiz - Perguntas e Respostas</h1>
          <Form.Group>
            <Form.Control
              name="title"
              value={post.title}
              onChange={handleChange}
              style={{ marginBottom: "1rem" }}
              placeholder="Pergunta"
            />
            <Form.Control
              onChange={handleChange}
              name="description"
              value={post.description}
              style={{ marginBottom: "1rem" }}
              placeholder="Resposta"
            />
          </Form.Group>
          <Button
            onClick={createPost}
            variant="outline-success"
            style={{ width: "100%", marginBottom: "1rem" }}
          >
            Criar Pergunta e Resposta
          </Button>
        </Form>
        <Button
          onClick={() => navigate("/posts")}
          variant="outline-success"
          style={{ width: "100%" }}
        >
          Quiz
        </Button>
      </div>
    );
  }
  
  export default CreatePost;