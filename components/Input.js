import styles from "@styles/Input.module.css";

const Input = (props) => {
  const { placeholder, onChange, value } = props;

  return (
    <input
      placeholder={placeholder}
      className={styles.input}
      value={value}
      onChange={onChange}
      {...props}
    />
  );
};

export default Input;
