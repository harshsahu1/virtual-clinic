import React from 'react';
import image from '../images/heroimg.jpg';
import '../styles/hero.css';

const Hero = () => {
  return (
    <section className='hero'>
      <div className='hero-content'>
        <h1>
          Your Health, <br />
          Our Responsibility
        </h1>
        <p>
          Empowering Health, Connecting Lives – Welcome to VirtualClinic, Where
          Care Knows No Boundaries!
        </p>
      </div>
      <div className='hero-img'>
        <img src={image} alt='hero' />
      </div>
    </section>
  );
};

export default Hero;
