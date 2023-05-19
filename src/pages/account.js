
import { useEffect, useState } from "react";
import { upload, UploadD } from "../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../config/firebase";
import { useNavigate } from "react-router-dom";
import { uid } from "uid";



export const Account = () => {
    const [currentUser] = useAuthState(auth);
    const [displayName, setDN] = useState(null)
    const [photo, setPhoto] = useState(null);
    const [loading, setLoading] = useState(false);
    const [username, setUN] = useState(null);
    const [photoURL, setPhotoURL] = useState("https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png");
    const navigate = useNavigate();


    const handleChange = (e) => {
        if (e.target.files[0]) {
            setPhoto(e.target.files[0])
        }
    }
    const handle_Change = (e) => {
      if (e.target.value) {
          setDN(e.target.value)
      }
      
  }

    const handleClick = () => {
        upload(photo, currentUser, setLoading);
        navigate("/home")
  }
    
    const handle_Click = () => {
      UploadD(displayName, currentUser, setLoading);
  }

    useEffect(() => {
        if (currentUser?.photoURL) {
          setPhotoURL(currentUser.photoURL);
        }
        if(currentUser?.displayName){
          setUN(currentUser.displayName);
        }
      }, [currentUser])



  return (
    <div className="fields">
        <div>
          <h1>
          <img src={photoURL} alt="Avatar" className="avatar" />
          </h1>
          <p>{username}</p>
          <input type="file" onChange={handleChange} />
          <button disabled={loading || !photo} className="first" onClick={handleClick}>Upload</button>
        </div>
        <h1> </h1>
        <div>
          <input type="text" placeholder="Enter display name" onChange={handle_Change } /> <h1> </h1>
          <button disabled={loading || !displayName} className="first" onClick={handle_Click}>Upload</button>
        </div> 
        {displayName} 
    </div>
  );

}
export default Account;