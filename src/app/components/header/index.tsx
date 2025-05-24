'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import './_.scss';
import { Box, IconButton, useMediaQuery, Menu, MenuItem } from '@mui/material';
import TopBar from '../topbar';
import { useTheme } from '@mui/material/styles';
import {
    Person,
    Search,
    ShoppingBasket,
    ArrowDropDown,
    Menu as MenuIcon,
    Close,
} from '@mui/icons-material';

//  Menu Links Array
const menuLinks = [
    { label: 'About', href: '/about' },
    {
        label: 'Shop',
        href: '/shop',
        dropdown: [
            { label: 'Dates', href: '/shop/dates' },
            { label: 'Citrus', href: '/shop/citrus' },
            { label: 'Mangoes', href: '/shop/mangoes' },
        ],
    },
    { label: 'Gifts', href: '/gifts' },
    { label: 'Blog', href: '/blog' },
    { label: 'Testimonials', href: '/testimonials' },
    { label: 'Contact us', href: '/contact' },
];

// Profile Menu Options
const profileOptions = [
    { label: 'Sign In', href: '/signin' },
    { label: 'Profile', href: '/profile' },
    { label: 'Orders', href: '/orders' },
];

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [profileAnchorEl, setProfileAnchorEl] = useState<HTMLElement | null>(null);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const handleProfileClick = (event: React.MouseEvent<HTMLElement>) => {
        setProfileAnchorEl(event.currentTarget);
    };
    const handleProfileClose = () => setProfileAnchorEl(null);

    return (
        <header className="header">
            {/* Top Bar */}
            <TopBar />
            {/* Navbar */}
            <Box className="header_navbar">
                <Box className="header_navbar_logo">
                    <Link href="/">
                        <Image src="/logo.png" alt="Dolce Frutti" width={86} height={86} />
                    </Link>
                </Box>
                <Box className="header_navbar_hamburger" onClick={toggleMenu}>
                    <IconButton edge="start" aria-label="menu">
                        {isMenuOpen ? <Close /> : <MenuIcon />}
                    </IconButton>
                </Box>

                {/* Menu Items */}
                <ul className={`header_navbar_menu ${isMenuOpen ? "header_navbar_menu_menuOpen" : ''}`}>
                    {menuLinks.map((item, index) => (
                        <li key={index} className={item.dropdown ? "header_navbar_menu_dropdown" : ''}>
                            <Link href={item.href} onClick={toggleMenu} className="header_navbar_menu_link">
                                <span>{item.label}</span>
                                {item.dropdown && <ArrowDropDown className="header_navbar_menu_dropdown_arrow" />}
                            </Link>
                            {item.dropdown && (
                                <ul className="header_navbar_menu_dropdown_dMenu">
                                    {item.dropdown.map((subItem, subIndex) => (
                                        <li key={subIndex}>
                                            <Link href={subItem.href} onClick={toggleMenu}>
                                                {subItem.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}

                    {/* Mobile Icons */}
                    {isMobile && (
                        <li className="header_navbar_menu_mActions">
                            <Box className="header_navbar_menu_mActions_actions">
                                <span className="header_navbar_menu_mActions_actions_i"><Search /></span>
                                <span className="header_navbar_menu_mActions_actions_i" onClick={handleProfileClick}><Person />
                                    <Menu
                                        anchorEl={profileAnchorEl}
                                        open={Boolean(profileAnchorEl)}
                                        onClose={handleProfileClose}
                                        classes={{ paper: 'header_navbar_menu_mActions_actions_i_profile' }}
                                    >
                                        {profileOptions.map((option, index) => (
                                            <MenuItem
                                                key={index}
                                                onClick={handleProfileClose}
                                            >
                                                <Link href={option.href}>{option.label}</Link>
                                            </MenuItem>
                                        ))}
                                    </Menu></span>
                                <span className="header_navbar_menu_mActions_actions_i">
                                    <Box className="header_navbar_menu_mActions_actions_i_cart">
                                        <ShoppingBasket />
                                        <span className="header_navbar_menu_mActions_actions_i_cart_badge">0</span>
                                    </Box>
                                </span>
                            </Box>
                        </li>
                    )}
                </ul>

                {/* Desktop Icons */}
                {!isMobile && (
                    <Box className="header_navbar_dActions">
                        <Box className="header_navbar_dActions_actions">
                            <span className="header_navbar_dActions_actions_i"><Search /></span>
                            <span className="header_navbar_dActions_actions_i" onClick={handleProfileClick}><Person /></span>
                            <Menu
                                anchorEl={profileAnchorEl}
                                open={Boolean(profileAnchorEl)}
                                onClose={handleProfileClose}
                                classes={{ paper: 'header_navbar_dActions_actions_i_profile' }}
                            >
                                {profileOptions.map((option, index) => (
                                    <MenuItem
                                        key={index}
                                        onClick={handleProfileClose}
                                    >
                                        <Link href={option.href} className="header_navbar_dActions_actions_i_profile_link">{option.label}</Link>
                                    </MenuItem>
                                ))}
                            </Menu>
                            <span className="header_navbar_dActions_actions_i">
                                <Box className="header_navbar_dActions_actions_i_cart">
                                    <ShoppingBasket />
                                    <span className="header_navbar_dActions_actions_i_cart_badge">0</span>
                                </Box>
                            </span>
                        </Box>
                    </Box>
                )}
            </Box>
        </header>
    );
};

export default Header;