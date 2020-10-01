import React, { useState,useEffect} from "react";
import { Alert } from 'reactstrap';
import axios from "axios";
import { useRouter } from 'next/router';
import FacebookLogin from 'react-facebook-login';

import useSWR from 'swr'
import styles from "./Button.module.css";
function LoginPage() {
  const [email, setEmail] = useState('');
  const [password,setPassword] =useState('');
  const [passwordMessage,setPasswordMessage] =useState('');
  const router = useRouter()
  const responseFacebook = (response) => {
    console.log(response);
  }
  const handleSubmit = (evt) => {
	  valiadtePassword();
	  axios

	  .post(
	 
	   "http://111.93.169.90:4011/loginProfile",
  
		{
		email:email,
		password:password,
		type:2
	  
		}
	  )
	  .then((response) => {
    console.log(response)
    if(response.data.message==="Login successful"){
      router.push({
        pathname: '/Profile',
     
      })
    }
	
	  })
  
	  .catch((error) => {
		console.log(error);
   
	  });
	
	
	

	
	
	evt.preventDefault();

	
}
const valiadtePassword = (evt) => {
	if(password.length<4)
	{
	setPasswordMessage("Please select a password of minimum length 4")
	}
	else {
		setPasswordMessage('')
	}
	
}
useEffect(() => {
  

  });
  return (
    <div className={styles.wrapper} >
      <div className={styles.section1}>
        <h1 className={styles.card_header}> WELCOME TO BLOGGING WEBSITE</h1>
       <div className="col-sm-8 offset-sm-2">
      <FacebookLogin
        appId="827532588056413" 
        fields="name,email,picture"
        callback={responseFacebook}
      />
      </div>
          <button id={styles.google_button} className="col-sm-8 offset-sm-2"><div style={{display:"inline"}}><img src="google.jpg" style={{height:"30px",width:"30px",marginLeft:"-12px"}}/><span style={{fontWeight:"bold",paddingLeft:"3px"}}> Sign in with Google</span></div></button>
          <button id={styles.facebook_button} className="col-sm-8 offset-sm-2"> <div style={{display:"inline",}}><img src="google.jpg" style={{height:"30px",width:"30px"}}/><span style={{fontWeight:"bold",paddingLeft:"3px"}}>Sign in with Facebook</span></div></button>
		<form onSubmit={handleSubmit}>
        <div style={{marginTop:"30px"}} >
          <label className="offset-sm-2">Email</label>
          <input type="email" className="form-control col-sm-8 offset-sm-2"  value={email}
          onChange={e => setEmail(e.target.value)} placeholder="username" required/>
        </div>
        <div style={{marginTop:"15px"}}>
        <label className="offset-sm-2">Password </label>
          <input type="password" className="form-control col-sm-8 offset-sm-2" placeholder="password" value={password}  onChange={(e) => {setPassword(e.target.value),setPasswordMessage('')}} required />

        </div>
		<div className="offset-sm-2" style={{    color: "red", fontWeight: "bold",fontSize:"0.8em",wordSpacing:"1px", paddingTop:"10px",marginBottom:"10px"}}>{passwordMessage}</div>
        <div >
          <input type="submit" id={styles.btn2} className="col-sm-8 offset-sm-2" value="Login" />
         
        </div>
	

<Alert   style={{marginTop:"30px"}}  isOpen={false} className="col-sm-8 offset-sm-2  col-xm-6 alert alert-warning" >
       
       <p>
        dshgdshgdshg
       </p>
	   </Alert>
		</form>
      </div>
	
    </div>
  );
}

export default LoginPage;
