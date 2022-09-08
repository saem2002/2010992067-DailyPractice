import PropTypes from "prop-types";
import React from 'react'

const Button = (color, text, onClick1) => {
  
    return(
        <>
       
        <button onClick={onClick1}></button>
        </>
    );
  
}

Button.propTypes = {
    text: PropTypes.string,
    color:"red"
}

export default Button