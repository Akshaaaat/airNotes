import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import NoteMode from "./context/NoteMode";

function App() {

  return (
    <NoteMode>
      <Router>
        <Navbar />

        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
        
      </Router>
    </NoteMode>
  );
}

export default App;
