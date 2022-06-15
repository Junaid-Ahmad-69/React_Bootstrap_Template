import React from 'react';
import MainCard from './MainCard';
import CardApi from './CardApi';

const Service = () => {
  return (
    <>
      <div className="my-5 service1">
        <h1 className='text-center'> Our Services</h1>
      </div> 
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-5">
            {CardApi.map((val, inde)=>{
               return <MainCard
              imgscr1 = {val.imgscr}
              title = {val.title}
              key= {inde}
              id={inde}
              />
            })}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Service
