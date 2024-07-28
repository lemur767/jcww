import styles from "../styles/Button.module.css";

const Button = ({ text, classname }) => {
  return (
    <div className={`${styles[classname]}`}>{text}</div>
  )
}


export default Button;