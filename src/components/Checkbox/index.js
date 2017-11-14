import React, { Component } from "react";
import styles from "./style.css";
import PropTypes from "prop-types";

class Checkbox extends Component {
  static propTypes = {
    checked: PropTypes.bool,
    disabled: PropTypes.bool
  };
  static defaultProps = {
    checked: false,
    disabled: false
  };
  constructor(props) {
    super(props);
    this.state = {
      checked: props.checked
    };
  }

  _handleChange = () => {
    this.setState({
      checked: !this.state.checked
    });
  };

  render() {
    const { disabled } = this.props;
    const { checked } = this.state;
    return (
      <div className={styles.checkbox}>
        <label>
          <input
            type="checkbox"
            className={styles.input}
            checked={checked}
            disabled={disabled}
            onChange={this._handleChange}
          />
          <span className={styles.span} />
        </label>
      </div>
    );
  }
}

export default Checkbox;
