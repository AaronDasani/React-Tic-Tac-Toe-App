import React, {Component } from 'react';
import Square from './square';

export default class Table extends Component {
  render() {
    return (
      <div className="Table">
        {this.props.tables.map((squareInfo)=><Square key={squareInfo.id} info={squareInfo} InsertValue={this.props.InsertValue}/>)}

      </div>
    )
  }
}
