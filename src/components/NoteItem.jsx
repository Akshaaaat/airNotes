import React, { useContext } from "react";
import "./CSS/NoteItem.css";
import { ModeContext } from "../context/NoteMode";
import NoteContext from "../context/NoteContext";

const NoteItem = (props) => {
  const { note, useModal } = props;
  const mode = useContext(ModeContext);

  const context = useContext(NoteContext);
  const { deleteNote } = context;

  return (
    <div className="noteItem">
      <div className={`card card-hover ${ mode.state.mode === "light" ? "card-light" : "card-dark"}   shadow p-3 mb-5 rounded `} >
        <div className="card-body">
          <div className="d-flex justify-content-between">
            <h5 className="card-title">{note.title}</h5>
            <div className="column card-icons d-flex flex-no-wrap">
              <span className="material-symbols-outlined icon-delete" onClick={() => { deleteNote(note._id); }}>
                delete
              </span>
              <span className="material-symbols-outlined icon-edit" onClick={ ()=>{useModal(note)}}>edit</span>
            </div>
          </div>
          <p className="card-text"> {note.content} </p>
        </div>
      </div>
    </div>
  );
};

export default NoteItem;
