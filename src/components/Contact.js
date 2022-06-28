import React from "react";
import "./CSS/Contact.css";

const Contact = (props) => {

    const inputStyle={
        backgroundColor:'black',
        color:'whitesmoke'
    }

    const contactSubmit = (e) =>{
        e.preventDefault();
        props.showAlert("Response Form Submitted", "success", 2500)
    }

  return (
    <div className="contact-section">
      <div className="container-md">
        <h3>Contact Us</h3>
        <div className="d-flex flex-wrap"> 

            <div className="contactDetails d-flex flex-column mx-4 my-2">
                <p>Email:  akshatjha1610@gmail.com  </p>
                <p>Mobile: 8097652302  </p>
            </div>
            
            <form id="contact-us d-flex" className="contactForm">
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className="form-control" id="contact-name" style={inputStyle} required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="contactemail" className="form-label">Email</label>
                    <input type="text" className="form-control" id="contactemail" style={inputStyle}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="mobileNo" className="form-label">Mobile</label>
                    <input type="text" className="form-control" id="mobileNo" style={inputStyle}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="desc" className="form-label">Description</label>
                    <textarea type="text" rows={4} className="form-control" id="contact-desc" style={inputStyle} minLength={4} required/>
                </div>
                <button type="submit" className="btn btn-outline-info" onClick={contactSubmit}>Submit</button>
            </form>

        </div>
      </div>
    </div>
  );
};

export default Contact;
