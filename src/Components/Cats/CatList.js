import React, { Component } from 'react';
 
class CatList extends Component {
  render(){
 return (
   <div>
      <ul>{this.props.breeds.map((cat, i) => (
        <li key={i}>{cat}</li>))}</ul>
      </div>
 )
}}
 
export default CatList;
