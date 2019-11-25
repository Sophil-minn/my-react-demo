import React from 'react';
import './flex.css';
class Box extends React.Component {
  render() {
    return ( 
      <div className = 'flex' >
        <div className = 'item'> up < /div> 
        <div className = 'item'> down </div> 
        <div className = 'item footer'> footer </div> 
      </div>
    )
  }
}
export default Box