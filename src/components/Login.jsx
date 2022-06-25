import React, {useContext, useState} from "react";
import { useNavigate, Link } from "react-router-dom";
import { ModeContext } from '../context/NoteMode'
import "./CSS/Login.css";

const Login = (props) => {

  const mode = useContext(ModeContext);
  let navigate = useNavigate();

  //updateCreds changes the credential as we type the email and password
  const [cred, setCred] = useState({email:"", pwd:""});

  const login = async (e) =>{
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/auth/login",{
      method:'POST',
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({email:cred.email, pwd:cred.pwd})
    });
    const json = await response.json();
    if(json.success) {
      //Save the auth token and redirect on the other site
      localStorage.setItem('airnotestoken', json.authtoken);
      navigate('/')
      props.showAlert("Login Successsful", "success", 1500)
    }
    else props.showAlert(json.errors, "danger", 3000)

  }

  //Color of Input in Dark Mode
  const inputStyle = (mode.state.mode==='dark'?{color:'whitesmoke', backgroundColor:'#1e21258a'}:{})

  return (
    <div>

      <div className={`card login-form ${ mode.state.mode === "light" ? "card-light" : "card-dark"} shadow p-3 mb-5 rounded`}>
        <div className="card-body">
          <h5 className="card-title">Login</h5>
          <form id="login-form">
            <div className="mb-3">
              <label htmlFor="userEmail" className="form-label">Email</label>
              <input type="email" className="form-control" value={cred.email} id="userEmail" style={inputStyle} onChange={(e)=>setCred({...cred,email:e.target.value})} required/>
            </div>
            <div className="mb-3">
              <label htmlFor="userPassword" className="form-label">Password</label>
              <input type="password" className="form-control" value={cred.pwd} id="userPassword" style={inputStyle} onChange={(e)=>setCred({...cred,pwd:e.target.value})} required/>
            </div>
            <button type="submit" className="btn btn-outline-info" onClick={login}>Login</button>
            <div className="toSignup">
              New user? <Link to="/signup">Sign Up</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;