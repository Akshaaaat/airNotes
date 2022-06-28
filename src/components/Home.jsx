import React, { useContext, useEffect, useState} from "react";
import NoteContext from "../context/NoteContext";
import { useNavigate } from "react-router-dom";
import { ModeContext } from "../context/NoteMode";
import NoteItem from './NoteItem';
import './CSS/Home.css'

function Home(props) {

  const mode = useContext(ModeContext);
  const context = useContext(NoteContext)
  const {notes, addNote, getNotes, editNote} = context;
  const navigate = useNavigate();

  //Function to call getNotes() which will be fetching all the notes of a given user form the mongoDB database
  useEffect(()=>{
    if(localStorage.getItem('airnotestoken')){
      getNotes();
    }
    else{
      props.showAlert("Sign In. Redirecting to Login Page...",'danger', 2300)
      setTimeout(() => {
        navigate('/login')
      }, 1500);
      
    }
    
  },[])

  //Funciton to submit the response of the addNote
  const submitResponse = (e) =>{
    e.preventDefault(); //Prevents the reloading of the page

    var noteTitle= document.getElementById('newtitle').value
    let noteContent= document.getElementById('newcontent').value;
    let noteTag= document.getElementById('newtag').value;
    addNote(noteTitle, noteContent, noteTag)    

    if(noteTitle.length<4 || noteContent.length<5)
    {
      props.showAlert("Enter a valid note Title and Description. Note has not been added", 'danger', 3500);
    }
    else{
      props.showAlert("Note Added Successfully", 'success', 1500);
    }
  }


  //Section to Edit The Note

  const[noteEdit, setNoteEdit] = useState([])
  //Function to trigger the modal when Edit is pressed
  const useModal = (note) =>{
    document.getElementById("modalTrigger").click();
    setNoteEdit(note);
  }

  const submitChanges=  (e) =>{
    e.preventDefault(); //Prevents the reloading of the page
    
    editNote(noteEdit._id,noteEdit.title,noteEdit.content, noteEdit.tag)
    props.showAlert("Note Edited Successfully", 'success', 1500);

    document.getElementById("modal-cancel").click();
  }


  //Creating an object for style of the Input Boxes
  const inputStyle = (mode.state.mode==='dark'?{color:'whitesmoke', backgroundColor:'#1e2125e3'}:{})

  return (
    <>
      <div className="container-md">

        {/*Section to add a note*/}
        <div className="new-note-form">
          <h2>Add Note</h2>
          <form id="newNote">
            <div className="mb-3">
              <label htmlFor="newtitle" className="form-label">Title</label>
              <input type="text" className="form-control" id="newtitle" style={inputStyle} required/>
            </div>
            <div className="mb-3">
              <label htmlFor="newcontent" className="form-label">Content</label>
              <textarea type="text" rows={4} className="form-control" id="newcontent" minLength={4} style={inputStyle} required/>
            </div>
            <div className="mb-3">
              <label htmlFor="newtag" className="form-label">Tag</label>
              <input type="text" className="form-control" id="newtag" style={inputStyle} />
            </div>
            <button type="submit" className="btn btn-outline-info" onClick={submitResponse}>Submit</button>
          </form>
        </div>


        {/*Modal to be displayed when editing a Note*/}
        <button type="button" className="btn btn-primary" id="modalTrigger" data-bs-toggle="modal" data-bs-target="#staticBackdrop" style={{visibility:'hidden'}}>
          Hidden Modal Button Which we will be Clicking to open the Modal
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
                    <input type="text" className="form-control" value={noteEdit.title} style={inputStyle} onChange={ (e) => setNoteEdit({...noteEdit, title:e.target.value})} />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="editContent" className="form-label">Content</label>
                    <textarea type="text" rows="4" className="form-control" value={noteEdit.content} onChange={ (e) => setNoteEdit({...noteEdit, content:e.target.value})} style={inputStyle} minLength={4}/>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="editTag" className="form-label">Tag</label>
                    <input type="text" className="form-control" value={noteEdit.tag} onChange={ (e) => setNoteEdit({...noteEdit, tag:e.target.value})} style={inputStyle} />
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
          {notes.length===0 && <div className="no-notes-to-display">No Notes to Display</div>}
          <div className="d-flex flex-wrap justify-content-center justify-content-md-start">
            {
              notes.map((note)=>{
                return <div key = {note._id}>
                  <NoteItem showAlert={props.showAlert} note={note} useModal= {useModal}/>
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
