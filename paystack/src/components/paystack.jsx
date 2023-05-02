import './paystack.css';
import React, {useState, useEffect} from 'react';
import PaystackPop from '@paystack/inline-js';
import Form from './form';

const DogIcons = ['https://res.cloudinary.com/dhantey/image/upload/v1683026512/Dog-10-unscreen_s01xpu.gif', 
                  'https://res.cloudinary.com/dhantey/image/upload/v1683026514/Dog-9-unscreen_riqdvw.gif']

function Paystack() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timerId = setInterval(() => {
      setCount(count => count + 1);
  }, 24000);

    return () => clearInterval(timerId);
  }, []);

  const image = DogIcons[count % DogIcons.length];

  return (
    <main className='paystack_container'>
      <span>
        <img className='dog-icon-array slide-out-left' src={image} alt='Dog owners walking their dogs' />
      </span>
      <span>
        <img className='dog-icon-2 fade-in-fwd ' src='https://res.cloudinary.com/dhantey/image/upload/v1683026515/Dog-2_pltj9r.gif' alt='Dog Icon 2' />
      </span>
        <div className='header'>
            <h1 className="text-focus-in">Pet Fancy</h1>
            <p className='slide-in-left'>Your favorite pet store</p>
        </div>
        <div className='card bounce-in-top'>
          <Form />
        </div>
    </main>
  )
}

export default Paystack