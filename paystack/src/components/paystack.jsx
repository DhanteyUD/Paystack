import React from 'react';
import './paystack.css';
import PaystackPop from '@paystack/inline-js';

function Paystack() {
  return (
    <main className='paystack_container'>
        <div className='header'>
            <h1 className="text-focus-in">Paystack Payment Gateway</h1>
        </div>
        <div className='card bounce-in-top'></div>
    </main>
  )
}

export default Paystack