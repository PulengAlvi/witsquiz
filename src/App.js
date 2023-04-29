import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { Main } from "./pages/main";
import { Login } from "./pages/login";
import { SignUp } from "./pages/signup";
//import { ViewQuiz } from "./pages/viewquiz";
import { Account } from "./pages/account";
import { Navbar } from "./components/navbar";
import { CreateQuiz } from "./pages/createquiz";

function App() {
  /*ReactDOM.render(
    <React.StrictMode>
      <QuizProvider>
        <Quiz />
      </QuizProvider>
    </React.StrictMode>,
    document.getElementById("root")
  );*/
  //reactjs is a single html page app, so here we setup navigation bar with links/paths to different pages
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/createquiz" element={<CreateQuiz/>} />
          <Route path="/account" element={<Account />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;