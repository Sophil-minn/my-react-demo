import React, { Component } from 'react';

class Child extends Component {
  // constructor(props) {
  //  super(props);
  // }
  deleteItem = () => {
    const { handleDelete, index } = this.props;
    handleDelete(index);
  }
  render() {
    const { item, hello } = this.props;
    return (
      <div>
        <li onClick={this.deleteItem}>
          {hello} - {item}
        </li>
      </div>
    );
  }
}
Child.defaultProps = {
  hello: 'Hi '
}
export default Child;