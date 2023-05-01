import React from 'react';
import './paystack.css';
import DogIcon1 from '../assets/Dog-1-unscreen.gif';
import DogIcon2 from '../assets/Dog-2.gif';
import PaystackPop from '@paystack/inline-js';

function Paystack() {
  return (
    <main className='paystack_container'>
      <span>
        <img className='dog-icon-1 slide-out-left' src={DogIcon1} alt='Dog Icon 1' />
      </span>
      <span>
        <img className='dog-icon-2 fade-in-fwd ' src={DogIcon2} alt='Dog Icon 2' />
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