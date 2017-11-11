import React, { Component } from "react";
import styles from "./style.css";
import FilterForm from "../FilterForm";

class MainMenu extends Component {
  state = {
    isOpen: null
  };
  render() {
    let items = [
      { id: 1, name: "Product_1" },
      { id: 2, name: "Product_2" },
      { id: 3, name: "Product_3" },
      { id: 4, name: "Product_4" },
      { id: 5, name: "Product_5" }
    ];

    let nodes = items.map(item => {
      let { name, id } = item;
      let { isOpen } = this.state;

      return (
        <li
          key={id}
          className={
            isOpen === id ? styles.open + " " + styles.item : styles.item
          }
        >
          <div className={styles.text} onClick={this.handleClick(id)}>
            {name}
          </div>
          {this.getSubMenu(id)}
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
    this.state.isOpen === id
      ? this.setState({ isOpen: null })
      : this.setState({ isOpen: id });
  };

  getSubMenu = id => {
    if (this.state.isOpen === id)
      return (
        <div className={styles.submenu}>
          <FilterForm />
        </div>
      );
  };
}

export default MainMenu;
