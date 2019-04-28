import React from 'react';

export default function square(props) {
  return (
    <div className="Square" onClick={props.InsertValue.bind(this,props.info.id)}><h4>{props.info.value}</h4></div>
  )
}

