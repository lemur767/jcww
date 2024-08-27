import BookTemplate from '../../../emails/BookTemplate';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
	try {
		const { email, client, message, subject, phone } = await request.json();

		// Input validation
		if (!email || !client || !message || !subject || !phone) {
			return NextResponse.json(
				{ error: 'Missing required fields' },
				{ status: 400 }
			);
		}

		const data = await resend.emails.send({
			from: 'Sponsor Application <info@jc-ww.ca>',
			to: process.env.DOMAIN, // Send to both admin and user
			subject: subject,
			react: BookTemplate({
				client,
				email,
				phone,
				message,
			}),
		});

		if (response.ok) {
			return NextResponse.json(
				{ message: 'Email was sent successfully!', id: data.id },
				{ status: 200 }
			);
		} else {
			return NextResponse.json(
				{ error: 'Failed to send email' },
				{ status: 500 }
			);
		}
	} catch (error) {
		console.error('Error sending email:', error);
		return NextResponse.json(
			{ error: 'Internal server error' },
			{ status: 500 }
		);
	}
}
