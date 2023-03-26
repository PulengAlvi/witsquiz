import { auth, googleProvider } from "../config/firebase";
import { signInWithPopup,signInWithEmailAndPassword} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import {useState} from "react";

export const Login = () => {
    const navigate = useNavigate();
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    //const [data, setData] = useState(null);

    /*function getData(val) {
        setData(val.target.value);
        console.warn(val.target.value);
    }*/

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(auth,loginEmail,loginPassword);
      console.log(user);
      navigate("/");
    } 
    catch (error) {
      console.log(error.message);
    }
  };

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

  return (
    <div>
        <div>
            <h1>Login to Your Account</h1>
            <p> Log In by email & password </p>
            <p>
            <input
                placeholder = "Enter Email" 
                onChange={(e) => {setLoginEmail(e.target.value);}}
            />
            </p>
            <p>
            <input 
                placeholder="Enter Password"
                type="password"
                onChange={(e) => {setLoginPassword(e.target.value);}}
            />
            </p>
            <button onClick={login}>Log In</button>
        </div>
        <div>
            <h2>OR</h2>
            <p> Log In by Google account </p>
            <h2>
            <img src={"/google.png"} alt = "logo" width="90" height="30" />
            </h2>
            <button onClick={logInWithGoogle}> Log In </button>
        </div>
    </div>
  );
};