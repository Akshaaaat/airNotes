import React, { useContext } from "react";
import NoteContext from "../context/NoteContext";
import NoteItem from './NoteItem';

function Home() {
  const context = useContext(NoteContext)
  const {notes, setNotes} = context;
  return (
    <>
      <div style={{ height: "71px" }}></div>  {/* This is to leave some area for the fixed navigation bar*/}

      <div className="container">
        
        <h2>Add Note</h2>
        <form>
        <div className="mb-3">
          <label htmlFor="userEmail" className="form-label">Email address</label>
          <input type="email" className="form-control" id="userEmail" aria-describedby="emailHelp"/>
        </div>
        <div className="mb-3">
          <label htmlFor="loginPassword" className="form-label">Password</label>
          <input type="password" className="form-control" id="loginPassword"/>
        </div>
        <button type="submit" className="btn btn-outline-info">Submit</button>
      </form>

      <div className = "notes">
        <h2>Notes</h2>

        <div className="d-flex flex-wrap justify-content-start">
          {
            notes.map((note)=>{
              return <div key = {note._id}>
                <NoteItem note={note}/>
              </div>     
            })
          }
        </div>

      </div>

      </div>
    </>
  );
}

export default Home;
