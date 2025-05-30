import { styled, Card, CardContent, Typography, Box } from '@mui/material';

export const MainBox = styled(Box)(({ theme }) => ({
    padding: '60px 8%',
    [theme.breakpoints.down('md')]: {
        padding: '20px 6%',
    },
    [theme.breakpoints.down('sm')]: {
        padding: '16px 6%',
    },
}));

export const LeftCard = styled(Card)(({ theme }) => ({
    background: 'linear-gradient(135deg, #EEF0B4FF, #F8ECA7FF)',
    borderRadius: '16px',
    padding: '24px',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    animation: 'slideIn 0.6s ease-out forwards',
    animationDelay: '0.2s',
    opacity: 0,
    '@keyframes slideIn': {
        from: {
            opacity: 0,
            transform: 'translateY(20px)',
        },
        to: {
            opacity: 1,
            transform: 'translateY(0)',
        },
    },
    [theme.breakpoints.down('sm')]: {
        padding: '16px',
    },
}));

export const LeftCardContent = styled(CardContent)(({ theme }) => ({
    padding: '20px 20px 0 20px !important',
    textAlign: 'left',
    [theme.breakpoints.down('sm')]: {
        padding: '10px !important',
    },
}));

export const LeftCardTitle = styled(Typography)(({ theme }) => ({
    fontFamily: 'Poppins, sans-serif',
    fontSize: '38px',
    fontWeight: 800,
    color: '#000',
    margin: '0 0 6px',
    [theme.breakpoints.down('md')]: {
        fontSize: '28px',
    },
    [theme.breakpoints.down('sm')]: {
        fontSize: '24px',
    },
}));

export const LeftCardPrice = styled(Typography)(({ theme }) => ({
    fontFamily: 'Poppins, sans-serif',
    fontSize: '28px',
    color: '#000',
    '& strong': {
        fontSize: '38px',
        fontWeight: 800,
    },
    [theme.breakpoints.down('md')]: {
        fontSize: '20px',
        '& strong': {
            fontSize: '28px',
        },
    },
    [theme.breakpoints.down('sm')]: {
        fontSize: '18px',
        '& strong': {
            fontSize: '24px',
        },
    },
}));

export const LeftCardShipping = styled(Typography)(({ theme }) => ({
    fontFamily: 'Poppins, sans-serif',
    fontSize: '17px',
    color: '#666',
    margin: '16px 0 26px 0',
    [theme.breakpoints.down('sm')]: {
        fontSize: '14px',
        margin: '10px 0 20px 0',
    },
}));

export const LeftCardImg = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'flex-end',
    '& img': {
        transition: 'transform 0.3s ease',
        '&:hover': {
            transform: 'scale(1.1)',
        },
    },
    [theme.breakpoints.down('sm')]: {
        justifyContent: 'center',
        marginTop: '10px',
    },
}));

export const TopRightCard = styled(Card)(({ theme }) => ({
    background: 'linear-gradient(135deg, #fff3e0, #ffe0b2)',
    borderRadius: '16px',
    padding: '20px 20px 20px 10px',
    height: '100%',
    animation: 'slideIn 0.6s ease-out forwards',
    animationDelay: '0.4s',
    opacity: 0,
    '@keyframes slideIn': {
        from: {
            opacity: 0,
            transform: 'translateY(20px)',
        },
        to: {
            opacity: 1,
            transform: 'translateY(0)',
        },
    },
    [theme.breakpoints.down('sm')]: {
        padding: '16px',
    },
}));

export const BottomRightCard = styled(Card)(({ theme }) => ({
    background: 'linear-gradient(135deg, #e6ffe6, #ccffcc)',
    borderRadius: '16px',
    padding: '20px 10px 20px 40px',
    height: '100%',
    animation: 'slideIn 0.6s ease-out forwards',
    animationDelay: '0.6s',
    opacity: 0,
    '@keyframes slideIn': {
        from: {
            opacity: 0,
            transform: 'translateY(20px)',
        },
        to: {
            opacity: 1,
            transform: 'translateY(0)',
        },
    },
    [theme.breakpoints.down('sm')]: {
        padding: '16px',
    },
}));

export const RightCardContent = styled(CardContent)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    textAlign: 'left',
    gap: '16px',
    padding: '0 !important',
    [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
        textAlign: 'center',
        gap: '10px',
    },
}));

export const RightCardTitle = styled(Typography)(({ theme }) => ({
    fontFamily: 'Poppins, sans-serif',
    fontSize: '24px',
    fontWeight: 800,
    color: '#000',
    margin: '0 0 8px',
    [theme.breakpoints.down('md')]: {
        fontSize: '20px',
    },
    [theme.breakpoints.down('sm')]: {
        fontSize: '18px',
    },
}));

export const RightCardPrice = styled(Typography)(({ theme }) => ({
    fontFamily: 'Poppins, sans-serif',
    fontSize: '20px',
    color: '#000',
    margin: '0 0 8px',
    '& strong': {
        fontWeight: 800,
    },
    [theme.breakpoints.down('md')]: {
        fontSize: '18px',
    },
    [theme.breakpoints.down('sm')]: {
        fontSize: '16px',
    },
}));

export const RightCardShipping = styled(Typography)(({ theme }) => ({
    fontFamily: 'Poppins, sans-serif',
    fontSize: '16px',
    color: '#666',
    margin: '0 0 16px',
    [theme.breakpoints.down('sm')]: {
        fontSize: '14px',
    },
}));

export const RightCardImg = styled(Box)(({ theme }) => ({
    textAlign: 'center',
    '& img': {
        transition: 'transform 0.3s ease',
        '&:hover': {
            transform: 'scale(1.1)',
        },
    },
    [theme.breakpoints.down('sm')]: {
        marginBottom: '10px',
    },
}));