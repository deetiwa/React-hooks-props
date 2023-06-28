
import React, { useState } from 'react';

function Contact() {
  const [data, setData] = useState({                    //Hook
    name:'',
    phone:'',
    email:'',
    msg:'',
  });

  const InputEvent = (event) => {               // Event
    const {name, value} = event.target;

    setData((preVal) =>{                     

      return {
        ...preVal,                  //Sprade Operater
        [name]: value,
      }
    });
  };

  const formSubmit = (e) =>{
    e.preventDefault();
    alert (`My Name is ${data.name}. Mobile Number is ${data.phone}. email Address is ${data.email}. and Here is i want to say that ${data.msg} `)
  };
  return (
    <>
    <div className='my-5 mb-5'>
      <h1 className='text-center'>Contact US</h1>
      </div>
      <div className='container-fluid'>
      <div className='row'>
       <div className='col-md-6 col-10 mx-auto'>
      
        <form onSubmit={formSubmit}>
  <div class="form-group mb-3">
    <label>Name</label>
    <input type="text" class="form-control" name='name' value={data.name} onChange={InputEvent}  placeholder="Enter Your Name..." required/>
  </div>
  <div class="form-group mb-3">
    <label>Phone</label>
    <input type="number" class="form-control" name='phone' value={data.phone} onChange={InputEvent} placeholder="Enter Mobile Number..." required/>
  </div>
  <div class="form-group mb-3">
    <label>Email address</label>
    <input type="email" class="form-control" name='email' value={data.email} onChange={InputEvent} placeholder="name@example.com" required/>
  </div>
  <div class="form-group mb-3">
    <label>Message</label>
    <textarea class="form-control" name='msg' value={data.msg} onChange={InputEvent}  rows="3" required></textarea>
  </div>
  <div className='col-12'>
  <button class="btn btn-outline-primary" type="submit">Submit Form</button>
  </div>
</form>
      
       </div>
      </div>
      </div>
    </>
  );
};

export default Contact;
