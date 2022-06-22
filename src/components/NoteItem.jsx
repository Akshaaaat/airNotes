import React, { useContext } from "react";
import "./CSS/NoteItem.css";
import { ModeContext } from "../context/NoteMode";

const NoteItem = (props) => {
  const { note } = props;
  const mode = useContext(ModeContext);

  return (
    <div>
      <div
        className={`card  ${
          mode.state.mode === "light" ? "card-light" : "card-dark"
        } `}
      >
        <div className="card-body">
          <div className="d-flex justify-content-between">
            <h5 className="card-title">{note.title}</h5>
            <div className="column card-icons d-flex flex-no-wrap">
                <span className="material-symbols-outlined icon-delete">delete</span>
                <span className="material-symbols-outlined icon-edit">edit</span>
            </div>
          </div>
          <p className="card-text"> {note.content} </p>
        </div>
      </div>
    </div>
  );
};

export default NoteItem;
