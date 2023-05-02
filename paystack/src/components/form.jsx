import './form.css';
import React, { useState } from 'react'
import { FormModel } from '../model/form.model.js';

function Form() {
  const [form, setForm] = useState(FormModel);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({...form, [name]: value});
  }

  const handleSubmitForm = (e) => {
    e.preventDefault();

    setLoading(true);
    alert('Loading...');
  }

  const handleClearForm = () => {
    setForm(FormModel);
  }

  return (
    <>
      <div className='form-container'>
        <form className='form-inner' onSubmit={handleSubmitForm}>
          <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <input 
              type="text" 
              className="form-control" 
              name="firstName" 
              value={form.firstName}
              onChange={handleChange}
              placeholder="First Name" 
            />

            <label htmlFor="lastName">Last Name</label>
            <input 
              type="text" 
              className="form-control" 
              name="lastName" 
              value={form.lastName}
              onChange={handleChange}
              placeholder="Last Name" 
            />

            <label htmlFor="email">Email</label>
            <input 
              type="email" 
              className="form-control" 
              name="email" 
              value={form.email}
              onChange={handleChange}
              placeholder="example@gmail.com"  
            />

            <label htmlFor="firstName">Phone</label>
            <input 
              type="tel" 
              className="form-control" 
              name="phone" 
              value={form.phone}
              onChange={handleChange}
              placeholder="+234" 
            />

            <label htmlFor="firstName">Amount</label>
            <input 
              type="number" 
              className="form-control" 
              name="amount" 
              value={form.amount}
              onChange={handleChange}
              placeholder="₦"  
              autoComplete="off"
            />
          </div>
          <div className='button-group'>
            <button type="clear" className="btn btn-secondary" onClick={handleClearForm}>Clear</button>
            <button type="submit" className="btn btn-primary">Submit</button>
          </div>
        </form>
      </div>
    </>
  )
}

export default Form