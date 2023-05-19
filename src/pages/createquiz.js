import { db } from "../config/firebase";
import { uid } from "uid";
import { set, ref } from "firebase/database";
import { useNavigate } from "react-router-dom";
import React , { useState } from "react";


export const CreateQuiz = () => {
    const navigate = useNavigate();
    const [quizTitle, setQuizTitle] = useState("");
    const [numQ, setNumQ] = useState(0);
    const [timer, setTimer] = useState("");
   // let [qCount, setQCount] = useState(1);
   const [ques_tion, setQ] = useState("");
   const [opt, setOpt] = useState("");
   const [optOne, setOptOne] = useState("");
   const [optTwo, setOptTwo] = useState("");
   const [optThree, setOptThree] = useState("");
   //const [incorrectA, setWList] = useState([]);
    const [qCount, setCounter] = useState(1);
    const incorrectA = [opt, optOne, optTwo];


    const dataSet = {
            question: ques_tion,
            incorrectAnswer: incorrectA,
            correctAnswer: optThree
        };
    const [questionSet,setQList] = useState([]);
    
    const handleSubmit = () =>{
        //e.preventDefault();
        setCounter(qCount => qCount+1)
        if(qCount === 1){
            setQList([dataSet]);
        }
        if(opt&&optOne&&optTwo&&optThree&&ques_tion){
            setQList((ls)=>[...ls,dataSet])
            setOpt("")
            setOptOne("")
            setOptTwo("")
            setOptThree("")
        }
        console.log(questionSet)
        if(qCount >= numQ){
            const uuid = uid();
            set(ref(db,`/quizlist/${uuid}`),{
                quizTitle,
                numQ,
                questionSet,
                timer,
            });
            navigate("/");
        }
    };
    
    return (
        <div>
            <h1>Create a new quiz</h1>
                <div className="divbox">
                    <h4>Quiz title</h4>
                    <p>
                        <input
                            placeholder="Enter quiz title"
                            type="text"
                            id="texxt"
                            required
                            onChange={(a) => { setQuizTitle(a.target.value); }}
                        />
                    </p>
                    <h4>Number of Questions</h4>
                    <p>
                        <input
                            placeholder="Enter number of questions"
                            type="number"
                            id="texxt0"
                            required
                            onChange={(b) => { setNumQ(b.target.value); }}
                        />
                    </p>
                    <h4>Set Quiz timer</h4>
                    <p>
                        <input
                            placeholder="Enter number of hours:minutes:seconds"
                            type="time"
                            id="texxt1"
                            required
                            onChange={(c) => { setTimer(c.target.value); }}
                        />
                    </p>
                
                </div>
                <div className="divbox1">
                    <h3>Question</h3>
                    <p>
                        <input
                            placeholder="Enter question ?"
                            type="text"
                            name="ques_tion"
                            value={ques_tion}
                            onChange={(e) => { setQ(e.target.value); }}
                        />
                    </p>
                    <h3>Incorrect Answers</h3>
                    <p>
                        <input
                            placeholder="Enter 1st option"
                            type="text"
                            name="opt"
                            value={opt}
                            onChange={(e) => { setOpt(e.target.value); }}
                        />
                    </p>
                    <p>
                        <input
                            placeholder="Enter 2nd option"
                            type="text"
                            name="optOne"
                            value={optOne}
                            onChange={(e) => { setOptOne(e.target.value); }}
                        />
                    </p>
                    <p>
                        <input
                            placeholder="Enter 3rd option"
                            type="text"
                            name="optTwo"
                            value={optTwo}
                            onChange={(e) => { setOptTwo(e.target.value); }}
                        />
                    </p>
                    <h3>Correct Answer</h3>
                    <p>
                        <input
                            placeholder="Enter 4th option"
                            type="text"
                            name="optThree"
                            value={optThree}
                            onChange={(e) => { setOptThree(e.target.value); }}
                        />
                    </p>
                    <button className="first" onClick={handleSubmit}>Add</button>
                </div>
        </div>
    );
};
export default CreateQuiz;
