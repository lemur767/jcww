"use client";

import styles from '../styles/NewNav.module.css';
import Mask from "../../public/assets/mask.png"
import Image from 'next/image';
import Link from 'next/link';
import Hamburger from '../../public/assets/fa-solid_hamburger.svg';
import {useState} from 'react';
import Button from '../components/Button'
import {useRouter} from 'next/navigation';



const Navbar = () => {
    const router = useRouter();
    const [menuOpen, setMenuOpen] = useState(false);
    
    const handleNav = () => {
        setMenuOpen(!menuOpen);
    }

    return (
       <>
       <div className={styles.navbar}>
            <div className={styles.container}>
               <Link href='/'>
                <Image 
                    src={Mask}
                    alt='Logo'
                    width={99}
                    height={100}
                    className={styles.nav_logo}

                />
                </Link>
               <div className={styles.nav_menu}>
                <ul>
                    <Link href="/about">
                        <li className={styles.navitem}>About</li>
                    </Link>
                    <Link href="/booking">
                        <li className={styles.navitem}>Booking</li>
                    </Link>
                    <Link href="/gallery">
                        <li className={styles.navitem}>Past Events</li>
                    </Link>
                </ul>
               </div>
               <Link href="/sponsor">
               <Button 
                    classname="primary" 
                    onClick={() => router.push('/sponsor')} 
                    text="Sponsor Me!"
                    type="button"
                    as={Link}
                    />
                        </Link>
            </div>
            <div className={ menuOpen ? styles.hiddennav : styles.mobilenavmenu}>
            <div className={styles.hamburger} onClick={handleNav}>
                    <Image
                        src={Hamburger}
                        alt='Hamburger'
                        width="91" 
                        height="79"
                    />
                
                </div>
                
               <Link href='/'>
               <Button 
                    classname="primary" 
                    onClick={() => router.push('/sponsor')} 
                    text="Sponsor Me!"
                    type="button"
                    as={Link}
                    />
                </Link>
               <div className={styles.mobilenavmenu}>
                <ul>
                    <Link href="/about">
                        <li onClick={ () => setMenuOpen(false)} className={styles.navitem}>About</li>
                    </Link>
                    <Link href="/booking">
                        <li onClick={ () => setMenuOpen(false)} className={styles.navitem}>Booking</li>
                    </Link>
                    <Link href="/gallery">
                        <li onClick={ () => setMenuOpen(false)} className={styles.navitem}>Past Events</li>
                    </Link>
                </ul>
               </div>
            </div>
        </div>
        </>
    )
}
export default Navbar;
