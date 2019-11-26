import React, { Component, Fragment } from "react";
import './manul.css';

export default class Parent extends Component {
  constructor(props) {
    // 如果不需要 在 constructor里面使用 this.props ，是可以不用给super传props的
    super(props);
    //当state或props改变时，render函数重新执行
    this.state = {
      inValue: '',
      list: []
    };
    this.handleChange = this.handleChange.bind(this);
  }
  // input 输入触发
  handleChange() {
    const value = this.input.value
    console.log(this.input);
    this.setState(() => ({
      inValue: value
    }))
  }
  render() {
    return (
      <Fragment>
        <div className='city'>
          <label htmlFor="inValue"> 城市</label>
          <input type="text" onChange={this.handleChange} value={this.state.inValue}
            ref={(input) => { this.input = input }}
          />
        </div>
      </Fragment>
    )
  }
}