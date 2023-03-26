import { Link } from "react-router-dom";
import { auth } from "../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";

export const Navbar = () => {
  const [user] = useAuthState(auth);

  const signUserOut = async () => {
    await signOut(auth);
  };
  return (
    <div className="navbar">
    <div className="site-name">

        <p>
        <img src={"/logo1.jpg"} alt = "/logo1.jpg" width="60" height="60" />
        </p>
        
    </div>
      <div className="links">
        <Link to="/"> Home </Link>
        <Link to="/login"> Login </Link>
        <Link to="/signup"> SignUp </Link>
      </div>
      <div className="user">
        {user && (
          <>
            <p> {user?.displayName} </p>
            <p>
            <img src={user?.photoURL} alt = "/logo.jpg" width="30" height="30" />
            </p>
            <button onClick={signUserOut}> Log Out</button>
          </>
        )}
      </div>
    </div>
  );
};