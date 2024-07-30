'use client';

import styles from '../styles/NewNav.module.css';
import Mask from '../../public/assets/mask.png';
import Image from 'next/image';
import Link from 'next/link';
import Hamburger from '../../public/assets/fa-solid_hamburger.svg';
import { useState } from 'react';
import Button from '../components/Button';


function Navbar() {
	// adding the states
	const [isActive, setIsActive] = useState(false);
	//add the active class
	const toggleActiveClass = () => {
		setIsActive(!isActive);
	};
	//clean up function to remove the active class
	const removeActive = () => {
		setIsActive(false);
	};
	return (
		<div className={`${styles.header}`}>
				<nav className={`${styles.navbar}`}>
					{/* logo */}
					<a href='/' className={`${styles.logo}`}>
						<Image
							src={Mask}
							className={`${styles.navLogo}`}
							alt='Logo'
							height={99}
							width={100}
						/>
					</a>
					<ul className={`${styles.navMenu} ${isActive ? styles.active : ''}`}>
						<li onClick={removeActive}>
							<a href='/' className={`${styles.navLink}`}>
								Home
							</a>
						</li>
						<li onClick={removeActive}>
							<a href='/sponsor' className={`${styles.navLink}`}>
								Sponsorship
							</a>
						</li>
						<li onClick={removeActive}>
							<a href='/gallery' className={`${styles.navLink}`}>
								Past Events
							</a>
						</li>
						<li onClick={removeActive}>
							<a href='/booking' className={`${styles.navLink}`}>
								Booking
							</a>
						</li>
						<li onClick={removeActive}>
							<a href='/about' className={`${styles.navLink}`}>
								About
							</a>
						</li>
					</ul>
					<div className={`${styles.ctaWrapper}`}>
						<Link href='/sponsor'>
							<Button
								className='primary'
								text='Sponsor Me!'
								type='button'
								as={Link}
							/>
						</Link>
					</div>
					<div
						className={`${styles.hamburger} ${isActive ? styles.active : ''}`}
						onClick={toggleActiveClass}
					>
						<span className={`${styles.bar}`}></span>
						<span className={`${styles.bar}`}></span>
						<span className={`${styles.bar}`}></span>
					</div>
				</nav>
		
		</div>
	);
}
export default Navbar;
