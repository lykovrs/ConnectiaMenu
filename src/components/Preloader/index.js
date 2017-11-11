import React from "react";
import styles from "./style.css";

const Preloader = props => {
  if (props.loading)
    return (
      <div className={styles.container}>
        <div className={styles.loader} />
      </div>
    );
  return null;
};

export default Preloader;
