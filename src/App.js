import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { Main } from "./pages/main";
import { Login } from "./pages/login";
import { SignUp } from "./pages/signup";
import { Navbar } from "./components/navbar";
import Createquiz from "./pages/createquiz";
import Answerquiz from "./pages/answerquiz";
import Addquestions from "./pages/addquestions";


function App() {
  

  
  
  //reactjs is a single html page app, so here we setup navigation bar with links/paths to different pages
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/createquiz" element={<Createquiz />} />
          <Route path="/answerquiz" element={<Answerquiz/>} />
          <Route path="/addquestions" element={<Addquestions/>} />
         
        
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;


/*import './App.css';
//import {Auth} from "./components/auth"

function App() {
  return (
    <div className="App">
      
    </div>
  );
}
//<Auth />
export default App;
*/