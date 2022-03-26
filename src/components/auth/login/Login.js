import React,{useState} from "react";
import styles from"./Login.module.css";

import axios from "axios";

const Login = ()=>{
    
    let [email,setEmail] = useState("")
    let [password,setPassword] = useState("")

    let handleSubmit =async(e)=>{
        e.preventDefault()
        const user = await axios.post('https://rkv-forums-api.herokuapp.com/api/v1/auth/login')
        if(user){
            console.log(user);
        }
        console.log({email,password})

    }

    return <div className={styles.login_container}>
        
        <h1 className={styles.login_title}>Sign In</h1>
            <input className={styles.input_login} type="text" placeholder=" Email" value={email} onChange={(e)=>setEmail(e.target.value)} />
            <input className={styles.input_login} type="text" placeholder=" Password" value={password} onChange={(e)=>setPassword(e.target.value)} />
            <button onClick={(e)=>handleSubmit(e)} className={styles.login_btn}>Log In</button>
            <a href="1" className={styles.forget_password_txt}>Forget Your Password ?</a>
            <p className={styles.or_divider}>or</p>
            <button className={styles.google_btn}>continue with Google</button>
            <p className={styles.register_txt}>Don't have account? <a href="1">Register</a></p>
    </div>
}

export default Login