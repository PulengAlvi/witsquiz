import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { Main } from "./pages/main";
import { Login } from "./pages/login";
import { SignUp } from "./pages/signup";
import { ViewQuiz } from "./pages/viewquiz";
import { Account } from "./pages/account";
import { Navbar } from "./components/navbar";
import { CreateQuiz } from "./pages/createquiz";
import Createquiz from "./pages/createquiz";
import Answerquiz from "./pages/answerquiz";
import Addquestions from "./pages/addquestions";
import Leaderboard from "./pages/leaderboard";
import Home from "./pages/home";


function App() {
  

  
  
  //reactjs is a single html page app, so here we setup navigation bar with links/paths to different pages
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/createquiz" element={<CreateQuiz/>} />
          <Route path="/viewquiz" element={<ViewQuiz/>} />
          <Route path="/account" element={<Account />} />
          <Route path="/createquiz" element={<Createquiz />} />
          <Route path="/answerquiz" element={<Answerquiz/>} />
          <Route path="/addquestions" element={<Addquestions/>} />
          <Route path = "/leaderboard" element= {<Leaderboard/>}/>
         
        
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;