
import React from 'react';
import web from "../src/image/img5.jpg"
import { NavLink } from 'react-router-dom';

function Common(props) {
  return (
    <>
    <section id='header' className='d-flex align-items-center'>
      <div className="container-fluid nav_bg">
            <div className="row">
                <div className="col-10 mx-auto">
                  <div className='row'>
                 <div className="col-md-6 pt-5 pt-lg-0 order-2 order-ld-1 d-flex justify-content-center flex-column">
                    <h1>{props.name} <br></br> <strong className='brand-name'> React</strong> </h1>
                    <h2 className="my-3">
                        We are the team of Developer making Website
                    </h2>
                    <div className="mt-3">
                     <NavLink to={props.visit} class="get-started">{props.btname}</NavLink>
                    </div>
                 </div>
                 <div className='col-lg-6 order-1 order-lg-2 header-img'>
                    <img src={props.imgsrc} className='img-fluid animated mt-5' alt='home img' />
                 </div>
                 </div>
                </div>
            </div>
        </div>
        </section>
    </>
  );
};
export default Common;
