import React from "react";
import { useLoader } from "@contexts/LoaderContext";
import styles from "@styles/Home.module.css";

const Container = (props) => {
  const { children } = props;
  const { isLoading } = useLoader();

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div
          className={`${styles.todoContainer} ${isLoading ? "is-loading" : ""}`}
        >
          {children}
        </div>
      </main>
    </div>
  );
};

export default Container;
