import React from 'react';
import './ButtonStyle.css';

function Button(props) {
  return (
    <div >
      <button onClick={props.onClick} className={`button__${props.color} button`}>
        {props.value}
      </button>
    </div>
  );
}

export default Button;