import styles from '../styles/Booking.module.css';
import BookingForm from '../components/BookingForm';

const Booking = () => {
	return (
		<>
			<div className={styles.contentWrapper}>
				<div className={styles.title}>
					<h1>Opening For Booking</h1>
					<p>
						Book Johnny to come to put on a live show. He does a classic movie
						and cartoon show. Its fun for the whole family!
					</p>
				</div>
				<div className={styles.main}>
					<BookingForm />
				</div>
			</div>
		</>
	);
};

export default Booking;
