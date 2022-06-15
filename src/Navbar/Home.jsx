import React from 'react';
import home from '../Images/home.gif';
import Main from './Main';

const Home = () => {
  return (
    <>
      <Main 
      name="Grow your business with"
      link= "/service"
      imgscr={home}
      button="Get Started"
       />
    </>
  )
}

export default Home
