import React from 'react';

export default function square(props) {
  return (
    <div className="Square" onClick={props.InsertValue.bind(this,props.info.id)}>{props.info.value}</div>
  )
}

