import React, {useState} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Login from './components/Login';
import SignUp from './components/SignUp';
import NoteMode from "./context/NoteMode";
import NoteState from "./context/NoteState";
import Alert from './components/Alert';
import About from './components/About'
import Contact from './components/Contact'

function App() {

  //function to disaplay alerts at respective places.
  const [alert, setAlert] = useState(null);
  const showAlert = (msg, type, timeout) =>{
    setAlert({msg, type})
    setTimeout(() => {
      setAlert(null)
    }, timeout);
  }

  return (
    <NoteMode>
      <NoteState>
        <Router>
          <Navbar showAlert = {showAlert}/>
          <Alert alert = {alert}/>

          <Routes>
            
            <Route exact path="/" element={<Home showAlert = {showAlert}/>} />
            <Route exact path="/about" element={<About showAlert = {showAlert} />} />

            <Route exact path="/login" element={<Login showAlert = {showAlert} />} />
            <Route exact path="/signup" element={<SignUp showAlert = {showAlert} />} />
            
          </Routes>

          <Contact showAlert = {showAlert} />
        </Router>
      </NoteState>
    </NoteMode>
  );
}

export default App;
