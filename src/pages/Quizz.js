import { useContext ,useState} from "react";
import Question from "./Question"
import { QuizContext } from "./quiz";
import Timer from  './Timer';
//import Home, {timer_val} from "./home";
import {set, ref } from "firebase/database";
import { uid } from "uid";
import { db } from "../config/firebase";
import { TittleValue, setValueTitle, Home} from './home';


import {auth} from "../config/firebase"
import 'firebase/auth';

//console.log(displayTime)

export const Quizz = () => {
  //navigate("/");
  // const getTitle = Main();
  // const displayTime = Timer();

  const [quizState, dispatch] = useContext(QuizContext);
  const [userName , setName] = useState("");
  const [quiztittle, setTitle] = useState("");
  //const[userphoto , setphoto] = useState()
 
  const [userScore , setScore ] = useState(0);


  const submit_quiz= () =>{
    const uuid = uid();
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setName(user.displayName);
     } else {
    //     // User is logged out
      setName('uknown user');
       }
   });
    setTitle("Web Development Quiz");
    setScore((quizState.correctAnswersCount/quizState.questions.length).toFixed(2)*100)
    set(ref(db,`/UserMarks/${uuid}`),{
        userName,
        quiztittle,
        userScore,

    });
  }


// Home().then((response) => {
//   console.log( response.data.getTimer);
// });
 
  // setTitle ("Math Quiz");

 return (
  <div className="quiz">
    {quizState.showResults && (
      <div className="results">
        <div className="congratulations">Congratulations!</div>
        <div className="results-info">
          <div>You have completed the quiz.</div>
          <div>
            You've got {quizState.correctAnswersCount} of &nbsp;
            {quizState.questions.length} right.
    
          </div>
          <button className="first"  onClick={submit_quiz}>Submit Quiz</button>
        </div>
        <div
          onClick={() => dispatch({ type: "RESTART" })}
          className="next-button"
        >
          Restart
        </div>
        
      </div>
 )}
     {!quizState.showResults && (
      <div>
        {/* <p>timer value : {Home.timer_val} <Home /></p> */}
        <h3 className="cTime" > Time Left: {Timer}  <Timer /></h3>
        <div className="score">
          Question {quizState.currentQuestionIndex + 1}/
          {quizState.questions.length}
        </div>
        <Question />
        {quizState.currentAnswer && (
          <div
            onClick={() => dispatch({ type: "NEXT_QUESTION" })}
            className="next-button"
          >
            Next question
          </div>
        )}
      </div>
    )}
  </div>
);
};


export default Quizz;
