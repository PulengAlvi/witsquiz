import {auth, googleProvider} from "../config/firebase";
import {createUserWithEmailAndPassword, signInWithPopup,signInWithEmailAndPassword,onAuthStateChanged, signOut} from "firebase/auth";
import {useState} from "react";

export const Auth = () => {
    //used to get the values
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
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

    const login = async () => {
        try {
          const user = await signInWithEmailAndPassword(auth,loginEmail,loginPassword);
          console.log(user);
        } 
        catch (error) {
          console.log(error.message);
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

    const logOut = async () => {
        try{
            await signOut(auth);
        }
        catch(err){
            console.error(err);
        }
    };

    return (
        <div>
            <div>
                <h3>Create Account</h3>
                <input 
                    placeholder="Email..."
                    onChange={(e) => {setEmail(e.target.value);}}
        
                />
                <input 
                    placeholder="Password..."
                    type="password"
                    onChange={(e) => {setPassword(e.target.value);}}
                />
                <button onClick={signUp}> Create Account </button>
                <button onClick={logInWithGoogle}>Create account by Google</button>
            </div>

            <div>
                <h3>Login to Your Account</h3>
                <input
                    placeholder="Email..." onChange={(e) => {setLoginEmail(e.target.value);}}
                />
                <input
                    placeholder="Password..."
                    type="password"
                    onChange={(e) => {setLoginPassword(e.target.value);}}
                />
                <button onClick={login}>Login</button>
                <button onClick={logInWithGoogle}>Log In with Google</button>
            </div>
            
                <h4> User Logged In: </h4>
                {user?.email}
                <button onClick={logOut}>Log Out</button>
            
        </div>
        );
}