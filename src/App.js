import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import NoteMode from "./context/NoteMode";
import NoteState from "./context/NoteState";

function App() {
  return (
    <NoteMode>
      <NoteState>
        <Router>
          <Navbar />

          <Routes>
            
            <Route exact path="/" element={<Home />} />
            
          </Routes>
        </Router>
      </NoteState>
    </NoteMode>
  );
}

export default App;
