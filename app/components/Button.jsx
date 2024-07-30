import styles from "../styles/Button.module.css";

const Button = ({ text, className }) => {
  return (
    <div className={`${styles[className]}`}>{text}</div>
  )
}


export default Button;