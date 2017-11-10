import React, { Component } from "react";
import styles from "./style.css";

class MainMenu extends Component {
  state = {
    isOpen: null
  };
  render() {
    let items = [
      { id: 1, name: "Product_1" },
      { id: 2, name: "Product_2" },
      { id: 3, name: "Продукты" },
      { id: 4, name: "Product_4" },
      { id: 5, name: "Product_5" }
    ];

    let nodes = items.map(item => {
      let { name, id } = item;
      let { isOpen } = this.state;

      return (
        <li
          key={id}
          onClick={this.handleClick(id)}
          className={
            isOpen === id ? styles.open + " " + styles.item : styles.item
          }
        >
          {name}
        </li>
      );
    });
    return (
      <nav className={styles.menu}>
        <ul className={styles.items}>{nodes}</ul>
      </nav>
    );
  }

  handleClick = id => ev => {
    ev.preventDefault();
    if (this.state.isOpen === id) return;
    this.setState({ isOpen: id });
  };
}

export default MainMenu;
