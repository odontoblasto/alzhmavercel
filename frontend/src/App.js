import './index.css';
import Home from './pages/Home';


function App() {
  
  return (
    <>
    {/* <div className='homeNavBar'> 
      <button onClick={()=> navigate('register')}>Registro</button>
      <button onClick={()=> navigate('login')}>Entrar</button> 
      <button onClick={()=> navigate('profile')}>Perfil</button>    
      <button onClick={()=> navigate('create')}>Perguntas</button>
      <button onClick={()=> navigate('create/posts')}>Jogo</button>
      <button onClick={()=> navigate('logout')}>Sair</button> 
    </div> */}
      <Home/> 
    </>
  );
}

export default App;
