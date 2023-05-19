// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import {getAuth, GoogleAuthProvider, updateProfile} from "firebase/auth"
import { getDownloadURL, getStorage, ref, uploadBytes} from "firebase/storage";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBNPWqWrvcGUEFhH89YIFMQNrRnuVCOO9Q",
  authDomain: "witsquiz.firebaseapp.com",
  projectId: "witsquiz",
  storageBucket: "witsquiz.appspot.com",
  messagingSenderId: "181567589133",
  appId: "1:181567589133:web:559f28178c51e7a55a7e44",
  measurementId: "G-3GLGV18V8H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage();
export const db = getDatabase(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
//const analytics = getAnalytics(app);
/*
// Custom Hook
export function useAuth() {
  const [ currentUser, setCurrentUser ] = useState();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, user => setCurrentUser(user));
    return unsub;
  }, [])

  return currentUser;
}*/

//Storage
export async function upload(file, currentUser, setLoading){
  const fileRef = ref(storage, "profilepic/"+currentUser.uid+".png");
  setLoading(true);
  await uploadBytes(fileRef,file);
  await uploadBytes(fileRef,file);
  const photoURL = await getDownloadURL(fileRef);
  updateProfile(currentUser, {photoURL})
  setLoading(false);
  alert("New Profile Picture Uploaded!!!");
}
export async function UploadD(displayName, currentUser, setLoading){
  setLoading(true);
  updateProfile(currentUser, {displayName})
  setLoading(false);
  alert("Display name Changed!!!");
}