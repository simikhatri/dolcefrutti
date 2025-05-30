import { styled, keyframes, Menu, MenuItem, Box } from '@mui/material';
import Link from 'next/link';

const scrollLeft = keyframes`
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-50%);
  }
`;

export const AnnouncementBar = styled(Box)(({ theme }) => ({
    background: '#000',
    color: '#fff',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    position: 'relative',
    height: '36px',
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.down(480)]: {
        height: '30px',
    },
}));


export const MarqueeWrapper = styled('div')(({ theme }) => ({
    display: 'flex',
    width: '200%',
    animation: `${scrollLeft} 20s linear infinite`,
}));


export const MarqueeText = styled('span')(({ theme }) => ({
    paddingRight: '5rem',
    fontSize: '16px',
    fontWeight: 500,
    whiteSpace: 'nowrap',
    [theme.breakpoints.down(480)]: {
        fontSize: '14px',
        paddingRight: '3rem',
    },
}));

export const TopBarContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    margin: '10px 8%',
    fontSize: '14px',
    paddingBottom: '10px',
    gap: '16px',
    borderBottom: '1px solid rgb(211, 208, 208)',
    [theme.breakpoints.down('md')]: {
        justifyContent: 'space-between',
        padding: '10px 0',
    },
}));

export const LanguageSelector = styled(Box)({
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
    cursor: 'pointer',
});

export const LanguageMenu = styled(Menu)({
    '& .MuiPaper-root': {
        background: '#fff',
        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
        padding: '10px 0',
        minWidth: '100px',
    },
});

export const LanguageMenuItem = styled(MenuItem)({
    fontSize: '14px',
    color: '#000',
    justifyContent: 'flex-start',
    '&:hover': {
        backgroundColor: '#e1c343',
        color: '#fff',
    },
});

export const SocialIconsContainer = styled(Box)({
    display: 'flex',
    gap: '8px',
});

export const SocialIconWrapper = styled('span')({
    width: '30px',
    height: '30px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '1px solid #000',
    borderRadius: '50%',
    padding: '16px',
    cursor: 'pointer',
    '&:hover': {
        backgroundColor: '#e1c343',
    },
});

export const SocialIconLink = styled(Link)({
    color: '#000',
});
