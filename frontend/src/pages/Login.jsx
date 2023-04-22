import '../index.css';
import {Auth} from "../components/auth"

export function Login(){

    return(
        <>      
            <div  style={{ textAlign: "center", width: "100%", margin: "auto auto" }}>                          
                <nav className="navbar navbar-expand-lg  navbar-dark bg-dark">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">The Alzhma Project 2.0</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav">
                                {/* <a className="nav-link active" aria-current="page" href="./register">Registro</a>
                                <a className="nav-link active" href="./login">Login</a>
                                <a className="nav-link active" href="./profile">Perfil</a>
                                <a className="nav-link active" href="./create">Perguntas</a>
                                <a className="nav-link active" href="./posts">Quiz</a> */}
                                <a className="nav-link active" href="./">Sair</a>                
                            </div>
                        </div>
                    </div>
                </nav>
                <h1>Login</h1>
                <h5><Auth/></h5>  
             
            </div>
 
        </>
    )
}