import styles from "@styles/TodoList.module.css";
import TodoItem from "@components/TodoItem";

const TodoList = (props) => {
  const { todos } = props;
  return (
    <ul className={styles.todoListItems}>
      {todos.map(({ id, title, completed }) => (
        <TodoItem key={id} id={id} title={title} completed={completed} />
      ))}
    </ul>
  );
};

export default TodoList;
