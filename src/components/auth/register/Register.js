import React,{useState} from "react";
import styles from"./Register.module.css";

import axios from "axios";


const Register = (props)=>{
    
    let [name,setName] = useState("")
    let [email,setEmail] = useState("")
    let [password,setPassword] = useState("")

    let handleSubmit =async(e)=>{
        e.preventDefault()
        console.log({name,email,password});
        const user = await axios.post("http://localhost:3000/api/v1/auth/signup",{name,email,password},{headers:{
            'Content-Type': 'application/json'
        }},{withCredentials:true})

        if(user){
            console.log(user);
        }
    }

    return <div className={styles.register_container}>
        
        <h1 className={styles.login_title}>Register</h1>
            <input className={styles.input_register} type="text" placeholder=" Name" value={name} onChange={(e)=>setName(e.target.value)} />
            <input className={styles.input_register} type="text" placeholder=" Email" value={email} onChange={(e)=>setEmail(e.target.value)} />
            <input className={styles.input_register} type="password" placeholder=" Password" value={password} onChange={(e)=>setPassword(e.target.value)} />
            <button onClick={(e)=>handleSubmit(e)} className={styles.reg_btn}>Join Now</button>
            <p className={styles.login_txt}>Already have an account? <a href="1">SignIn</a></p>

            <div  className={styles.or_divider}>
                <hr className={styles.dash_line}/> 
                <p>or</p>
                <hr className={styles.dash_line}/> 
            </div>

            <div className={styles.google_btn}>
                <img src="google-icon.svg" alt="google" />
                <p>  continue with Google</p>
            </div>
    </div>
}

export default Register