import React, { Component } from "react";
import { connect } from "react-redux";
import { callMenuItems } from "../../AC";
import styles from "./style.css";
import Preloader from "../Preloader";
import { createSelector } from "reselect";

class FilterForm extends Component {
  state = {
    filter: "",
    offset: 0,
    limit: 100
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
        <ul ref={elem => (this.list = elem)} className={styles.list}>
          {items}
        </ul>
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

  getFetchUrl = (offset = this.state.offset, filter = this.state.filter) => {
    let url = `http://homework.connectia.com/api/product/list?offset=${offset}&limit=${this
      .state.limit}`;

    if (filter) url += `&filter=${filter}`;
    return url;
  };
  /**
   * Обрабатываем ввод в поля формы и отправляем в стэйт
   * @param  {[type]} ev Event
   */
  handleInput = ev => {
    let value = ev.target.value;

    this.setState(
      {
        filter: value,
        offset: 0
      },
      this.props.callMenuItems(this.getFetchUrl(0, value))
    );
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
    this.props.callMenuItems(this.getFetchUrl());
    this.list.addEventListener("scroll", this.handleNvEnter);
  }

  componentWillUnmount() {
    this.list.removeEventListener("scroll", this.handleNvEnter);
  }

  handleNvEnter = event => {
    let { callMenuItems } = this.props;

    var ref = event.target;
    if (!this.props.isLoading) {
      // прокрутка вверх
      if (ref.scrollTop === 0 && this.state.offset > 0) {
        let offset = this.state.offset - this.state.limit;
        this.setState({ offset }, callMenuItems(this.getFetchUrl(offset)));
        ref.scrollTop = ref.clientHeight;
      }
      // прокрутка вниз
      if (ref.scrollHeight - ref.scrollTop === ref.clientHeight) {
        let offset = this.state.offset + this.state.limit;
        this.setState({ offset }, callMenuItems(this.getFetchUrl(offset)));
        ref.scrollTop = 0;
      }
    }
  };
}

// const idsSelector = (state, props) => state.admin[props.resource].ids;
// const dataSelector = (state, props) => state.admin[props.resource].data;

export default connect(
  (state, props) => {
    console.log(state);
    return {
      menuItems: state.menu.menuItems,
      isLoading: state.menu.isLoading
    };
  },
  { callMenuItems }
)(FilterForm);
