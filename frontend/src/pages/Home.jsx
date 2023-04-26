import BgImage from '../images/bgBlackOK.png'
import '../index.css';

export default function Home() {

  return (
    <>
      <div  style={{textAlign: "center", width: "70%", margin: "auto auto", }}>    
        <nav className="navbar navbar-expand-lg  navbar-dark bg-dark">
          <div className="container-fluid">
            <p className="navbar-brand">The Alzhma Project 2.0</p>                   
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <a className="nav-link active" href="./login">Login</a>      
              </div>
            </div>
          </div>
        </nav>
        <img className='homeImage' alt="Imagem de fundo" src={BgImage} style={{ width:"100%",}}/>
      </div>

    </>
  );
}

