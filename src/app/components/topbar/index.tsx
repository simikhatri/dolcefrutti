'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { Box, Menu, MenuItem } from '@mui/material';
import { Instagram, LinkedIn, Facebook, YouTube } from '@mui/icons-material';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import './_.scss';

// ✅ Social Icons Array
const socialIcons = [
    { icon: <Instagram />, href: '#' },
    { icon: <LinkedIn />, href: '#' },
    { icon: <YouTube />, href: '#' },
    { icon: <Facebook />, href: '#' },
];

// ✅ Language Options Array
const languageOptions = [
    { label: 'English', value: 'en' },
    { label: 'Spanish', value: 'es' },
    { label: 'French', value: 'fr' },
];

const TopBar = () => {
    const [langAnchorEl, setLangAnchorEl] = useState<HTMLElement | null>(null);

    const handleLangClick = (event: React.MouseEvent<HTMLElement>) => setLangAnchorEl(event.currentTarget);
    const handleLangClose = () => setLangAnchorEl(null);

    return (
        <>
            {/* Announcement Bar */}
            <Box className="announcement">
                <div className='marquee-wrapper'>
                    <span className='marquee-text'>
                        Welcome To The Dolce Frutti Website – Enjoy The Taste Of Summer With Fresh Yellow Barhi Dates, Citrus, And Mangoes – Now With Up To 15% OFF On All Seasonal Fruits🥭🍑🌴!
                    </span>
                    <span className='marquee-text'>
                        Welcome To The Dolce Frutti Website – Enjoy The Taste Of Summer With Fresh Yellow Barhi Dates, Citrus, And Mangoes – Now With Up To 15% OFF On All Seasonal Fruits!
                    </span>
                </div>
            </Box>
            <Box className="topBar">
                <Box className="topBar_lang" onClick={handleLangClick}>
                    English <ArrowDownwardIcon fontSize="small" />
                </Box>
                <Menu
                    anchorEl={langAnchorEl}
                    open={Boolean(langAnchorEl)}
                    onClose={handleLangClose}
                    classes={{ paper: 'topBar_lang_dMenu' }}
                >
                    {languageOptions.map((lang, index) => (
                        <MenuItem
                            key={index}
                            onClick={handleLangClose}
                            className="topBar_lang_dMenu_item"
                        >
                            <Link href={`?lang=${lang.value}`}>{lang.label}</Link>
                        </MenuItem>
                    ))}
                </Menu>
                <Box className="topBar_lang_socialIcons">
                    {socialIcons.map(({ icon, href }, idx) => (
                        <span key={idx} className="topBar_lang_socialIcons_span">
                            <Link href={href} className="topBar_lang_socialIcons_span_link">{icon}</Link>
                        </span>
                    ))}
                </Box>
            </Box>
        </>

    );
};

export default TopBar;