//<<<<<<< HEAD:witsquiz/src/pages/main.js
import { useEffect, useState } from "react";
import { db } from "../config/firebase";
import { onSnapshot } from "firebase/firestore";
import { collection,getDocs } from "firebase/firestore";
import { useNavigate } from "react-router-dom";



export const Main = () => {

    //Main method returns layout of html home page
    const [allQuizzes,setAllQuizzes] = useState([]);
    const [quiz,setQuiz] = useState("");

    const getAllQuizzes = async () =>{
      await getDocs(collection(db, "Quizzes"))
            .then((querySnapshot)=>{               
                const newData = querySnapshot.docs
                    .map((doc) => ({...doc.data(), id:doc.id }));
                setAllQuizzes(newData);                
                console.log(quiz, newData);
            })
      
    }
    useEffect(()=>{
      getAllQuizzes();
  }, [])
      const navigate = useNavigate();
 
     
    

    return (

      
 <div>
  <h1>Browse quizzes</h1>
   <div className="quiz_listing">
    
    {
                        allQuizzes?.map((quiz,i)=>(
                            <p key={i} style={{
                              padding:20,
                              borderRadius:3,
                              borderBlockStyle:'solid',
                              flexDirection:'row',
                              backgroundColor:'#00416a',
                             
                              color:'white',
                              width:'70%',
                             
                              marginLeft:'100px'    
                            }}>
                               <p style={{fontWeight:'bold',fontSize:'20'}}>{quiz.title}</p>
                                <p>Number of questions :{quiz.numberOfQues} </p>
                                <p>Category :{quiz.category}</p>
                                <p>Duration :{quiz.Time}</p>

                                <button style={{
                                  backgroundColor:'white',
                                  borderRadius:'10px',
                                  width:'90px',
                                  height:'30px',
                                  marginLeft:'150px',
                                
                                  
                                }}
                                onClick={()=>{
                                  navigate('/answerQuizScreen',{
                                    quizId:quiz.id
                                  })
                                }}> 

                                  answer</button>              
                            </p>
                            
                        ))
                    }
  </div>
                    
 </div>
         
    )
  };
//=======

