import React from 'react';
import './paystack.css';
import DogIcon from '../assets/Dog-1-unscreen.gif';
import PaystackPop from '@paystack/inline-js';

function Paystack() {
  return (
    <main className='paystack_container'>
      <span>
        <img className='dog-icon' src={DogIcon} alt='Dog Icon' />
      </span>
        <div className='header'>
            <h1 className="text-focus-in">Pet Fancy</h1>
            <p className='slide-in-left'>Your favorite pet store</p>
        </div>
        <div className='card bounce-in-top'></div>
    </main>
  )
}

export default Paystack