import * as React from 'react';

const BookTemplate = ({ client, message, email, phone }) => {
	return (
		<div>
			<h1> Todd! {client} Wants to BOOK YOU!</h1>
			<p>Its a Booking for you! Someones calling Johnny for some funny.</p>
			<ul>
				<li>{sponsor}</li>
				<li>{phone}</li>
				<li>{email}</li>
			</ul>
			<p>Here is what they said!: {message}</p>
		</div>
	);
};
export default BookTemplate;
