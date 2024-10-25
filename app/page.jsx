import Image from 'next/image';
import styles from './styles/Home.module.css';
import dramaMask from '/public/assets/dramamask.png';
import MaskCanvas from './components/Mask';
import ColorPicker from './components/ColorPicker';
import TextEditor from './components/TextSelector';
import PatternSelector from './components/PatternSelector';

export default function Home() {
	return (
		<>
			<div className={styles.hero}>
				<div className={styles.text_wrapper_title}>
					<div className={styles.title}>
						Johnny Calimarri Luchador Movie Review
					</div>
				</div>
				<div className={styles.image_wrapper_hero}>
					<Image
						className={styles.hero_logo}
						width={750}
						height={500}
						src={dramaMask}
						alt='Navigation logo'
					/>
				</div>
			</div>
			<div></div>
			<div className={styles.under}>
				<div className={styles.title2}>
					<h1>Upcoming Events:</h1>
				</div>
				<div className={styles.card}>
					<h2>Live TikTok Event - Date: Saturday October 26th</h2>
					<p>
						We will be broadcasting live from a Saturday Night Wrestling event.
						Catch Johnny Live in the flesh at this rockin wrestling event.  See what trouble he&aposll
						get himself into, Oh My Goodness!.
					</p>
				</div>
			
				<div className={styles.card}>
					<h2>Hindi and Arabic Contests - Date: TBD</h2>
					<p>
						Contest is for the next Hindi/English and Arabic/English speaking
						host for Johnny Calimarri&apos;s Movie Review and Cartoon Shows.
						Winner of the contest will be the offical translator of my show in
						those two languages. They may also get monkey flipped as a bonus
						prize.
					</p>
				</div>
			</div>
			<div>
				<div className={styles.construct} id='curator-feed-default-feed-layout'>
					<a
						href='https://curator.io'
						target='_blank'
						className='crt-logo crt-tag'
					>
						Powered by Curator.io
					</a>
				</div>
				<script type='text/javascript'></script>
			</div>
		</>
	);
}
