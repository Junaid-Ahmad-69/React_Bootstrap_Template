import React from 'react';
import about from '../Images/about.gif';
import Main from './Main';

const About = () => {
  return (
    <>
      <Main 
      name="Welcome to about page"
      link= "/contact"
      imgscr={about}
      button="Contact Now"
       />
    </>
  )
}

export default About;
