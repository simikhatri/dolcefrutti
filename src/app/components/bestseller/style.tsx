import { styled, Box, Typography } from '@mui/material';
import Link from 'next/link';

export const Header = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '22px',
    [theme.breakpoints.down('sm')]: {
        marginBottom: '12px',
    },
}));

export const Controls = styled(Box)(() => ({
    display: 'flex',
    gap: '12px',
}));

export const ControlsBtn = styled("button")(({ theme }) => ({
    backgroundColor: '#e1c343',
    border: 'none',
    borderRadius: '50%',
    width: '42px',
    height: '42px',
    padding: '0',
    '&:hover': {
        backgroundColor: '#000',
        color: '#e1c343',
    },
    [theme.breakpoints.down('sm')]: {
        width: '36px',
        height: '36px',
    },
}));

export const ProgressBar = styled(Box)(() => ({
    marginBottom: '2rem',
}));

export const ProgressLine = styled(Box)(() => ({
    width: '100%',
    height: '4px',
    backgroundColor: '#ccc',
    position: 'relative',
}));

export const ProgressLineBar = styled(Box)(({ theme }) => ({
    position: 'absolute',
    bottom: '-2px',
    height: '8px',
    borderRadius: '25px',
    backgroundColor: '#e1c343',
    transition: 'width 0.3s ease',
    [theme.breakpoints.down('sm')]: {
        height: '6px',
        bottom: '-1px',
    },
}));

export const Slider = styled(Box)(() => ({
    display: 'flex',
    overflowX: 'hidden',
    scrollSnapType: 'x mandatory',
    gap: '10px',
    width: '100%',
}));

export const SliderCard = styled(Box)(({ theme }) => ({
    flex: '0 0 18.7%',
    scrollSnapAlign: 'start',
    backgroundColor: '#fff',
    borderRadius: '10px',
    overflow: 'hidden',
    boxShadow: 'none',
    padding: '16px',
    textAlign: 'center',
    [theme.breakpoints.down('md')]: {
        flex: '0 0 48%',
    },
    [theme.breakpoints.down('sm')]: {
        flex: '0 0 98%',
    },
}));

export const SliderCardLink = styled(Link)(() => ({
    textDecoration: 'none',
    color: '#000',
}));

export const SliderCardImage = styled(Box)(({ theme }) => ({
    width: '200px',
    height: '200px',
    overflow: 'hidden',
    padding: '10px',
    '& img': {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        borderRadius: '50%',
        '&:hover': {
            boxShadow: 'rgba(194, 174, 1, 0.2) 0px 8px 24px',
        },
    },
    [theme.breakpoints.down('sm')]: {
        height: '300px',
        width: '100%',
        '& img': {
            borderRadius: '50%',
        },
    },
}));

export const SliderCardName = styled(Typography)(() => ({
    fontSize: '17px',
    fontWeight: 600,
    margin: '16px 0 8px',
    '&:hover': {
        color: '#e1c343',
    },
}));