import React, { useContext, useEffect} from "react";
import NoteContext from "../context/NoteContext";
import { ModeContext } from "../context/NoteMode";
import NoteItem from './NoteItem';
import './CSS/Home.css'

function Home() {

  const mode = useContext(ModeContext);
  const context = useContext(NoteContext)
  const {notes, addNote, getNotes, editNote} = context;

  //Function to call getNotes() which will be fetching all the notes of a given user form the mongoDB database
  useEffect(()=>{
    getNotes();
  },[])

  //Funciton to submit the response of the addNote
  const submitResponse = (e) =>{
    e.preventDefault(); //Prevents the reloading of the page

    var noteTitle= document.getElementById('newtitle').value
    let noteContent= document.getElementById('newcontent').value;
    let noteTag= document.getElementById('newtag').value;
    addNote(noteTitle, noteContent, noteTag)    
  }

  var noteToBeEdited;
  //Function to trigger the modal when Edit is pressed
  const useModal = (note) =>{
    document.getElementById("modalTrigger").click();
    console.log(note)
    noteToBeEdited= note;
  }
  const submitChanges=  (e) =>{
    e.preventDefault(); //Prevents the reloading of the page
    var editTitle= document.getElementById('editTitle').value
    let editContent= document.getElementById('editContent').value;
    let editTag= document.getElementById('editTag').value;

    var note = noteToBeEdited
    editNote(note._id,editTitle,editContent, editTag)

    document.getElementById("modal-cancel").click();
  }

  return (
    <>
      <div style={{ height: "71px" }}></div>  {/* This is to leave some area for the fixed navigation bar*/}

      <div className="container">

        {/*Section to add a note*/}
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


        {/*Modal to be displayed when editing a Note*/}
        <button type="button" className="btn btn-primary" id="modalTrigger" data-bs-toggle="modal" data-bs-target="#staticBackdrop" style={{visibility:'hidden'}}>
          Hidden Modal Button Which we will be abusing to open the Modal
        </button>
        <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered">
            <div className={`modal-content ${ mode.state.mode === "light" ? "modal-light" : "modal-dark"}`}>
              <div className="modal-header">
                <h5 className="modal-title" id="staticBackdropLabel">Edit Note</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                
                {/*Form in the modal to take the inputs*/}
                <form id="editNote">
                  <div className="mb-3">
                    <label htmlFor="editTitle" className="form-label">Title</label>
                    <input type="text" className="form-control" id="editTitle"/>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="editContent" className="form-label">Content</label>
                    <textarea type="text" rows="4" className="form-control" id="editContent"/>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="editTag" className="form-label">Tag</label>
                    <input type="text" className="form-control" id="editTag"/>
                  </div>
                </form>

              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" id="modal-cancel" data-bs-dismiss="modal">Cancel</button>
                <button type="button" className="btn btn-primary" onClick={submitChanges}>Submit</button>
              </div>
            </div>
          </div>
        </div>


        {/*Section to add display all Notes*/}
        <div className = "notes">
          <h2>Notes</h2>
          <div className="d-flex flex-wrap justify-content-start">
            {
              notes.map((note)=>{
                return <div key = {note._id}>
                  <NoteItem note={note} useModal= {useModal}/>
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
