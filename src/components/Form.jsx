import React from 'react'
import { Formik, Field } from 'formik'
import axios from 'axios'
import './Form.css'

const inputStyle = {
  width: "100%",
  margin: "10px 0",
  padding: "10px",
}

const Book = () => {
  return (
    <div className="book">
      <h1>Book A Seat</h1>
      <Formik
        initialValues={{ name: "", email: "", department: "", college: "", level: "", telephone: "" }}
        onSubmit={async (values, { resetForm, setSubmitting }) => {
          await axios.post('', values).then((res) => { console.log(res) }).catch((error) => { console.log(error.message) })
          resetForm({ values: "" })
          setSubmitting(false);
        }}
      >
        {({ values, isSubmitting, errors, handleChange, handleSubmit }) => (

          <form onSubmit={handleSubmit}>
            <Field style={inputStyle} name='name' type='text' onChange={handleChange} value={values.name} placeholder="Your Full Name*" required className='form_input' />
            <Field style={inputStyle} name='email' type='email' onChange={handleChange} value={values.email} placeholder="Your Email*" required className='form_input' />
            <Field style={inputStyle} name='department' type='text' onChange={handleChange} value={values.department} placeholder="Your Department*" required className='form_input' />
            <Field as="select" style={inputStyle} name='college' type='text' onChange={handleChange} value={values.college} required className='form_input'>
              <option value="">Select College*</option>
              <option value="ENG">College of Engineering</option>
              <option value="SCI">College of Sciences</option>
              <option value="MHS">College of Medicine and Health Sciences</option>
              <option value="LAW">College of Law</option>
              <option value="PHARM">College of Pharmacy</option>
              <option value="SMS">College of Social &apos; Management Sciences</option>
            </Field>
            <Field as="select" style={inputStyle} name='level' type='text' required className='form_input'>
              <option value="">Select Level*</option>
              <option value="100">100 Level</option>
              <option value="200">200 Level</option>
              <option value="300">300 Level</option>
              <option value="400">400 Level</option>
              <option value="500">500 Level</option>
              <option value="600">600 Level</option>
            </Field>
            <Field style={inputStyle} name='telephone' type='tel' value={values.telephone} placeholder="Your Telephone*" required className='form_input' />
            <div style={{ textAlign: "center" }}>
              <button className='submit' type='submit' style={{ padding: "10px 5px" }} disabled={isSubmitting} >
                {isSubmitting && (
                  <div className="spinner-container">
                    <div className="loading-spinner"></div>
                  </div>
                )}
                {!isSubmitting && "Submit"}
              </button>
            </div>
          </form>
        )}
      </Formik>
    </div >
  )
}

export default Book
