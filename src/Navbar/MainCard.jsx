import React from 'react';
import { NavLink } from 'react-router-dom';

const MainCard = (props) => {
  const bold = {
    fontWeight: 'bold',
  }
  return (
    <>
        <div className="col-md-4 col-10 mx-auto">
        <div className="card" >
            <img src={props.imgscr1} className="card-img-top" alt="card image"  style={{height:"200px", objectFit: 'cover' }} />
            <div className="card-body">
                <h5 className="card-title " style={bold} >{props.title}</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <NavLink to="" className="btn btn-primary">Go somewhere</NavLink>
            </div>
        </div> 
        </div>
    </>
  )
}

export default MainCard;
