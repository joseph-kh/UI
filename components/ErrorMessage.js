import React from "react";
import styles from "@styles/Error.module.css";

const ErrorMessage = (props) => {
  const { errorMessage, style } = props;

  return (
    errorMessage && (
      <p className={styles.errorMessage} style={{ ...style }}>
        {errorMessage}
      </p>
    )
  );
};

export default ErrorMessage;
