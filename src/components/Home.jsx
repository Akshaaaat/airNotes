import React, { useContext, useState } from "react";
import NoteContext from "../context/NoteContext";
import NoteItem from './NoteItem';

function Home() {

  const context = useContext(NoteContext)
  const {notes, addNote} = context;

  const submitResponse = (e) =>{
    e.preventDefault();   //Prevents the reloading of the page

    var noteTitle =document.getElementById('newtitle').value
    let noteContent= document.getElementById('newcontent').value;
    let noteTag= document.getElementById('newtag').value;
    addNote(noteTitle, noteContent, noteTag)
    
  }

  return (
    <>
      <div style={{ height: "71px" }}></div>  {/* This is to leave some area for the fixed navigation bar*/}

      <div className="container">
        
        <h2>Add Note</h2>
        <form id="newNote">
        <div className="mb-3">
          <label htmlFor="newtitle" className="form-label">Title</label>
          <input type="text" className="form-control" id="newtitle"/>
        </div>
        <div className="mb-3">
          <label htmlFor="newcontent" className="form-label">Content</label>
          <input type="text" className="form-control" id="newcontent"/>
        </div>
        <div className="mb-3">
          <label htmlFor="newtag" className="form-label">Tag</label>
          <input type="text" className="form-control" id="newtag"/>
        </div>
        <button type="submit" className="btn btn-outline-info" onClick={submitResponse}>Submit</button>
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
