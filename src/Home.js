import React, { Component } from 'react';
import { NavLink, Link } from "react-router-dom";

export default class Home extends Component {
  render() {
    return (
      <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/todolist">TodoList</NavLink></li>
        <li><NavLink to="/box">Box</NavLink></li>
        <li><Link to="/box">Box</Link></li>
        <li><Link to="/todolist">TodoList</Link></li>
        <div>
          
            replace(bool)：为 true 时，点击链接后将使用新地址替换掉访问历史记录里面的原地址；为 false 时，点击链接后将在原有访问历史记录的基础上添加一个新的纪录。默认为 false；
  
              点击Link后，路由系统发生了什么？
  
            Link 组件最终会渲染为 HTML 标签 ，它的 to、query、hash 属性会被组合在一起并渲染为 href 属性。虽然 Link 被渲染为超链接，但在内部实现上使用脚本拦截了浏览器的默认行为，然后调用了history.pushState 方法（注意，文中出现的 history 指的是通过 history 包里面的 create*History 方法创建的对象，window.history 则指定浏览器原生的 history 对象，由于有些 API 相同，不要弄混）。history 包中底层的 pushState 方法支持传入两个参数 state 和 path，在函数体内有将这两个参数传输到 createLocation 方法中，返回 location 的结构如下：

            
            系统会将上述 location 对象作为参数传入到 TransitionTo 方法中，然后调用 window.location.hash 或者window.history.pushState() 修改了应用的 URL，这取决于你创建 history 对象的方式。同时会触发history.listen 中注册的事件监听器。
            NavLink

            NavLink是 Link>的一个特定版本，会在匹配上当前的url的时候给已经渲染的元素添加参数，组件的属性有
  
              activeClassName(string)：设置选中样式，默认值为active
              activeStyle(object)：当元素被选中时，为此元素添加样式
              exact(bool)：为true时，只有当导致和完全匹配class和style才会应用
              strict(bool)：为true时，在确定为位置是否与当前URL匹配时，将考虑位置pathname后的斜线
              isActive(func)判断链接是否激活的额外逻辑的功能`
        </div>
      </>
              )
            }
}