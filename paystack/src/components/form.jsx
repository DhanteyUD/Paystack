import './form.css';
import React, { useState } from 'react'
import DogIconForm from '../assets/Dog-4.gif';
import { FormModel } from '../model/form.model.js';
import PaystackPop from "@paystack/inline-js"

const DogIcon = 'https://res.cloudinary.com/dhantey/image/upload/v1683026512/Dog-8-unscreen_bb1s7y.gif'

function Form() {
  const [form, setForm] = useState(FormModel);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

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

    const { firstName, lastName, email, phone, amount } = form;
    if (firstName && lastName && email && phone && amount) {
      setLoading(true);

      const paystack = new PaystackPop()
      paystack.newTransaction({
        key: process.env.REACT_APP_PAYSTACK_PUBLIC_KEY,
        amount: form.amount * 100,
        email: form.email,
        firstName: form.firstName,
        lastName: form.lastName,
        phone: form.phone,
        onSuccess(transaction) {
          const reference = transaction.reference
          const message = `Thank you for your donation to our pet store! We appreciate your kindness and generosity, and we look forward to continuing to serve our community with your help. Thank you again for making a difference! \n\nPayment reference: ${reference}`
          alert(message)
        },
        onCancel() {
          const message = "You are always welcome to return to our pet store."
          alert(message)
        }
      })

      setLoading(false);
      setForm(FormModel);
      setError('');
    } else {
      setError('Please fill all fields')
      return;
    }

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
            <form className='form-inner' >
              <h2 className='form-header'>Pet Fancy</h2>
              {error ? 
              <p className='form-sub-header_error'>{error}</p> : 
              <p className='form-sub-header'>Make <span className='donation'>donation</span> and save a Dog</p>}

              <div className="form-group">
                <label htmlFor="firstName">First Name</label>
                <input 
                  type="text" 
                  className="form-control" 
                  name="firstName" 
                  value={form.firstName}
                  onChange={handleChange}
                  placeholder="First Name" 
                  required
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
                  required  
                />

                <label htmlFor="firstName">Phone</label>
                <input 
                  type="tel" 
                  className="form-control" 
                  name="phone" 
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="+234" 
                  required  
                />

                <label htmlFor="firstName">Amount</label>
                <input 
                  type="number" 
                  className="form-control" 
                  name="amount" 
                  value={form.amount}
                  onChange={handleChange}
                  placeholder="₦"  
                  required  
                />
              </div>
              <div className='button-group'>
                <button type='clear' className="btn btn-secondary" onClick={handleClearForm}>Clear</button>
                <button type='submit' className="btn btn-primary"  onClick={handleSubmitForm}>Submit</button>
              </div>
            </form>
          </>
        )}
      </div>
    </>
  )
}

export default Form