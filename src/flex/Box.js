import React from 'react';
import './flex.css';
import FlexItem from './FlexItem';
class Box extends React.Component {
  render() {
    return (
      <div className='flex'>
        <FlexItem />
        <FlexItem />
        <div className='item footer'> footer </div>
      </div>
    )
  }
}
export default Box