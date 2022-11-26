import React from "react";
import styles from "@styles/TodoList.module.css";
import { useDispatch } from "react-redux";
import {
  markUncompleteAsync,
  deleteTodoAsync,
  markCompleteAsync,
} from "@redux/todoSlice";

const TodoItem = (props) => {
  const { title, completed, id } = props;

  const dispatch = useDispatch();

  const handleCheckboxClick = () => {
    if (completed) dispatch(markUncompleteAsync({ id }));
    else dispatch(markCompleteAsync({ id }));
  };

  const handleDeleteClick = () => {
    dispatch(deleteTodoAsync({ id }));
  };

  return (
    <li className={styles.todoListItem}>
      <div>
        <span>
          <input
            type="checkbox"
            defaultChecked={completed}
            onClick={handleCheckboxClick}
          />
          <p>{title}</p>
        </span>

        <a onClick={handleDeleteClick}>
          <img src="/svgs/delete.svg" />
        </a>
      </div>
    </li>
  );
};

export default TodoItem;
