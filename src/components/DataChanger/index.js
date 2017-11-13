import React, { Component } from "react";
import { callMenuItems, deleteAllItems } from "../../AC";
import { connect } from "react-redux";

class DataChanger extends Component {
  state = {
    values: [
      { value: 1000, id: "CdEcR&8" },
      { value: 10000, id: "b!Z&E)lHebVj0FS(&j" },
      { value: 100000, id: "!YqNjVvNU2)(o" },
      { value: 1000000, id: "o5iw6R@Ls!9aAPlcX@kx" }
    ]
  };

  render() {
    const btns = this.state.values.map(item => {
      return (
        <button key={item.id} onClick={this.handleClick(item.value)}>
          {item.value}
        </button>
      );
    });
    return (
      <div>
        <h1>Выберете колличество объектов запрашиваемых для меню</h1>
        {btns}
      </div>
    );
  }

  handleClick = num => ev => {
    ev.preventDefault();
    this.props.deleteAllItems();
    this.props.callMenuItems(num);
  };
}
export default connect(null, { callMenuItems, deleteAllItems })(DataChanger);
