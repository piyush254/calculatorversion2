import styles from "../App.module.css";
const Button = ({onbuttonClicked}) => {
  const btnname = [
    "c",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];
  return (
    <div className={styles.buttonsConatainer}>
      {btnname.map((btnname) => (
        <button key={btnname} className={styles.button} onClick={() => onbuttonClicked(btnname)}>{btnname}</button>
      ))}
    </div>
  );
};
export default Button;
