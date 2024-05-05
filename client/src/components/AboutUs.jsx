import React from 'react';
import image from '../images/aboutimg.jpg';

const AboutUs = () => {
  return (
    <>
      <section className='container'>
        <h2 className='page-heading about-heading'>About Us</h2>
        <div className='about'>
          <div className='hero-img'>
            <img src={image} alt='hero' />
          </div>
          <div className='hero-content'>
            <p>
              Welcome to VirtualClinic, an innovative healthcare solution
              crafted by skilled students from SKIT College, including Harsh
              Sahu, Bhavya Sharma, Aryan Sharma, and Chaitanya Sharma, all in
              their seventh semester of the Btech program. VirtualClinic is more
              than just an app; it's a gateway to accessible healthcare. Our app
              seamlessly connects patients with healthcare professionals,
              offering virtual consultations, prescription management, and
              health tracking. Designed with precision and utilizing
              cutting-edge technologies like the MERN stack, our team brings a
              blend of solid algorithmic expertise and practical full-stack
              development skills to ensure a robust, user-friendly experience.
              Join us in revolutionizing healthcare accessibility with
              VirtualClinic – where technology meets compassionate care.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
