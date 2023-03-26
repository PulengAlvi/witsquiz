import {auth, googleProvider} from "../config/firebase";
import {createUserWithEmailAndPassword, signInWithPopup,onAuthStateChanged, } from "firebase/auth";
import {useState} from "react";

export const SignUp = () => {
    //used to get the values
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [user, setUser] = useState({});

    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
    });

    //console.log(auth?.currentUser?.email);//view current user logged in

    const signUp = async () => {
        try{
            await createUserWithEmailAndPassword(auth,email,password);
            console.log(user);
        }
        catch(err){
            console.error(err.message);
        }
    };

    const logInWithGoogle = async () => {
        try{
            await signInWithPopup(auth, googleProvider);
        }
        catch(err){
            console.error(err);
        }
    };

    return (
        <div>
            <div>
                <h2>Create an Account</h2>
                <p>
                <input 
                    placeholder="Email..."
                    onChange={(e) => {setEmail(e.target.value);}}
        
                />
                </p>
                <p>
                <input 
                    placeholder="Password..."
                    type="password"
                    onChange={(e) => {setPassword(e.target.value);}}
                />
                </p>
                <p>
                <button onClick={signUp}> SignUp </button>
                </p>
                <h2>OR</h2>
                <p> Sign Up using your Google account </p>
                <h2>
                     <img src={"/google.png"} alt = "logo" width="90" height="30" />
                </h2>
                <button onClick={logInWithGoogle}>Sign Up by Google</button>
            </div>          
        </div>
        );
}