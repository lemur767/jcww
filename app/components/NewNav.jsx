import styles from './NewNav.modules.css';
import Mask from "../../public/assets/mask.png"
import Image from 'next/image';
import Link from 'next/link';
import Hamburger from '../../public/assets/fa-solid_hamburger.svg';
import {useState} from 'react';


const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    
    const handleNav = () => {
        setMenuOpen(!menuOpen)
    }

    return (
        <nav className={styles.navbar}>
            <div className={styles.nav_container}>
               <Link href='/'>
                <Image 
                    src={Mask}
                    alt='Logo'
                    width={99}
                    height={100}
                    className={styles.nav_logo}

                />
                </Link>
               <div className={styles.navmenu}>
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
                <div className={styles.hamburger} onClick={handleNav}>
                    <Image
                        src={Hamburger}
                        alt='Hamburger'
                        width="91" 
                        height="79"
                    />
                
                </div>
            </div>
            <div className= { menuOpen ? {styles.mobilenav} 

            </div>
        </nav>
    )
}