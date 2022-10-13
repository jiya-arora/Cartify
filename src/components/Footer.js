import React from "react";

export const Footer = (props) => {
  
  return (
    <div className="row fixed-bottom mx-2">
      <button className="btn btn-lg btn-danger col-2" onClick={()=>props.dispatch({type:"CLEAR_ALL"})} >
        Clear all 
      </button>
      <div className="col-8 bg-dark text-white text-center rounded">
        <p className="my-2 fs-4 text-light">Total Amount : {props.totalAmount}</p>
      </div>
      <button className="btn btn-lg btn-primary col-2">Pay now</button>
    </div>
  );
};
