import React from "react";
import './Form.css'

function Form() {
  return (
    <div className="form-container">
      <div className="form-content">
        <div className="form-subtitle">Please fill in the form below to book a seat.</div>
        <div className="form-group">
          <label>Name</label>
          <input type="text" className="form-control" placeholder="Enter your name" />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input type="email" className="form-control" placeholder="Enter your email" />
        </div>
        <div className="form-group">
          <label>Phone</label>
          <input type="text" className="form-control" placeholder="Enter your phone number" />
        </div>
        <div className="form-group">
          <label>Company</label>
          <input type="text" className="form-control" placeholder="Enter your company" />
        </div>
        <div className="form-group">
          <label>Position</label>
          <input type="text" className="form-control" placeholder="Enter your position" />
        </div>
        <div className="form-group">
          <label>Message</label>
          <textarea className="form-control" rows="3" placeholder="Enter your message" />
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-primary">Submit</button>
        </div>
      </div>
    </div>
  )
}

export default Form