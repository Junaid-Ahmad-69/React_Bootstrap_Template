import React, { useState } from 'react';
import InputField from './InputField';

const Contact = () => {
  const [data, setData] = useState({
    fullname : '',
    email : '',
    password : '',
    address: '',
    textfield: '',
  });
  const InputEvent = (event) =>{
    const {name, value} = event.target;

    setData((prevalue)=>{
      return {
        ...prevalue,
        [name] : value,
      }
    }
    );
    setData('');
  }
  const FormSubmit = (e)=>{
    e.preventDefault();
    alert( `my name is ${data.email}` );
  }
  return (
    <>
      <div className="my-5">
        <h1 className='text-center'>Contact Us</h1>
      </div>  
      <div className="container container_div">
        <div className="row">
          <div className="col-10 col-md-6 mx-auto">
            <form onSubmit={FormSubmit}>
             {/* full name */}
              <InputField  
                label= "Full Name"
                type = "text"
                name = "fullname"
                value = {data.fullname}
                onChange={InputEvent}
                placeholder = "Enter your Name"
                for= 'examplefullname'
                id="examplefullname1"
              />
              {/* email  */}
              <InputField
                label= "Email address"
                type = "email"
                name = 'email'
                value={data.email}
                onChange={InputEvent}
                placeholder = "example@gmail.com"
                for= 'exampleemail'
                id="exampleemail1"
              />
              {/* password */}
              <InputField
                label= "Password"
                type = "password"
                name = 'password'
                value={data.password}
                onChange={InputEvent}
                for= 'examplepassword'
                id="examplepassword1"
              /> 
              {/* address */}
              <InputField
                label= "Address"
                type = "address"
                name= "address"
                value={data.address}
                onChange={InputEvent}
                for= 'exampleaddress'
                id="exampleaddress1"
              /> 
              <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
              </div>
              <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Comment</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"  name="textfield" value={data.textfield} onChange={InputEvent}></textarea>
              </div>
              <button type="submit" className="btn btn-primary mb-3">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact
