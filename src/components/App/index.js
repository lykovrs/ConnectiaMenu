import React, { Component } from "react";
import logo from "./logo.svg";
import styles from "./style.css";
import MainMenu from "../MainMenu";
import DataChanger from "../DataChanger";

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
          <section>
            <DataChanger />
          </section>
        </div>
      </div>
    );
  }
}

export default App;
