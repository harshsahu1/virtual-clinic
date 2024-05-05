import React from 'react';
import '../styles/contact.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Payment = () => {
  return (
    <>
      <Navbar />
      <section
        className='register-section flex-center apply-doctor'
        id='contact'
      >
        <div className='register-container flex-center contact'>
          <h2 className='form-heading'>PayTm Payment</h2>
          {
            <form className='register-form '>
              <input
                type='text'
                name='specialization'
                className='form-input'
                placeholder='Name of card-holder'
              />
              <input
                type='text'
                name='specialization'
                className='form-input'
                placeholder='Card Number'
              />
              <input
                type='number'
                name='experience'
                className='form-input'
                placeholder='Expiration Date'
              />
              <input
                type='number'
                name='fees'
                className='form-input'
                placeholder='CVV'
              />
              <button type='submit' className='btn form-btn'>
                Pay - $200
              </button>
            </form>
          }
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Payment;
