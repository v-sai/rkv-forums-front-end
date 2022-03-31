import React,{useState} from "react";
import styles from"./Login.module.css";

import axios from "axios";
import {useNavigate} from 'react-router-dom'


const Login = (props)=>{
    
    let [email,setEmail] = useState("")
    let [password,setPassword] = useState("")
    const navigate = useNavigate();

    let handleSubmit =async(e)=>{
        e.preventDefault()
        console.log({email,password});

        // .then(user=>{
        //     if(user){
        //         console.log(user.data);
        //        axios.get("https://rkv-forums-api.herokuapp.com/api/v1/users",{withCredentials:true}).then(users=>console.log(users)).catch(err=>console.log(err))
        //         navigate("/")
        //     }
        // }).catch(err=>{
            
        // })

        try {
            const user = await axios.post("http://localhost:3000/api/v1/auth/login",{email,password},{withCredentials:true})
            if(user){
                console.log(user);
               const users = await axios.get("http://localhost:3000/api/v1/users",{withCredentials:true})
               console.log(users);
               navigate("/")
            }
        } catch (error) {
            console.log(error);
        }
    }

    return <div className={styles.login_container}>
        
        <h1 className={styles.login_title}>Sign In</h1>
            <input className={styles.input_login} type="text" placeholder=" Email" value={email} onChange={(e)=>setEmail(e.target.value)} />
            <input className={styles.input_login} type="password" placeholder=" Password" value={password} onChange={(e)=>setPassword(e.target.value)} />
            <button onClick={(e)=>handleSubmit(e)} className={styles.login_btn}>Log In</button>
            <a href="1" className={styles.forget_password_txt}>Forget Your Password ?</a>
            <div  className={styles.or_divider}>
                <hr className={styles.dash_line}/> 
                <p>or</p>
                <hr className={styles.dash_line}/> 
            </div>
            <div className={styles.google_btn}>
                <img src="google-icon.svg" alt="google" />
                <p>  continue with Google</p>
            </div>
            <p className={styles.register_txt}>Don't have account? <a href="1">Register</a></p>
    </div>
}

export default Login