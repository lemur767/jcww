import * as React from 'react';

const EmailTemplate = ({ sponsor, message, email, phone }) => {
	return (
		<div>
			<h1> Todd! {sponsor} Sent you a message</h1>
			<p>Sponsor Information:</p>
			<ul>
				<li>{phone}</li>
				<li>{email}</li>
				<li>{sponsor}</li>
			</ul>
			<p>Here is what they said!: {message}</p>
		</div>
	);
};
export default EmailTemplate;
