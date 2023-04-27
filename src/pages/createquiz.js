import {useState} from "react";
export const CreateQuiz = () => {
    let [stateVar,setStateVar] = useState(true);
    const [quizTitle, setQuizTitle] = useState("");
    const [numQ, setNumQ] = useState(0);
    const [timer, setTimer] = useState(0);
    let [qCount,setQCount] = useState(0);
    let [ques_tion,setQ] = useState("");
    let [opt,setOpt] = useState("");
    let [optOne,setOptOne] = useState("");
    let [optTwo,setOptTwo] = useState("");
    let [optThree,setOptThree] = useState("");
    let [fButton,setButton] = useState("Next Question");
    let incorrectA = [opt,optOne,optTwo];
    let questionSet = [];
    let dataSet = {question:ques_tion,
        incorrectAnswer:incorrectA,
        correctAnswer: optThree
    }
    let createQ = () =>{
        setStateVar(false);
        setQCount(qCount+1);
    };
    let submit = () =>{
        setQCount(qCount+1);
        questionSet.push(dataSet);
        d.target.value = "";
        e.target.value = "";
        f.target.value = "";
        h.target.value = "";
        if(qCount === numQ){
            setButton("Submit");
        }
    };
    return (
            <div>
            <h1>Create a new quiz</h1>
        {stateVar &&(
            <>
                <h4>Quiz title</h4>
                <p>
                <input
                placeholder = "Enter quiz title" 
                type = "text"
                required
                onChange={(a) => {setQuizTitle(a.target.value);}}
                />
                </p>
                <h4>Number of Questions</h4>
                <p>
                <input
                placeholder = "Enter number of questions" 
                type = "number"
                required
                onChange={(b) => {setNumQ(b.target.value);}}
                />
                </p>
                <h4>Set Quiz timer</h4>
                <p>
                <input
                placeholder = "Enter number of minutes" 
                type = "number"
                required
                onChange={(c) => {setTimer(c.target.value);}}
                />
                </p>
                <button className="first" onClick={createQ}>Create</button>
            </>
        )}
        {!stateVar &&(
            <>
            <h3>Question</h3>
            <p>
                <input
                placeholder = "Enter question ?" 
                type = "text"
                required
                onChange={(d) => {setQ(d.target.value);}}
                />
            </p>
            <h3>Incorrect Answers</h3>
            <p>
                <input
                placeholder = "Enter 1st option" 
                type = "text"
                required
                onChange={(e) => {setOpt(e.target.value);}}
                />
            </p>
            <p>
                <input
                placeholder = "Enter 2nd option" 
                type = "text"
                required
                onChange={(f) => {setOptOne(f.target.value);}}
                />
            </p>
            <p>
                <input
                placeholder = "Enter 3rd option" 
                type = "text"
                required
                onChange={(g) => {setOptTwo(g.target.value);}}
                />
            </p>
            <h3>Correct Answer</h3>
            <p>
                <input
                placeholder = "Enter 4th option" 
                type = "text"
                required
                onChange={(h) => {setOptThree(h.target.value);}}
                />
            </p>
            <button className="first" onClick={submit}>{fButton}</button>
            </>
        )}
        </div>
    );
};