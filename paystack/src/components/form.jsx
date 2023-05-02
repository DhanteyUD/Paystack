import './form.css';
import React, { useState } from 'react'
import DogIconForm from '../assets/Dog-4.gif';
import { FormModel } from '../model/form.model.js';

const DogIcon = 'https://res.cloudinary.com/dhantey/image/upload/v1683026512/Dog-8-unscreen_bb1s7y.gif'

function Form() {
  const [form, setForm] = useState(FormModel);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({...form, [name]: value});
  }
  
  const handleClearForm = (e) => {
    e.preventDefault();
    setForm(FormModel);
  }

  const handleSubmitForm = (e) => {
    e.preventDefault();

    setLoading(true);
    console.log(form);
    setTimeout(() => {
      setLoading(false);
      setForm(FormModel);
    }, 3000);
  }

  return (
    <>
      <div className='form-container'>
        {loading ? (
          <div className='form-inner'>
            <div className='form-inner-loading-div'>
              <img className='loading-dog-icon' src={DogIcon} alt='Loading Dog Icon' />
              <p className='loading-text'>loading, please wait...</p>
            </div>
          </div>
        ) : (
          <>
            <span>
              <img className='dog-icon-form' src={DogIconForm} alt='Dog Form Icon' />
            </span>
            <form className='form-inner'>
              <h2 className='form-header'>Pet Fancy</h2>
              <p className='form-sub-header'>Make <span className='donation'>donation</span> and save a Dog</p>

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
                <button type='clear' className="btn btn-secondary" onClick={handleClearForm}>Clear</button>
                <button type='submit' className="btn btn-primary" onClick={handleSubmitForm}>Submit</button>
              </div>
            </form>
          </>
        )}
      </div>
    </>
  )
}

export default Form