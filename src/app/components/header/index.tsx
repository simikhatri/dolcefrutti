"use client";
import { useState } from 'react';
import { AppBar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Badge from '@mui/material/Badge';
import {
    StyledToolbar,
    Logo,
    NavButtons,
    NavButton,
    IconContainer,
    StyledIconButton,
    MobileMenuButton,
    DropdownWrapper,
    StyledMenu,
    StyledMenuItem,
    ProfileDropdownWrapper,
    MobileMenu,
    MobileSubMenu,
    MobileMenuItem,
} from './style';
import TopBar from '../topbar';
import MegaMenu from './MegaMenu';
import shopMenu, { Category, Item } from './MenuData';

// Navigation links array
const navLinks = [
    { label: 'About', href: '/about' },
    { label: 'Shop', href: '/shop', isDropdown: true },
    { label: 'Gifts', href: '/gifts' },
    { label: 'Blog', href: '/blog' },
    { label: 'Testimonials', href: '/testimonials' },
    { label: 'Contact us', href: '/contact' },
];

// Profile dropdown items
const profileDropdownItems = [
    { label: 'Sign In', href: '/signin' },
    { label: 'Login', href: '/login' },
];

const Navbar = () => {
    const [mobileMenuAnchorEl, setMobileMenuAnchorEl] = useState<null | HTMLElement>(null);
    const [shopMenuAnchorEl, setShopMenuAnchorEl] = useState<null | HTMLElement>(null);
    const [profileMenuAnchorEl, setProfileMenuAnchorEl] = useState<null | HTMLElement>(null);
    const [mobileShopMenuAnchorEl, setMobileShopMenuAnchorEl] = useState<null | HTMLElement>(null);

    const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setMobileMenuAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMenuAnchorEl(null);
        setMobileShopMenuAnchorEl(null);
    };

    const handleShopMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setShopMenuAnchorEl(event.currentTarget);
    };

    const handleShopMenuClose = () => {
        setShopMenuAnchorEl(null);
    };

    const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setProfileMenuAnchorEl(event.currentTarget);
    };

    const handleProfileMenuClose = () => {
        setProfileMenuAnchorEl(null);
    };

    const handleMobileShopMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setMobileShopMenuAnchorEl(event.currentTarget);
    };

    const handleMobileShopMenuClose = () => {
        setMobileShopMenuAnchorEl(null);
    };
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const handleMenuCloseOnClick = (_event: React.MouseEvent<HTMLElement> | React.KeyboardEvent | MouseEvent) => {
        console.log('Outside click detected, ignoring');
    };

    return (
        <>
            <TopBar />
            <AppBar position="static" color="transparent" elevation={0}>
                <StyledToolbar>
                    <Logo src="/images/logo.png" alt="Dolce Frutti Logo" />
                    <NavButtons>
                        {navLinks.map((link) => (
                            link.isDropdown ? (
                                <DropdownWrapper
                                    key={link.label}
                                    onMouseEnter={handleShopMenuOpen}
                                    onMouseLeave={handleShopMenuClose}
                                >
                                    <NavButton
                                        aria-owns={shopMenuAnchorEl ? 'shop-menu' : undefined}
                                        aria-haspopup="true"
                                        sx={{ display: 'flex', alignItems: 'center', gap: '4px' }}
                                        onClick={handleShopMenuOpen}
                                    >
                                        {link.label}
                                        <ArrowDropDownIcon fontSize="small" />
                                    </NavButton>
                                    <MegaMenu
                                        id="shop-menu"
                                        anchorEl={shopMenuAnchorEl}
                                        open={Boolean(shopMenuAnchorEl)}
                                        onClose={handleShopMenuClose}
                                        anchorOrigin={{
                                            vertical: 'bottom',
                                            horizontal: 'center',
                                        }}
                                        transformOrigin={{
                                            vertical: 'top',
                                            horizontal: 'center',
                                        }}
                                    />
                                </DropdownWrapper>
                            ) : (
                                <NavButton key={link.label} href={link.href}>
                                    {link.label}
                                </NavButton>
                            )
                        ))}
                    </NavButtons>
                    <IconContainer>
                        <StyledIconButton>
                            <SearchIcon />
                        </StyledIconButton>
                        <ProfileDropdownWrapper
                            onMouseEnter={handleProfileMenuOpen}
                            onMouseLeave={handleProfileMenuClose}
                            onClick={handleProfileMenuOpen}
                        >
                            <StyledIconButton
                                aria-owns={profileMenuAnchorEl ? 'profile-menu' : undefined}
                                aria-haspopup="true"
                            >
                                <PersonIcon />
                            </StyledIconButton>
                            <StyledMenu
                                id="profile-menu"
                                anchorEl={profileMenuAnchorEl}
                                open={Boolean(profileMenuAnchorEl)}
                                onClose={handleMenuCloseOnClick}
                                MenuListProps={{
                                    sx: { py: 1 },
                                }}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'right',
                                }}
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                disableAutoFocusItem
                                disableRestoreFocus
                            >
                                {profileDropdownItems.map((item) => (
                                    <StyledMenuItem
                                        key={item.label}
                                        onClick={handleProfileMenuClose}
                                        component="a"
                                        href={item.href}
                                    >
                                        {item.label}
                                    </StyledMenuItem>
                                ))}
                            </StyledMenu>
                        </ProfileDropdownWrapper>
                        <StyledIconButton>
                            <Badge badgeContent={4} color="error">
                                <ShoppingCartIcon />
                            </Badge>
                        </StyledIconButton>
                        <MobileMenuButton onClick={handleMobileMenuOpen}>
                            {mobileMenuAnchorEl ? <CloseIcon /> : <MenuIcon />}
                        </MobileMenuButton>
                    </IconContainer>
                    <MobileMenu
                        anchorEl={mobileMenuAnchorEl}
                        open={Boolean(mobileMenuAnchorEl)}
                        onClose={handleMobileMenuClose}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                    >
                        {navLinks.map((link) => (
                            link.isDropdown ? (
                                <div key={link.label}>
                                    <MobileMenuItem
                                        onClick={handleMobileShopMenuOpen}
                                    >
                                        {link.label}
                                        <ArrowDropDownIcon fontSize="small" />
                                    </MobileMenuItem>
                                    <MobileSubMenu
                                        id="mobile-shop-menu"
                                        anchorEl={mobileShopMenuAnchorEl}
                                        open={Boolean(mobileShopMenuAnchorEl)}
                                        onClose={handleMobileShopMenuClose}
                                        anchorOrigin={{
                                            vertical: 'bottom',
                                            horizontal: 'left',
                                        }}
                                        transformOrigin={{
                                            vertical: 'top',
                                            horizontal: 'left',
                                        }}
                                    >
                                        {shopMenu.map((category: Category) => (
                                            <div key={category.category}>
                                                <MobileMenuItem
                                                    onClick={handleMobileMenuClose}
                                                    component="a"
                                                    href={category.link}
                                                >
                                                    {category.category}
                                                </MobileMenuItem>
                                                {category.items.map((item: Item) => (
                                                    <MobileMenuItem
                                                        key={item.id}
                                                        onClick={handleMobileMenuClose}
                                                        component="a"
                                                        href={item.link}
                                                    >
                                                        {item.name}
                                                    </MobileMenuItem>
                                                ))}
                                            </div>
                                        ))}
                                    </MobileSubMenu>
                                </div>
                            ) : (
                                <MobileMenuItem
                                    key={link.label}
                                    onClick={handleMobileMenuClose}
                                    component="a"
                                    href={link.href}
                                >
                                    {link.label}
                                </MobileMenuItem>
                            )
                        ))}
                    </MobileMenu>
                </StyledToolbar>
            </AppBar>
        </>
    );
};

export default Navbar;