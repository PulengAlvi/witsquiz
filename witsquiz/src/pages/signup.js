import {auth, googleProvider} from "../config/firebase";
import {createUserWithEmailAndPassword, signInWithPopup,onAuthStateChanged, } from "firebase/auth";
import { getAuth, sendEmailVerification } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import {useState} from "react";
import validator from 'validator'

export const SignUp = () => {
    const Auth = getAuth();
    //navigate is gonna be used to move/redirect through our web pages
    const navigate = useNavigate();
    //These functions are used to set the values to these variables
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [user, setUser] = useState({});
    const [errorMessage, setErrorMessage] = useState('')
    //function used to validate password(5 min characters, 1 lower and uppercase & 1 symbol)
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
    //function used to check which user is currently logged in
    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
    });

    //console.log(auth?.currentUser?.email);//view current user logged in

    //function used to create a new user account, and check if inputs are in correct form 1st!!
    const signUp = async () => {
        if(!isValidEmail(email) && password !== ""){
            alert("Please enter a valid email address");
        }else{
            try{
                await createUserWithEmailAndPassword(auth,email,password);
                console.log(user);
                sendEmailVerification(Auth.currentUser).then(() => {// Email verification sent!
                });
                navigate("/");
            }
            catch(err){
                console.error(err.message);
            }
        }
    };

    //Using built in firebase method to create a new user with google account 
    const logInWithGoogle = async () => {
        try{
            const result = await signInWithPopup(auth, googleProvider);
            console.log(result);
            sendEmailVerification(Auth.currentUser).then(() => {// Email verification sent!
            });
            navigate("/");
        }
        catch(err){
            console.error(err);
        }
    };
    //This function is used to check for a valid email address
    function isValidEmail(email) {
        return /\S+@\S+\.\S+/.test(email);
    }
    //signup function returns layout of the html sign up page
    return (
        <div>
            <div>
                <h1>Create an Account</h1>
                <p> Sign Up by email & password </p>
                <p>
                <input 
                    placeholder="Enter Email"
                    type = "email"
                    required
                    onChange={(e) => {setEmail(e.target.value);}}
        
                />
                </p>
                <p>
                <input 
                    placeholder="Enter Password"
                    type="password"
                    onChange={(e) => {setPassword(e.target.value);validate(e.target.value);}}
                />
                </p>
                <p>
                    <span style={{fontWeight: 'italic',color: 'red',fontSize: "0.675em"}}>{errorMessage}</span>
                </p>
                <p>
                <button className="first" onClick={signUp}> SignUp </button>
                </p>
                <h2>OR</h2>
                <p> Sign Up using your Google account </p>
                <h2>
                     <img src={"/google.png"} alt = "logo" width="90" height="30" />
                </h2>
                <button className="first" onClick={logInWithGoogle}>Sign Up by Google</button>
            </div>          
        </div>
        );
}
