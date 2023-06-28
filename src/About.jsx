
import React from 'react';
import web from "../src/image/img2.jpg"
// import { NavLink } from 'react-router-dom';
import Common from './Common';


function About() {
  return (
    <>
    <Common name='Welcome to About Page' imgsrc={web} visit="contact" btname="Contact Now"/>
    </>
  );
};
export default About;
