import React from "react";
import styles from "@styles/Button.module.css";

const Button = (props) => {
  const { text, onClick } = props;
  return (
    <button className={styles.ctaButton} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
