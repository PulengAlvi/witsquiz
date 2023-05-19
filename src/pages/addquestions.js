// import { TextField } from '@mui/material';
// import React, { useState } from 'react'
// import { db } from '../config/firebase';
// import ErrorMessage from '../components/ErrorMessage';
// import { addDoc, collection ,doc} from 'firebase/firestore';


// const Addquestions = () => {

//     const [errorMessage,setErrorMessage] = useState(false);

//     const [currentQuizId,setCurrentQuizId] = useState("");
//     const [currentQuestionId,setCurrentQuestionId] = useState("");
//     const [currentQuizTitle,setCurrentQuizTitle] = useState("");

//     const [question,setQuestion] = useState("");

//     const [correctAnswer,setCorrectAnswer] = useState("");
//     const [option2,setOption2] = useState("");
//     const [option3,setOption3] = useState("");
//     const [option4,setOption4] = useState("");

    


//     const handleQuestionSave = async () =>{
//         if(question === "" || correctAnswer ==="" 
//         || option2 ==="" || option3 ==="" || option4 ===""){
//             //display error message
//             setErrorMessage(true);
//             return
//         }
        
//         //add question to db (use subcollection)

      
        
//         //reset
//         setQuestion("");
//         setCorrectAnswer("");
//         setOption2("");
//         setOption3("");
//         setOption4("");

//     }
//   return (
//       <div  >
//         <div>
//             <h2>Add question</h2>
//             {errorMessage && <ErrorMessage>Please fill all fields</ErrorMessage>}
//         </div>
//         <div className='settings_select'>
//         <TextField 
//         label="Question"
//         style={{marginBottom:'25px'}}
//         value={question}
//         onChange={(e) =>setQuestion(e.target.value)}>

//         </TextField>

//         <TextField 
//         label ="Correct answer"
//         style={{marginBottom:'25px'}}
//         value={correctAnswer}
//         onChange={(e) => setCorrectAnswer(e.target.value)}>
            
//         </TextField>
//         <TextField 
//         label ="Option 2"
//         style={{marginBottom:'25px'}}
//         value={option2}
//         onChange={(e) => setOption2(e.target.value)}>
            
//         </TextField>
//         <TextField 
//         label ="Option 3"
//         style={{marginBottom:'25px'}}
//         value={option3}
//         onChange={(e) => setOption3(e.target.value) }>
            
//         </TextField>

//         <TextField 
//         label ="Option 4"
//         style={{marginBottom:'25px'}}
//         value={option4}
//         onChange={(e) => setOption4(e.target.value)}>
            
//         </TextField>
//         </div>

//         <div>
//             <button className='first'
//             style={{width:'150px',height:'30px',marginBottom:'10px'}}
//             onClick={handleQuestionSave}>
//                 Next question
//             </button>
//         </div>
//     </div>          

//   )
// }
// export default Addquestions;