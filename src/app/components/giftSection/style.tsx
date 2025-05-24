import { styled, Box as MBox, Typography as MTypography } from '@mui/material';
import Link from 'next/link';

export const GiftSection = styled(MBox)(({ theme }) => ({
    width: '100%',
    margin: '30px 0',
    [theme.breakpoints.down('sm')]: {
        margin: '10px 0',
    },
}));

export const SliderContainer = styled(MBox)(({ theme }) => ({
    position: 'relative',
    width: '100%',
    height: '550px',
    overflow: 'hidden',
    [theme.breakpoints.down('md')]: {
        height: '400px',
    },
    [theme.breakpoints.down('sm')]: {
        height: 'auto',
        minHeight: '500px',
    },
}));

export const Slide = styled(MBox)<{ active: boolean }>(({ theme, active }) => ({
    display: active ? 'block' : 'none',
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    transition: 'opacity 0.5s ease-in-out',
    '&:before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        zIndex: 1,
    },
    [theme.breakpoints.down('sm')]: {
        backgroundPosition: 'top',
        minHeight: '500px',
    },
}));

export const SlideContent = styled(MBox)(({ theme }) => ({
    position: 'absolute',
    top: '50%',
    left: '10%',
    transform: 'translateY(-50%)',
    width: '40%',
    padding: '40px',
    color: '#fff',
    zIndex: 2,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    [theme.breakpoints.down('md')]: {
        width: '50%',
        padding: '30px',
    },
    [theme.breakpoints.down('sm')]: {
        width: '80%',
        top: '60%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        alignItems: 'center',
        textAlign: 'center',
        padding: '20px',
    },
}));

export const SlideTitle = styled(MTypography)(({ theme }) => ({
    fontSize: '48px',
    fontWeight: 700,
    color: '#e1c343',
    marginBottom: '16px',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
    opacity: 0,
    animation: 'fadeInSlide 1s ease forwards',
    [theme.breakpoints.down('md')]: {
        fontSize: '36px',
    },
    [theme.breakpoints.down('sm')]: {
        fontSize: '28px',
        marginBottom: '12px',
    },
    '@keyframes fadeInSlide': {
        '0%': { opacity: 0, transform: 'translateY(20px)' },
        '100%': { opacity: 1, transform: 'translateY(0)' },
    },
}));

export const SlideDesc = styled(MTypography)(({ theme }) => ({
    fontSize: '18px',
    fontWeight: 400,
    color: '#fff',
    marginBottom: '24px',
    textShadow: '1px 1px 3px rgba(0, 0, 0, 0.5)',
    opacity: 0,
    animation: 'fadeInSlide 1s ease forwards 0.5s', // Delay after title
    [theme.breakpoints.down('md')]: {
        fontSize: '16px',
    },
    [theme.breakpoints.down('sm')]: {
        fontSize: '14px',
        marginBottom: '16px',
    },
    '@keyframes fadeInSlide': {
        '0%': { opacity: 0, transform: 'translateY(20px)' },
        '100%': { opacity: 1, transform: 'translateY(0)' },
    },
}));

export const ButtonContainer = styled(MBox)(({ theme }) => ({
    display: 'flex',
    gap: '16px',
    opacity: 0,
    animation: 'fadeInSlide 1s ease forwards 1s', // Delay after desc
    [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
        gap: '12px',
    },
    '@keyframes fadeInSlide': {
        '0%': { opacity: 0, transform: 'translateY(20px)' },
        '100%': { opacity: 1, transform: 'translateY(0)' },
    },
}));

export const SlideButton = styled(Link)(({ theme }) => ({
    padding: '12px 24px',
    backgroundColor: '#000',
    color: '#fff',
    textDecoration: 'none',
    borderRadius: '5px',
    fontSize: '16px',
    fontWeight: 600,
    transition: 'background-color 0.3s ease',
    '&:hover': {
        backgroundColor: '#333',
    },
    [theme.breakpoints.down('sm')]: {
        padding: '10px 20px',
        fontSize: '14px',
    },
}));

export const SlideButtonSecondary = styled(Link)(({ theme }) => ({
    padding: '12px 24px',
    backgroundColor: 'transparent',
    color: '#fff',
    textDecoration: 'none',
    border: '2px solid #fff',
    borderRadius: '5px',
    fontSize: '16px',
    fontWeight: 600,
    transition: 'background-color 0.3s ease, color 0.3s ease',
    '&:hover': {
        backgroundColor: '#fff',
        color: '#000',
    },
    [theme.breakpoints.down('sm')]: {
        padding: '10px 20px',
        fontSize: '14px',
    },
}));

export const SliderDots = styled(MBox)(({ theme }) => ({
    position: 'absolute',
    bottom: '20px',
    left: '50%',
    transform: 'translateX(-50%)',
    display: 'flex',
    gap: '10px',
    zIndex: 3,
    [theme.breakpoints.down('sm')]: {
        bottom: '10px',
    },
}));

export const Dot = styled('span')<{ active: boolean }>(({ theme, active }) => ({
    width: '12px',
    height: '12px',
    borderRadius: '50%',
    backgroundColor: active ? '#e1c343' : '#ccc',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
    [theme.breakpoints.down('sm')]: {
        width: '10px',
        height: '10px',
    },
}));

export const SliderArrow = styled('span')<{ direction: 'left' | 'right' }>(({ theme, direction }) => ({
    position: 'absolute',
    top: '50%',
    [direction]: '20px',
    transform: 'translateY(-50%)',
    color: '#fff',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: '50%',
    padding: '10px',
    cursor: 'pointer',
    zIndex: 3,
    '&:hover': {
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
    },
    [theme.breakpoints.down('sm')]: {
        [direction]: '10px',
        padding: '8px',
    },
}));