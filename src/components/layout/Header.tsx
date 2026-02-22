'use client';

import Link from "next/link";
import Image from "next/image";
import { BsDownload } from "react-icons/bs";
import { useState, useEffect } from "react";
import { HiOutlineChevronDown, HiX } from "react-icons/hi";
import { useMediaQuery } from 'react-responsive';
import { headerData } from '../../data/data';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<number | null>(null);
    const [mounted, setMounted] = useState(false);

    // Media query hook - drawer activates below 1400px
    const isMobile = useMediaQuery({ query: '(max-width: 1399px)' });

    // Wait for client mount to avoid hydration mismatch
    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Close drawer when switching to desktop view
    useEffect(() => {
        if (!isMobile && drawerOpen) {
            setDrawerOpen(false);
            setActiveDropdown(null);
        }
    }, [isMobile, drawerOpen]);

    // Prevent body scroll when drawer is open
    useEffect(() => {
        if (drawerOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [drawerOpen]);

    const toggleDrawer = () => {
        setDrawerOpen(!drawerOpen);
        setActiveDropdown(null);
    };

    const toggleDropdown = (index: number) => {
        setActiveDropdown(activeDropdown === index ? null : index);
    };

    const closeDrawer = () => {
        setDrawerOpen(false);
        setActiveDropdown(null);
    };

    return (
        <>
            <header className={`${isScrolled ? 'scrollto' : ''}`}>
                <div className="container">
                    <div className="header-container">
                        <div className="logo">
                            <Link href="/">
                                <Image src="/images/logo.webp" alt="Logo" width={256} height={50} />
                            </Link>
                        </div>

                        {/* Desktop Menu (>= 1400px) */}
                        <div className="menus">
                            <nav>
                                <ul>
                                    {headerData.menuItems.map((item, index) => (
                                        item.dropdown ? (
                                            <li key={index} className="dropdown">
                                                <Link href={item.href}>
                                                    {item.label} <HiOutlineChevronDown />
                                                </Link>
                                                <ul className="dropdown-item">
                                                    {item.dropdown.map((subItem, subIndex) => (
                                                        <li key={subIndex}>
                                                            <Link href={subItem.href}>{subItem.label}</Link>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </li>
                                        ) : (
                                            <li key={index}>
                                                <Link href={item.href}>{item.label}</Link>
                                            </li>
                                        )
                                    ))}
                                </ul>
                            </nav>
                        </div>

                        {/* Action Buttons */}
                        <div className="user-btns">
                            {(!mounted || !isMobile) && (
                                <>
                                    {headerData.headerButtons.map((button, index) => (
                                        <Link key={index} href={button.href} className={`btn ${button.variant}-btn`}>
                                            {button.label} {button.icon === 'BsDownload' && <BsDownload />}
                                        </Link>
                                    ))}
                                </>
                            )}

                            {/* Drawer Toggle (< 1400px) */}
                            {mounted && isMobile && (
                                <button
                                    className={`drawer-toggle ${drawerOpen ? 'active' : ''}`}
                                    onClick={toggleDrawer}
                                    aria-label="Toggle menu"
                                >
                                    <div className="hamburger">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </div>
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </header>

            {/* Drawer Overlay */}
            {mounted && isMobile && (
                <>
                    <div
                        className={`drawer-overlay ${drawerOpen ? 'active' : ''}`}
                        onClick={closeDrawer}
                    />

                    {/* Drawer Menu */}
                    <div className={`drawer-menu ${drawerOpen ? 'active' : ''}`}>
                        {/* Drawer Header */}
                        <div className="drawer-header">
                            <div className="drawer-logo">DevOps Training</div>
                            <button className="drawer-close" onClick={closeDrawer}>
                                <HiX />
                            </button>
                        </div>

                        {/* Drawer Navigation */}
                        <nav className="drawer-nav">
                            <ul>
                                {headerData.menuItems.map((item, index) => (
                                    <li key={index}>
                                        {item.dropdown ? (
                                            <>
                                                <button
                                                    className={activeDropdown === index ? 'active' : ''}
                                                    onClick={() => toggleDropdown(index)}
                                                >
                                                    <span>{item.label}</span>
                                                    <span className={`dropdown-icon ${activeDropdown === index ? 'open' : ''}`}>
                                                        <HiOutlineChevronDown />
                                                    </span>
                                                </button>
                                                <ul className={`drawer-dropdown ${activeDropdown === index ? 'open' : ''}`}>
                                                    {item.dropdown.map((subItem, subIndex) => (
                                                        <li key={subIndex}>
                                                            <Link href={subItem.href} onClick={closeDrawer}>
                                                                {subItem.label}
                                                            </Link>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </>
                                        ) : (
                                            <Link href={item.href} onClick={closeDrawer}>
                                                {item.label}
                                            </Link>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </nav>

                        {/* Drawer Actions */}
                        <div className="drawer-actions">
                            {headerData.headerButtons.map((button, index) => (
                                <Link key={index} href={button.href} className={`btn ${button.variant}-btn`} onClick={closeDrawer}>
                                    {button.label} {button.icon === 'BsDownload' && <BsDownload />}
                                </Link>
                            ))}
                        </div>
                    </div>
                </>
            )}
        </>
    );
};

export default Header;
