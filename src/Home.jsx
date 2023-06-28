
import React from 'react';
import web from "../src/image/img5.jpg"
// import { NavLink } from 'react-router-dom';
import Common from './Common';

function Home() {
  return (
    <>
    <Common name='Grow Your Business With' imgsrc={web} visit="service" btname="Get Started"/>
    </>
  );
};

export default Home;
