import { MenuItem, TextField } from '@mui/material'
import Categories from '../components/category'
import { useNavigate } from 'react-router-dom';
import {collection , addDoc, Firestore, query, getDocs} from 'firebase/firestore';
import { useState } from 'react';
import { db } from '../config/firebase';
import ErrorMessage from '../components/ErrorMessage';


 const Createquiz =() => {
    const [title,setTitle] = useState("");
    const [numberOfQues,setNumberOfQues] = useState("");
    const [category,setCategory] = useState("");
    const [errorMessage,setErrorMessage] = useState(false);

    const navigate = useNavigate();
    //collect data from page to database
   const handleSave = async ()=>{
    if( title ==='' || category === '' || numberOfQues ===''){
      //display error message
      setErrorMessage(true);
      return 
    }
    const colRef = collection(db,'Quizzes')
    const payload ={title,numberOfQues,category}
    await addDoc(colRef,payload)

    setTitle('');
    setCategory('');
    setNumberOfQues('');
    navigate('/addquestions')
   };
    
      
  return (
    <div>
       <h1>Create your own quiz</h1>
        
       {errorMessage && <ErrorMessage>Please fill all fields</ErrorMessage>}

       <div className='settings_select'>

       <TextField
        label="Quiz title"
        variant ="outlined"
        style={{marginBottom:25}}
        value={title}
        onChange={(e) => setTitle(e.target.value)}>
        </TextField>

        <TextField

        label="Number of questions"
        variant ="outlined"
        style={{marginBottom:30}}
        type='Number'
        value={numberOfQues}
        onChange={(e) =>setNumberOfQues(e.target.value)}
        >
        </TextField>

        <TextField
        select
        label="Category"
        variant ="outlined"
        style={{marginBottom:30}}
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        >
            {
                Categories.map((cat) =>(

                <MenuItem key ={cat.category} value={cat.category}>
                    {cat.category}
                </MenuItem>
                
                ))
            }
            
        </TextField>
        
       
       </div>

       <button className={"first"} onClick={handleSave}
       style={{width:'170px',height:'30px'}}>
        Save quiz
       </button>
    </div>
    
  )
}
 
 export default Createquiz

