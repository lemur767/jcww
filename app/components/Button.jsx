import styles from '../styles/Button.module.css';

const Button = ({ text, className, onClick }) => {
	return (
		<div onClick={onClick} className={`${styles[className]}`}>
			{text}
		</div>
	);
};

export default Button;
