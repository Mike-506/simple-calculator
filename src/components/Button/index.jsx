import React from "react";
import './style.css'

function Button(props) { 

  const isOperator = val => {
    return isNaN(val) && (val !== '.') && (val !== '=');
  };



  return(
    <div className={`button-container ${isOperator(props.children) ? 'operator' : 'null'}`.trimEnd()}
    onClick={() => props.handleClick(props.children)}>
      {props.children} 
    </div>
  )
}

export default Button;