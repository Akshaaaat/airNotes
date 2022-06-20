import React, { useContext } from 'react';
import {Link} from 'react-router-dom';
import './CSS/Navbar.css';
import NoteContext from '../context/NoteContext'

export default function Navbar() {

  const mode = useContext(NoteContext);

  return (
    <>
    <nav className = "navbar fixed-top navbar-expand-lg navbar-dark" style = {{borderBottom:'1px solid rgb(221 219 230 / 30%)', backgroundColor:'#001429', minHeight:'73px'}}>
    
      <div className="container-fluid">
        <div style={{fontSize: '22px', fontWeight:'500', padding:'4px', color: 'whitesmoke'}} >
            <Link className="airNotes-logo" aria-current="page" to="/">airNotes</Link>
        </div>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item mx-3 my-1">
              <Link className="nav-link active hoverByCSS" aria-current="page" to="/about">About</Link>
            </li>
          </ul>

          {/*Making Darkmode toggle Button*/}
          <div className="form-check form-switch mx-3">
            {/* eslint-disable-next-line*/}
            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={mode.toggleMode}  style={{cursor:'pointer'}} />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault" style={{color: 'whitesmoke'}}>
              Dark Mode
            </label>
          </div>

        </div>
      </div>
    </nav>
    </>
  )
}