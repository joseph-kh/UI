import React, { useState } from "react";
import styles from "@styles/Input.module.css";
import { useDispatch } from "react-redux";
import { addTodoAsync } from "@redux/todoSlice";

const TaskInput = (props) => {
  const { placeholder, style } = props;
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  const onSubmit = (event) => {
    event.preventDefault();
    if (value) {
      dispatch(
        addTodoAsync({
          title: value,
        })
      );
      setValue("");
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        placeholder={placeholder}
        className={styles.input}
        style={{ ...style }}
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
    </form>
  );
};

export default TaskInput;
