import React, { useContext} from 'react';
import {NavLink, useNavigate} from 'react-router-dom';
import './CSS/Navbar.css';
import { ModeContext } from '../context/NoteMode'

export default function Navbar(props) {

  const mode = useContext(ModeContext);
  let navigate  = useNavigate();

  //When the navigation Link is active, this style will take place
  let activeStyle = {
    fontWeight: "500",
    fontSize:"0.99rem",
  }

  const logOut = () =>{
    localStorage.removeItem('airnotestoken');
    navigate('/login')
    props.showAlert('Logged Out Successfully', 'success', 2000)
  }


  return (
    <>
    <nav className = "navbar sticky-top navbar-expand-lg navbar-dark" style = {{borderBottom:'1px solid rgb(221 219 230 / 30%)', backgroundColor:'#001429', minHeight:'73px'}}>
    
      <div className="container-fluid">
        <div style={{fontSize: '22px', fontWeight:'500', padding:'4px', color: 'whitesmoke'}} >
            <NavLink className="airNotes-logo" aria-current="page" to="/">airNotes</NavLink>
        </div>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item mx-2  my-1" >
              <NavLink className="nav-link active hoverByCSS" style={({isActive})=>isActive? activeStyle:undefined} aria-current="page" to="/">Home</NavLink>
          </li>
            <li className="nav-item mx-2 my-1">
              <NavLink className="nav-link active hoverByCSS" style={({isActive})=>isActive? activeStyle:undefined} aria-current="page" to="/about">About</NavLink>
            </li>
            <li className="nav-item mx-2 my-1">
              <NavLink className="nav-link active hoverByCSS" style={({isActive})=>isActive? activeStyle:undefined} aria-current="page" to="/contact">Contact Us</NavLink>
            </li>
          </ul>

          {/*Making Darkmode toggle Button*/}
          <div className="form-check form-switch mx-3">
            {/* eslint-disable-next-line*/}     
            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={mode.toggleMode}  style={{cursor:'pointer'}} />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault" style={{color: 'whitesmoke'}}>
            <span className="material-symbols-outlined">dark_mode</span>
            </label>
          </div>

          {!localStorage.getItem('airnotestoken') && <div>
            <NavLink to="/login" className="btn btn-outline-primary btn-sm mx-2" >Login</NavLink>
            <NavLink to="/signup" className="btn btn-outline-primary btn-sm mx-2">Sign Up</NavLink>
          </div>}
          {localStorage.getItem('airnotestoken') && <div style={{width:'120px', display:'flex', justifyContent:'center'}}>
            <button className='btn btn-outline-primary btn-sm' onClick= {logOut}>LogOut</button>
          </div>}

        </div>
      </div>
    </nav>
    </>
  )
}