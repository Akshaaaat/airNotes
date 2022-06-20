import React, { useContext } from "react";
import NoteContext from "../context/NoteContext";

function Home() {
  const a = useContext(NoteContext)
  return (
    <>
      <div style={{ height: "71px" }}></div>  {/* This is to leave some area for the fixed navigation bar*/}
      <div className="container">
        
        <div>hii {a.state.mode}</div>
        <div className="btn btn-outline-info btn-sm" onClick={a.toggleMode}>ToggleMode</div>

      </div>
    </>
  );
}

export default Home;
