import { auth, googleProvider } from "../config/firebase";
import { signInWithPopup,signInWithEmailAndPassword,sendPasswordResetEmail} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import {useState} from "react";
import validator from 'validator'

export const Login = () => {
    //navigate is gonna be used to move/redirect through our web pages
    const navigate = useNavigate();
    //These functions are used to set the values to these variables
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState('')
    //Method is used to validate password(5 min characters, 1 lower and uppercase & 1 symbol)
    const validate = (value) => {
        if (validator.isStrongPassword(value, {
            minLength: 5, minLowercase: 1,
            minUppercase: 1, minNumbers: 1, minSymbols: 1
        })) {setErrorMessage('Strong Password')} 
        else if(value === ""){
            setErrorMessage('')
        }
        else {
            setErrorMessage('Weak Password')
        }
  }
  //function used to log in users, and check if inputs are in correct form 1st!!
  const login = async () => {
    if(!isValidEmail(loginEmail) && loginPassword !== ""){
        alert("Please enter a valid email address");
    }else{
        try {
            const user = await signInWithEmailAndPassword(auth,loginEmail,loginPassword);
            console.log(user);
            navigate("/");
        } 
        catch (error) {
            console.log(error.message);
        }}
  };
  //Method is used to reset password of existing users, a verification email is sent out...
  const forgotPassword = () => {
    if(isValidEmail(loginEmail)){
        sendPasswordResetEmail(auth,loginEmail).then(()=>{alert("Password Reset Email sent Successfully!");}).catch((error)=>{const errormessage = error.message; alert(errormessage);});
    }
    else{
        alert("Please enter a verified user email");
    }
  }
//Using built in firebase method to sign in with google account
const logInWithGoogle = async () => {
    try{
        const result = await signInWithPopup(auth, googleProvider);
        console.log(result);
        navigate("/");
    }
    catch(err){
        console.error(err);
    }
};
//This function is used to check if email input is a valid email address
/*
const validateEmail = (Email) => {
    return String(Email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };*/
  //This function is used to check if email input is a valid email address
  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }
  //logIn function returns layout of the html log In page
  return (
    <div>
        <div>
            <h1>Login to Your Account</h1>
            <p> Log In by email & password </p>
            <p>
            <input
                placeholder = "Enter Email" 
                type = "email"
                required
                onChange={(e) => {setLoginEmail(e.target.value);}}
            />
            </p>
            <p>
            <input 
                placeholder="Enter Password"
                type="password"
                onChange={(e) => {setLoginPassword(e.target.value);validate(e.target.value);}}
            />
            <p>
            <span style={{fontWeight: 'italic',color: 'red',fontSize: "0.675em"}}>{errorMessage}</span>
            </p>
            </p>
            <button className="first" onClick={login}>Log In</button>
            <p onClick={forgotPassword}>Forgot password?</p>
        </div>
        <div>
            <h2>OR</h2>
            <p> Log In by Google account </p>
            <h2>
            <img src={"/google.png"} alt = "logo" width="90" height="30" />
            </h2>
            <button className="first" onClick={logInWithGoogle}> Log In </button>
        </div>
    </div>
  );
};
