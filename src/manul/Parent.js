import React, { Component, Fragment } from "react";
import './manul.css';
import Child from './Child';

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
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  // input 输入触发
  handleChange() {
    const value = this.input.value
    this.setState(() => ({
      inValue: value
    }))
  }
  // 提交添加UI列表
  handleSubmit() {
    console.log(this.state);
    this.setState((prevState) => ({
      list: [...prevState.list, prevState.inValue],
      inValue: ''
    }), () => {
      console.log(this.state);
    });
  }
  //删除当前点击item
  handleDelete = (index) => {
    this.setState((prevState) => {
      const list = [...prevState.list];
      list.splice(index, 1);
      return {
        list: list
      }
    });
  }
  //添加列表页面
  handleHtml() {
    const list = [...this.state.list];
    return list.map((item, index) => {
      return (
        <Child
          item={item}
          key={item}
          index={index}
          handleDelete={this.handleDelete}
        />
      )
    })
  }
  /* testhandleHtml() {
    return (
      <div> {this.state.list}</div>
    )
  } 
  {this.testhandleHtml()}
  */
  render() {
    return (
      <Fragment>
        <div className='city'>
          <label htmlFor="inValue"> 城市</label>
          <input type="text" onChange={this.handleChange} value={this.state.inValue}
            ref={(input) => { this.input = input }}
          />
          <button onClick={this.handleSubmit}>提交</button>
        </div>
        <ul ref={(ul) => { this.ul = ul }}>
          {
            this.handleHtml()
          }
        </ul>
      </Fragment>
    )
  }
}