import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Booking.module.css';
import BookingForm from '../components/ContactForm';

const Booking = () => {
	return (
		<div className={styles.main}>
			<BookingForm />
		</div>
	);
};

export default Booking;
