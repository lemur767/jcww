'use client';

import Button from '../components/Button';
import { useState } from 'react';
import { toast } from 'react-hot-toast';
import styles from '../styles/Bookform.module.css';

const BookingForm = () => {
	const [data, setData] = useState({
		client: '',
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
					sponsor: data.client,
					email: data.email,
					phone: data.phone,
					subject: data.subject,
					message: data.message,
				}),
			});
			if (response.ok) {
				setData({
					client: '',
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
		<form className={styles.formContainer} onSubmit={sendEmail}>
			<input
				name='client'
				value={data.client}
				onChange={handleChange}
				type='text'
				placeholder='Name/Organization'
				autoComplete='false'
			/>
			<input
				name='email'
				value={data.email}
				onChange={handleChange}
				type='email'
				placeholder='Email'
				autoComplete='false'
			/>
			<input
				name='phone'
				value={data.phone}
				onChange={handleChange}
				type='text'
				placeholder='Phone Number'
				autoComplete='false'
			/>
			<input
				name='subject'
				value={data.subject}
				onChange={handleChange}
				type='text'
				placeholder='Subject'
				autoComplete='false'
			/>
			<textarea
				name='message'
				value={data.message}
				placeholder='Message'
				onChange={handleChange}
			></textarea>
			<div className={styles.buttonWrapper}>
				<Button
					className='primary'
					text={isLoading ? 'Sending...' : 'Submit Message'}
					type='submit'
					onClick={sendEmail}
					disabled={isLoading}
				/>
			</div>
		</form>
	);
};

export default BookingForm;
