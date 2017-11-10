import React, { Component } from "react";
import logo from "./logo.svg";
import styles from "./style.css";
import { connect } from "react-redux";
import { callMenuItems } from "../../AC";
import MainMenu from "../MainMenu";

class App extends Component {
  render() {
    return (
      <div className={styles.app}>
        <div className={styles.header}>
          <img src={logo} className={styles.logo} alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div className={styles.intro}>
          <aside className={styles.aside}>
            <MainMenu />
          </aside>
        </div>
      </div>
    );
  }

  /**
   * Делаем запрос всех статей с сервера
   */
  componentDidMount() {
    this.props.callMenuItems();
  }
}

export default connect(null, { callMenuItems })(App);
