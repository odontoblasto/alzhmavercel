import './index.css';
import Home from './pages/Home'
import {Register} from './pages/Register'
import {Login} from './pages/Login'
import {Profile} from './pages/Profile'
import {useNavigate} from 'react-router-dom'

function App() {

  const navigate = useNavigate()
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
