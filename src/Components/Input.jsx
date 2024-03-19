import styles from "../App.module.css"
const Input = ({display})  => {
  return<>
      <input className={styles.display} type="text" value={display} readOnly />
  </>
}
export default Input;