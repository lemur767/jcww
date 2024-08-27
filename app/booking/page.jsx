import styles from '../styles/Booking.module.css';
import BookingForm from '../components/BookingForm';

const Booking = () => {
	return (
		<div className={styles.main}>
			<BookingForm />
		</div>
	);
};

export default Booking;
