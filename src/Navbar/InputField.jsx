import React from 'react'

const InputField = (props) => {
  return (
    <>
        <div className="mb-3">
            <label htmlFor={props.for} className="form-label">{props.label}</label>
            <input type={props.type} className="form-control" id={props.id} aria-describedby="fullname" required placeholder={props.placeholder}/>
        </div> 
    </>
  )
}

export default InputField;
