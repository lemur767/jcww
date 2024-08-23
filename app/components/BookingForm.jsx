'use client';
import Button from '../components/Button';
import { useState } from 'react';
import { toast } from 'react-hot-toast';
import styles from '../styles/Booking.module.css';

const BookingForm = () => {
	const [data, setData] = useState({
		sponsor: '',
		email: '',
		phone: '',
		subject: '',
		message: '',
	});
	const [isLoading, setIsLoading] = useState(false);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setData((prevData) => ({ ...prevData, [name]: value }));
	};

	const sendEmail = async (e) => {
		e.preventDefault();
		setIsLoading(true);
		try {
			const response = await fetch('/api/send', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					sponsor: data.sponsor,
					email: data.email,
					phone: data.phone,
					subject: data.subject,
					message: data.message,
				}),
			});
			if (response.ok) {
				setData({
					sponsor: '',
					email: '',
					phone: '',
					subject: '',
					message: '',
				});
				toast.success('Message Sent');
			} else {
				toast.error('Failed to send message');
				console.log('data', data);
			}
		} catch (error) {
			console.error('Error sending email:', error);
			toast.error('An error occurred');
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<form className={styles.main} onSubmit={sendEmail}>
			<input
				className={styles.inputWrapper}
				name='sponsor'
				value={data.sponsor}
				onChange={handleChange}
				type='text'
				placeholder='Company Name'
			/>
			<input
				name='email'
				value={data.email}
				onChange={handleChange}
				type='email'
				placeholder='Email'
			/>
			<input
				name='phone'
				value={data.phone}
				onChange={handleChange}
				type='text'
				placeholder='Phone Number'
			/>
			<input
				name='subject'
				value={data.subject}
				onChange={handleChange}
				type='text'
				placeholder='Subject'
			/>
			<textarea
				name='message'
				value={data.message}
				placeholder='Message'
				onChange={handleChange}
			></textarea>
			<Button
				className='primary'
				text={isLoading ? 'Sending...' : 'Submit Message'}
				type='submit'
				onClick={sendEmail}
				disabled={isLoading}
			/>
		</form>
	);
};

export default BookingForm;
