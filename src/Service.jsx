
import React from 'react';
import web from './image/img3.jpg'
import Card from './Card';
import Sdata from './Sdata';

function Service() {
  return (
    <>
    <div className='my-5'>
     <h2 className='text-center'> Welcome to Our Services </h2>
      </div>
      <div className='container-fluid mb-5'>
        <div className='row'>
          <div className='col-10 mx-auto'></div>
          <div className='row gy-4'>
          {
            Sdata.map((val, ind) => {
              return <Card key={ind} imgsrc={val.imgsrc} title={val.title} />
            })
          }
          
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
