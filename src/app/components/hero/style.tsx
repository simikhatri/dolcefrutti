import { styled, Box, Typography, Button } from '@mui/material';

export const HeroContainer = styled(Box)(({ theme }) => ({
    position: 'relative',
    height: '550px',
    margin: '14px 0',
    overflow: 'hidden',
    [theme.breakpoints.down("md")]: {
        height: '450px',
    },
}));

export const HeroVideoWrapper = styled(Box)(({ theme }) => ({
    position: 'absolute',
    top: 0,
    left: '50%',
    transform: 'translateX(-50%)',
    width: '85%',
    height: '100%',
    zIndex: 0,
    objectFit: 'cover',
    borderRadius: '20px',
    overflow: 'hidden',
    boxShadow: 'rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px',
    [theme.breakpoints.down("md")]: {
        width: '100%',
        left: 0,
        transform: 'none',
        borderRadius: '15px',
    },
}));

export const HeroVideoPlayer = styled('video')({
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: '20px',
});

export const HeroContent = styled(Box)(({ theme }) => ({
    position: 'absolute',
    zIndex: 1,
    bottom: 0,
    left: 0,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    textAlign: 'left',
    padding: '20px 12%',
    color: '#000',
    width: '100%',
    [theme.breakpoints.down("md")]: {
        padding: '10px 5%',
    },
}));

export const HeroSubtitle = styled(Typography)(({ theme }) => ({
    fontSize: '16px',
    fontWeight: 600,
    marginBottom: '16px',
    [theme.breakpoints.down("md")]: {
        marginBottom: '8px',
        fontSize: '15px',
    },
}));

export const HeroTitle = styled(Typography)(({ theme }) => ({
    fontSize: '28px',
    fontWeight: 900,
    marginBottom: '30px',
    textTransform: 'capitalize',
    [theme.breakpoints.down("md")]: {
        marginBottom: '20px',
        fontSize: '20px',
    },
}));

export const HeroButtonsWrapper = styled(Box)(({ theme }) => ({
    display: 'flex',
    gap: '16px',
    marginBottom: '30px',
    [theme.breakpoints.down("md")]: {
        gap: '8px',
    },
}));

export const HeroFarmButton = styled(Button)(({ theme }) => ({
    backgroundColor: '#000',
    color: 'white',
    fontWeight: 600,
    textDecoration: 'none',
    padding: '10px 26px',
    borderRadius: '12px',
    textTransform: 'none',
    '&:hover': {
        backgroundColor: '#e1c343',
        color: 'black',
    },
    [theme.breakpoints.down("md")]: {
        padding: '6px 20px',
    },
}));

export const HeroShopButton = styled(Button)(({ theme }) => ({
    backgroundColor: 'transparent',
    color: 'black',
    fontWeight: 600,
    textDecoration: 'none',
    padding: '10px 26px',
    borderRadius: '12px',
    border: '2px solid black',
    textTransform: 'none',
    '&:hover': {
        backgroundColor: '#e1c343',
        color: 'black',
    },
    [theme.breakpoints.down("md")]: {
        padding: '6px 20px',
    },
}));