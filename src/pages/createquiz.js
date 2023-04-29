import { db } from "../config/firebase";
import { uid } from "uid";
import { set, ref } from "firebase/database";
import { useState } from "react";
export const CreateQuiz = () => {
    const [quizTitle, setQuizTitle] = useState("");
    const [numQ, setNumQ] = useState(0);
    const [timer, setTimer] = useState(0);
    let [qCount, setQCount] = useState(1);
    let [ques_tion, setQ] = useState("");
    let [opt, setOpt] = useState("");
    let [optOne, setOptOne] = useState("");
    let [optTwo, setOptTwo] = useState("");
    let [optThree, setOptThree] = useState("");
    let questionSet = [];

    let submit = () => {
        // disable ={document.getElementById("edit").value === "" || document.getElementById("edit0").value === "" || document.getElementById("edit1").value === "" || document.getElementById("edit2").value === "" || document.getElementById("edit").value === ""}
        // disable ={document.getElementById("texxt").value === "" || document.getElementById("texxt0").value === "" || document.getElementById("texxt1").value === ""}
        
        let incorrectA = [opt, optOne, optTwo];
        let dataSet = {
            question: ques_tion,
            incorrectAnswer: incorrectA,
            correctAnswer: optThree
        }
        questionSet.push(dataSet);
        setQCount(qCount + 1);
        if(qCount > numQ){
            const uuid = uid();
            set(ref(db,`/quizlist/${uuid}`),{
                quizTitle,
                numQ,
                timer,
                questionSet
            });
        }
        
        document.getElementById("edit").value = "";
        document.getElementById("edit0").value = "";
        document.getElementById("edit1").value = "";
        document.getElementById("edit2").value = "";
        document.getElementById("edit3").value = "";
    };
    return (
        <div>
            <h1>Create a new quiz</h1>
                <div>
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
                            placeholder="Enter number of minutes"
                            type="number"
                            id="texxt1"
                            required
                            onChange={(c) => { setTimer(c.target.value); }}
                        />
                    </p>
                
                </div>
                <div>
                    <h3>Question</h3>
                    <p>
                        <input
                            placeholder="Enter question ?"
                            type="text"
                            id="edit"
                            required
                            onChange={(dd) => { setQ(dd.target.value); }}
                        />
                    </p>
                    <h3>Incorrect Answers</h3>
                    <p>
                        <input
                            placeholder="Enter 1st option"
                            type="text"
                            id="edit0"
                            required
                            onChange={(e) => { setOpt(e.target.value); }}
                        />
                    </p>
                    <p>
                        <input
                            placeholder="Enter 2nd option"
                            type="text"
                            id="edit1"
                            required
                            onChange={(f) => { setOptOne(f.target.value); }}
                        />
                    </p>
                    <p>
                        <input
                            placeholder="Enter 3rd option"
                            type="text"
                            id="edit2"
                            required
                            onChange={(g) => { setOptTwo(g.target.value); }}
                        />
                    </p>
                    <h3>Correct Answer</h3>
                    <p>
                        <input
                            placeholder="Enter 4th option"
                            type="text"
                            id="edit3"
                            required
                            onChange={(h) => { setOptThree(h.target.value); }}
                        />
                    </p>
                    <button className="first" onClick={submit}>"Next/Submit"</button>
                </div>
        </div>
    );
};