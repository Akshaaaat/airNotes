import React, {useContext, useState} from "react";
import { useNavigate, Link } from "react-router-dom";
import { ModeContext } from '../context/NoteMode'
import "./CSS/Login.css";

const SignUp = (props) => {
  //Note: Most of the components of 'signup' are same as that in 'login'. Hence, the name 'login' can be seen at several places in the 'signup' page of the code

  const mode = useContext(ModeContext);
  let navigate = useNavigate();
  const [cred, setCred] = useState({email:"",name:"", pwd:"", confirm_pwd:""});

  const signup = async (e) =>{

    if(cred.confirm_pwd!==cred.pwd) {
      alert("Inavild login credentials")
      return
    }

    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/auth/createuser",{
      method:'POST',
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({email:cred.email, name:cred.name, pwd:cred.pwd, confirm_pwd:cred.confirm_pwd})
    });
    const json = await response.json();
    console.log(json)
    if(json.success) {
      //Save the auth token and redirect on the other site
      localStorage.setItem('airnotestoken', json.authtoken);
      navigate('/')
      props.showAlert("Account Created Succesfully", "success", 1500)
    }
    else props.showAlert("Cannot Sign Up with these Credentials. " + json.errors, 'danger', 2500)
  }

  //Color of Input in Dark Mode
  const inputStyle = (mode.state.mode==='dark'?{color:'whitesmoke', backgroundColor:'#1e21258a'}:{})

  return (
    <div>
      <div className={`card login-form ${ mode.state.mode === "light" ? "card-light" : "card-dark"} shadow p-3 mb-5 rounded`}>
        <div className="card-body">
          <h5 className="card-title">SignUp</h5>
          <form id="login-form needs-validation" novalidate>
            <div className="mb-3">
              <label htmlFor="userEmail" className="form-label">Email</label>
              <input type="email" className="form-control" value={cred.email} id="userEmail" style={inputStyle} onChange={(e)=>setCred({...cred,email:e.target.value})} required/>
              <div class="invalid-feedback">Enter proper Email</div>
            </div>
            <div className="mb-3">
              <label htmlFor="userName" className="form-label">Name</label>
              <input type="text" className="form-control" value={cred.name} id="userName" style={inputStyle} onChange={(e)=>setCred({...cred,name:e.target.value})} required/>
            </div>
            <div className="mb-3">
              <label htmlFor="userPassword" className="form-label">Password</label>
              <input type="password" className="form-control" value={cred.pwd} id="userPassword" style={inputStyle} onChange={(e)=>setCred({...cred,pwd:e.target.value})} minLength={4} required/>
              <div class="invalid-feedback">Enter proper Password</div>
            </div>
            <div className="mb-3">
              <label htmlFor="userPassword" className="form-label">Confirm Password</label>
              <input type="password" className="form-control" value={cred.confirm_pwd} id="confirmPassword" style={inputStyle} onChange={(e)=>setCred({...cred,confirm_pwd:e.target.value})} minLength={4} required/>
            </div>
            <button type="submit" className="btn btn-outline-info" onClick={signup}>SignUp</button>
            <div className="toLogin">
              Already a user? <Link to="/login">Login</Link>
            </div>
            
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;