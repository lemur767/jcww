'use client';

import styles from '../styles/Nav.module.css';
import Button from './Button';
import Mask from '../../public/assets/mask.png';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Hamburger from '../../public/assets/fa-solid_hamburger.svg';
import { useState } from 'react';

const Nav = () => {
	const router = useRouter();
	const [isOpen, setIsOpen] = useState(false);
	const openMenu = () => setIsOpen(!isOpen);

	return (
		<>
			<div
				className={
					isOpen === false
						? styles.nav_main
						: styles.nav_menu + ' ' + styles.mobile_nav
				}
			>
				<div className={styles.nav_logo_container}>
					<Link href='/'>
						<Image
							className={styles.nav_logo}
							width={99}
							height={100}
							src={Mask}
							alt='Navigation logo'
						/>
					</Link>
				</div>
				<div className={styles.nav_links}>
					<Link href='/about' className={styles.link_wrapper}>
						About
					</Link>
					<Link href='/booking' className={styles.link_wrapper}>
						Booking{' '}
					</Link>
					<Link href='/gallery' className={styles.link_wrapper}>
						Past Events
					</Link>
				</div>
				<div className={styles.cta_wrapper}>
					<Link href='/sponsor'>
						<Button
							classname='primary'
							text='Sponsor Me!'
							type='button'
							as={Link}
						/>
					</Link>
					<div
						className={
							isOpen === false ? styles.mobile_nav : ' ' + styles.mobile_menu
						}
						onClick={openMenu}
					>
						<Image
							className='mobile_logo'
							alt='Hamburger'
							width={91}
							height={79}
							src={Hamburger}
						/>
					</div>
					<div className={styles.mobile_menu}>
						<ul>
							<Link href='/about'>
								<li className={styles.menuitem}>About</li>
							</Link>
							<Link href='/booking'>
								<li className={styles.menuitem}>Booking</li>
							</Link>
							<Link href='/gallery'>
								<li className={styles.menuitem}>Past Events</li>
							</Link>
							<Link href='/sponsor'>
								<li className={styles.menuitem}>Sponsorship</li>
							</Link>
						</ul>
					</div>
				</div>
			</div>
		</>
	);
};

export default Nav;
