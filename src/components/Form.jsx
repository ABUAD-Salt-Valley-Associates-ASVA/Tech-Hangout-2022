import React from 'react'
import { Formik, Field, Form } from 'formik'
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
        onSubmit={async (values) => {
          alert(values.name, values.email)
        }}
      >
        {({ values, errors, handleChange, handleSubmit }) => (

          <form onSubmit={handleSubmit}>
            <Field style={inputStyle} name='name' type='text' onChange={handleChange} value={values.name} placeholder="Your Full Name*" />
            <Field style={inputStyle} name='email' type='email' onChange={handleChange} value={values.email} placeholder="Your Email*" />
            <Field style={inputStyle} name='department' type='text' onChange={handleChange} value={values.department} placeholder="Your Department*" />
            <Field style={inputStyle} name='email' type='email' onChange={handleChange} value={values.email} />
            <Field style={inputStyle} name='email' type='email' onChange={handleChange} value={values.email} />
            <Field style={inputStyle} name='email' type='tel' onChange={handleChange} value={values.telephone} placeholder="Your Telephone*" />
            <button type='submit' style={{ padding: "10px 5px" }}>Submit</button>
          </form>
        )}
      </Formik>
    </div>
  )
}

export default Book