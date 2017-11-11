import React, { Component } from "react";
import { connect } from "react-redux";
import { callMenuItems } from "../../AC";
import styles from "./style.css";

class FilterForm extends Component {
  state = {
    filter: ""
  };
  /**
   * render
   * @return {ReactElement} разметка
   */
  render() {
    let items = this.props.menuItems.map(item => {
      return (
        <li className={styles.item} key={item.id}>
          <label className={styles.label}>
            <input className={styles.check} type="checkbox" />
            {item.name}
          </label>
        </li>
      );
    });
    return (
      <form onSubmit={this.handleSubmit} className={styles.form}>
        <div className={styles.container}>
          <input
            className={styles.input}
            type="text"
            name="filter"
            onChange={this.handleInput}
            value={this.state.filter}
          />
        </div>
        <div className={styles.item}>
          <label className={styles.label}>
            <input className={styles.check} type="checkbox" />
            Выбрать все
          </label>
        </div>

        <ul className={styles.list}>{items}</ul>

        <div className={styles.footer}>
          <button
            className={styles.btn}
            onClick={this.handleSubmit}
            type="submit"
          >
            Применить
          </button>
        </div>
      </form>
    );
  }
  /**
   * Обрабатываем ввод в поля формы и отправляем в стэйт
   * @param  {[type]} ev Event
   */
  handleInput = ev => {
    console.log(ev.target.value);
    this.setState({
      filter: ev.target.value
    });
  };
  /**
   * Обработка отправки формы
   * @param  {[type]} ev [description]
   */
  handleSubmit = ev => {
    ev.preventDefault();
    console.log("submit");
  };
  /**
   * Делаем запрос всех статей с сервера
   */
  componentDidMount() {
    this.props.callMenuItems(
      "http://homework.connectia.com/api/product/list?offset=0&limit=10"
    );
  }
}
export default connect(
  (state, props) => {
    return {
      menuItems: state.menu.menuItems
    };
  },
  { callMenuItems }
)(FilterForm);
