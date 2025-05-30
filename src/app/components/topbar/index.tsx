'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Instagram, LinkedIn, Facebook, YouTube } from '@mui/icons-material';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import {
    AnnouncementBar,
    MarqueeWrapper,
    MarqueeText,
    TopBarContainer,
    LanguageSelector,
    LanguageMenu,
    LanguageMenuItem,
    SocialIconsContainer,
    SocialIconWrapper,
    SocialIconLink,
} from './style';

const socialIcons = [
    { icon: <Instagram />, href: '#' },
    { icon: <LinkedIn />, href: '#' },
    { icon: <YouTube />, href: '#' },
    { icon: <Facebook />, href: '#' },
];

const languageOptions = [
    { label: 'English', value: 'en' },
    { label: 'Spanish', value: 'es' },
    { label: 'French', value: 'fr' },
];

const TopBar = () => {
    const [langAnchorEl, setLangAnchorEl] = useState<HTMLElement | null>(null);
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        // Set isClient to true only after mounting on the client
        setIsClient(true);
    }, []);

    const handleLangClick = (event: React.MouseEvent<HTMLElement>) => setLangAnchorEl(event.currentTarget);
    const handleLangClose = () => setLangAnchorEl(null);

    return (
        <>
            <AnnouncementBar>
                <MarqueeWrapper>
                    {/* Render marquee only on client to avoid SSR mismatch */}
                    {isClient && (
                        <>
                            <MarqueeText>
                                Welcome To The Dolce Frutti Website – Enjoy The Taste Of Summer With Fresh Yellow Barhi Dates, Citrus, And Mangoes – Now With Up To 15% OFF On All Seasonal Fruits🥭🍑🌴!
                            </MarqueeText>
                            <MarqueeText>
                                Welcome To The Dolce Frutti Website – Enjoy The Taste Of Summer With Fresh Yellow Barhi Dates, Citrus, And Mangoes – Now With Up To 15% OFF On All Seasonal Fruits🥭🍑🌴!
                            </MarqueeText>
                        </>
                    )}
                    {!isClient && (
                        // Static fallback for SSR
                        <MarqueeText>
                            Welcome To The Dolce Frutti Website – Enjoy The Taste Of Summer With Fresh Yellow Barhi Dates, Citrus, And Mangoes – Now With Up To 15% OFF On All Seasonal Fruits🥭🍑🌴!
                        </MarqueeText>
                    )}
                </MarqueeWrapper>
            </AnnouncementBar>
            <TopBarContainer>
                <LanguageSelector onClick={handleLangClick}>
                    English <ArrowDownwardIcon fontSize="small" />
                </LanguageSelector>
                <LanguageMenu
                    anchorEl={langAnchorEl}
                    open={Boolean(langAnchorEl)}
                    onClose={handleLangClose}
                >
                    {languageOptions.map((lang, index) => (
                        <LanguageMenuItem key={index} onClick={handleLangClose}>
                            <Link href={`?lang=${lang.value}`}>{lang.label}</Link>
                        </LanguageMenuItem>
                    ))}
                </LanguageMenu>
                <SocialIconsContainer>
                    {socialIcons.map(({ icon, href }, idx) => (
                        <SocialIconWrapper key={idx}>
                            <SocialIconLink href={href}>{icon}</SocialIconLink>
                        </SocialIconWrapper>
                    ))}
                </SocialIconsContainer>
            </TopBarContainer>
        </>
    );
};

export default TopBar;