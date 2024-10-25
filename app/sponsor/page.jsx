import React from 'react';
import styles from '../styles/Sponsor.module.css';
import ContactForm from '../components/ContactForm';

const Sponsor = () => {
	return (
		<div className={styles.container}>
			<div className={styles.main}>
				<div classname={styles.title}>
					<h1>Our Goal at Johnny Calimarri Worldwide</h1>
				</div>
					<p>
						We are a non-charity, self funded company. Our main slogan is we are
						a goodwill based company, that builds smiles and sometimes people.
						Whether it is hosting a Luchador Movie Live, on YouTube or TikTok,
						or showing up for a community event. Sometimes we just show up to
						spread joy, laughter and smiles to people in our community that need
						it the most. Johnny Calimarri is a character and icon that is suited
						to fit most brands.
					</p>
					<p>
						Bringing goodwill and cheer with a sponsorship to help the cause and
						vision we have. We are not a government institution or charity. We
						are a tax paying company focused on wholesome family events and blue
						comedy. And maybe a suplex mixed in here and there. We are a company
						that cares, with a vision that the world needs more of.{' '}
					</p>
					<p>
						We have many successful past events at retirement homes alike with
						Johnny putting on a show for his 12,000 TikTok followers, spreading
						joy in a wholesome manner. So check out our sponsorship information
						if you&apos;re a brand that is interested in helping our cause. We
						don&apos;t always just need capital, providing food for an event or
						multiple events is one of the many options for sponsorship levels.
						All with perks and garunteed ad time on our planned Roku, TikTok and
						Youtube channels. So help us spread joy and laughter by helping our
						cause, in turn we will ensure your brand or product, idea or dream,
						is seen by the thousands that frequently enjoy our short videos and
						events at home in Ontario and online across the planet.
					</p>
					<h2>
						Listen, learn and be a good friend. Don&apos;t swear, bully,
						don&apos;t go out far --Johnny Calimarri
					</h2>
				</div>
			

			<h2>
				If you have interest in becoming a sponsor please fill out the form
				below
			</h2>
			<div>
				<ContactForm />
			</div>
		</div>
	);
};

export default Sponsor;
