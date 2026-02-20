'use client';

import Link from "next/link";
import Image from "next/image";
import { BsDownload } from "react-icons/bs";
import { useState, useEffect } from "react";
import { HiOutlineChevronDown } from "react-icons/hi";

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <>
            <header className={`${isScrolled ? 'scrollto' : ''}`}>
                <div className="container">
                    <div className="header-container">
                        <div className="logo">
                            <Link href="/">
                                <Image src="/images/logo.png" alt="Logo" width={630} height={154} />
                            </Link>
                        </div>
                        <div className="menus">
                            <nav>
                                <ul>
                                    <li><Link href="/">Home</Link></li>
                                    <li className="dropdown"><Link href="/">Dropdown <HiOutlineChevronDown /></Link>
                                        <ul className="dropdown-item">
                                            <li><Link href="/">Dropdown Item</Link></li>
                                            <li><Link href="/">Dropdown Item</Link></li>
                                            <li><Link href="/">Dropdown Item</Link></li>
                                            <li><Link href="/">Dropdown Item</Link></li>
                                            <li><Link href="/">Dropdown Item</Link></li>
                                            <li><Link href="/">Dropdown Item</Link></li>
                                        </ul>
                                    </li>
                                    <li><Link href="/">Course Curriculum</Link></li>
                                    <li className="dropdown"><Link href="/">Dropdown <HiOutlineChevronDown /></Link>
                                        <ul className="dropdown-item">
                                            <li><Link href="/">Dropdown Item</Link></li>
                                            <li><Link href="/">Dropdown Item</Link></li>
                                            <li><Link href="/">Dropdown Item</Link></li>
                                            <li><Link href="/">Dropdown Item</Link></li>
                                            <li><Link href="/">Dropdown Item</Link></li>
                                            <li><Link href="/">Dropdown Item</Link></li>
                                        </ul>
                                    </li>
                                    <li><Link href="/">Reviews</Link></li>
                                </ul>
                            </nav>
                        </div>
                        <div className="user-btns">
                            <Link href="/" className="btn primary-btn">Download Syllabus <BsDownload /></Link>
                            <Link href="/" className="btn secondary-btn">Enroll Now</Link>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header;