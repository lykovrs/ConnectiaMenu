import React, { Component } from "react";
import { connect } from "react-redux";
import { filterMenuItems } from "../../AC";
import styles from "./style.css";
import Preloader from "../Preloader";
import { createSelector } from "reselect";
import ReactList from "react-list";
import Checkbox from "../Checkbox";
import { Map } from "immutable";

/**
 * Компонент формы с фильтрацией и списком
 * @extends Component
 */
class FilterForm extends Component {
  state = {
    filter: "",
    selected: new Map(),
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
        <label className={styles.label} onClick={this.handleSelected(key)}>
          <Checkbox />
          {/* <input
            className={styles.check}
            onChange={this.handleSelected(key)}
            type="checkbox"
          /> */}
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
          <label className={styles.label} onClick={this.handleSelectAll}>
            <Checkbox />
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

    this.props.filterMenuItems(value);

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
    let state = this.state.selected.get(id);

    this.setState({
      selected: this.state.selected.set(id, state ? false : true)
    });
  };

  /**
   * Обработка выбора всех элемнтоа
   * @param  {string} id каррируем id
   */
  handleSelectAll = ev => {
    console.log("all");
  };
}

export default connect(
  (state, props) => {
    const { menuItems, isLoading, filter } = state.menu;

    const filtered = menuItems.filter(item => {
      return item.name.indexOf(filter) >= 0;
    });

    return {
      menuItems: filtered,
      isLoading: state.menu.isLoading
    };
  },
  { filterMenuItems }
)(FilterForm);
