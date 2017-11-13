import React, { Component } from "react";
import { connect } from "react-redux";

import styles from "./style.css";
import Preloader from "../Preloader";
import { createSelector } from "reselect";
import ReactList from "react-list";
import { Map } from "immutable";

let defaultSelectedSate = new Map();

/**
 * Компонент формы с фильтрацией и списком
 * @extends Component
 */
class FilterForm extends Component {
  state = {
    filter: "",
    selected: defaultSelectedSate,
    checked: false
  };

  /**
   *
   * @param  {number} index массиве списка
   * @param  {string} key
   * @return {ReactElement} разметка
   */
  renderItem = (index, key) => {
    return (
      <div className={styles.item} key={key}>
        <label className={styles.label}>
          <input
            className={styles.check}
            onChange={this.handleSelected(key)}
            type="checkbox"
          />
          {this.props.menuItems[index].name}
        </label>
      </div>
    );
  };

  /**
   * render
   * @return {ReactElement} разметка
   */
  render() {
    return (
      <form onSubmit={this.handleSubmit} className={styles.form}>
        <Preloader loading={this.props.isLoading} />

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

        <div className={styles.list}>
          <ReactList
            itemRenderer={this.renderItem}
            length={this.props.menuItems.length}
            type="uniform"
          />
        </div>

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
   * @param  {Event} ev Event
   */
  handleInput = ev => {
    let value = ev.target.value;

    this.setState({
      filter: value
    });
  };

  /**
   * Обработка отправки формы
   * @param  {Event} ev [description]
   */
  handleSubmit = ev => {
    ev.preventDefault();
    console.log("submit");
  };

  /**
   * Обработка клика по чекбоксу
   * @param  {string} id каррируем id
   */
  handleSelected = id => ev => {
    ev.preventDefault();
  };
}

export default connect((state, props) => {
  console.log(state);

  return {
    menuItems: state.menu.menuItems,
    isLoading: state.menu.isLoading
  };
}, {})(FilterForm);
