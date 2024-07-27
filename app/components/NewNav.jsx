"use client";

import './NewNav.css';
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
        <nav styleName='navbar'>
            <div styleName='nav_container'>
               <Link href='/'>
                <Image 
                    src={Mask}
                    alt='Logo'
                    width={99}
                    height={100}
                    styleName='nav_logo'

                />
                </Link>
               <div styleName='navmenu'>
                <ul>
                    <Link href="/about">
                        <li styleName='navitem'>About</li>
                    </Link>
                    <Link href="/booking">
                        <li styleName='navitem'>Booking</li>
                    </Link>
                    <Link href="/gallery">
                        <li styleName='navitem'>Past Events</li>
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
            <div styleName= { menuOpen ? 'hiddennav' : 'mobilenavmenu'}>
            <div styleName='hamburger' onClick={handleNav}>
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
               <div styleName='mobilenavmenu'>
                <ul>
                    <Link href="/about">
                        <li onClick={ () => setMenuOpen(false)} styleName='navitem'>About</li>
                    </Link>
                    <Link href="/booking">
                        <li onClick={ () => setMenuOpen(false)} styleName='navitem'>Booking</li>
                    </Link>
                    <Link href="/gallery">
                        <li onClick={ () => setMenuOpen(false)} styleName='navitem'>Past Events</li>
                    </Link>
                </ul>
               </div>
            </div>
        </nav>
    )
}
export default Navbar;
