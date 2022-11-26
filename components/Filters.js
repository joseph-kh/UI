import React from "react";
import styles from "@styles/Filters.module.css";

const Filters = (props) => {
  const { setSelectedFilter, selectedFilter } = props;

  return (
    <div className={styles.filterContainers}>
      <ul className={styles.filterItems}>
        <span>Show: </span>
        <li>
          <a
            className={selectedFilter !== "all" ? styles.inactiveFilter : ""}
            onClick={setSelectedFilter.bind(this, "all")}
          >
            All
          </a>
        </li>
        <li>
          <a
            className={
              selectedFilter !== "completed" ? styles.inactiveFilter : ""
            }
            onClick={setSelectedFilter.bind(this, "completed")}
          >
            Completed
          </a>
        </li>
        <li>
          <a
            className={
              selectedFilter !== "incompleted" ? styles.inactiveFilter : ""
            }
            onClick={setSelectedFilter.bind(this, "incompleted")}
          >
            Incompleted
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Filters;
