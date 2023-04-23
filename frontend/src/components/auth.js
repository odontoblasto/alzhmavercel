import { useState } from "react"
import {useNavigate} from 'react-router-dom'
import { auth,provider} from "../config/firebase"
import { createUserWithEmailAndPassword,signInWithPopup,signOut } from "firebase/auth"
import {FcGoogle} from 'react-icons/fc'
import {MdEmail,MdOutlinePassword} from 'react-icons/md'
import {Button} from 'react-bootstrap'


export  function Auth (){
 
    const navigate = useNavigate();  
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const signIn = async () => {
        try {
            await createUserWithEmailAndPassword(auth,email,password);
            // console.log("uid",auth.currentUser);
            navigate("/create");}
        catch(err){
            console.error(err)
        }
    }
    const signInWithGoogle = async () => {
        try {
            await signInWithPopup(auth,provider);
            // console.log("uid",auth.currentUser.uid);
          
            setEmail(auth.currentUser.email);
            navigate("/create");}
        catch(err){
            console.error(err)
        }
    }
    const logout = async () => {
        try {
            await signOut(auth);
            navigate("/");}
        catch(err){
            console.error(err)
        }
    }
    return(
        <>
         <h2>- Seja Bem- vindo(a) ao The Alzhma project 2.0 - {email}</h2> 
            <div>
                <MdEmail size={"3rem"}/>
                <input placeholder="Email"
                type='email'
                onChange={(e)=>{setEmail(e.target.value)}}
                />
                <MdOutlinePassword size={"3rem"}/>
                <input placeholder="Senha" type="password"
                onChange={(e)=>{setPassword(e.target.value)}}
                />
                <Button onClick={signIn}>Entrar</Button> 
            </div>
         
            <div>
                <Button onClick={signInWithGoogle}   variant="outline-success"><FcGoogle size={"3rem"}/>
                    Entrar com Google</Button>
            </div>
            <div>
                <Button onClick={logout}variant="outline-success" style={{margin:"1rem"}}>
                Logout
                </Button>
            </div>
          
        
        </>
    )
}