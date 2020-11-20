import React from 'react';

const About = ({ phone, email, website, address }) => (
  <section className='About'>
    <h2 className='About-title'>About Me</h2>
    <ul className='About-list'>
      <li className='About-item'>{phone}</li>
      <li className='About-item'>{email}</li>
      <li className='About-item'>{website}</li>
      <li className='About-item'>{address}</li>
    </ul>
  </section>
);

export default About;
