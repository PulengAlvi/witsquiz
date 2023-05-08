import { db } from "../config/firebase";
import { ref, onValue } from "firebase/database";
import { useNavigate } from "react-router-dom";
import React , { useEffect } from "react";
//import { useState } from "react";

export const Main = () => {
    //Main method returns layout of html home page
    //const [data, setData] = useState([]);
    //const [index, setIndex] = useState(0);
    const navigate = useNavigate();
    const getData = () => {
      const data = ref(db, 'quizlist') // CHANGE 'chars' TO YOUR DATABASE NAME
      onValue(data, (snapshot) => {
        console.log([snapshot.val()]);
        //setData((ls)=>[...ls,snapshot.val()]);
      })
    }
    useEffect(() => {
      getData()
    }, []);
    const getQuiz = () => {
        navigate("/viewquiz");
    }
    const get_Quiz = () => {
        navigate("/viewquiz")
    }
    const getQuiz_ = () => {
        navigate("/viewquiz")
    }
    return <div>
         <h1 data-testid = "main-1">WitsQuiz Home Page</h1>
         <img src={"/logo2.jpg"} alt = "/logo1.jpg" width="600" height="600" />
         <h3>Available Quizzes</h3>
         <p>
         <button className="first" onClick={getQuiz}>Web Dev Quiz</button>
         </p>
         <p>
         <button className="first" onClick={get_Quiz}>CSS Quiz</button>
         </p>
         <p>
         <button className="first" onClick={getQuiz_}>Math Quiz</button>
         </p>
         </div>  
  };