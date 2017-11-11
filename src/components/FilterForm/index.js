import React, { Component } from "react";
import { connect } from "react-redux";
import { callMenuItems } from "../../AC";
import styles from "./style.css";
import Preloader from "../Preloader";
import Rx from "rxjs/Rx";

class FilterForm extends Component {
  state = {
    filter: "",
    offset: 0,
    limit: 10
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
        <ul ref={this.getListItemsRef} className={styles.list}>
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
  /**
   * Обрабатываем ввод в поля формы и отправляем в стэйт
   * @param  {[type]} ev Event
   */
  handleInput = ev => {
    let value = ev.target.value;

    this.setState({
      filter: value
    });

    this.props.callMenuItems(
      `http://homework.connectia.com/api/product/list?offset=0&limit=10&filter=${value}`
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
    this.props.callMenuItems(
      "http://homework.connectia.com/api/product/list?offset=0&limit=10"
    );
  }

  componentWillUpdate() {
    console.log("componentWillUpdate ===>");
  }

  /**
   * Получаем DOM элемент со списком продуктов
   * @param  {HTMLElement} ref DOM элемент
   * @return {HTMLElement}     DOM элемент
   */
  getListItemsRef = ref => {
    let { callMenuItems } = this.props;

    ref.addEventListener("scroll", event => {
      var ref = event.target;
      if (ref.scrollHeight - ref.scrollTop === ref.clientHeight) {
        console.log("comp state", this.state);
        this.setState({ offset: this.state.offset + this.state.limit });
        callMenuItems(
          `http://homework.connectia.com/api/product/list?offset=${this.state
            .offset}&limit=${this.state.limit}`
        );
      }
    });
    return ref;
  };
}
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
