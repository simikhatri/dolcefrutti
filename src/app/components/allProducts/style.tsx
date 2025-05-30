import { Padding } from '@mui/icons-material';
import { styled, Tabs, Tab, Grid, Badge } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

export const ProductsTab = styled('div')(({ theme }) => ({
    marginTop: '36px',
    marginBottom: '32px',
    [theme.breakpoints.down('sm')]: {
        marginTop: '20px',
        marginBottom: '16px',
    },
}));

export const StyledTabs = styled(Tabs)({
    '& .MuiTabs-indicator': {
        backgroundColor: '#e1c343',
        height: '2px',
    },
});

export const StyledTab = styled(Tab)(({ theme }) => ({
    fontWeight: 'bold',
    fontSize: '15px',
    color: '#333',
    minWidth: '160px',
    padding: '0 50px',
    textTransform: 'none',
    position: 'relative',
    '&.Mui-selected': {
        color: '#e1c343',
        borderBottom: '2px solid #e1c343',
    },
    '&:not(:last-child)::after': {
        content: '"|"',
        position: 'absolute',
        right: '-2px',
        top: '50%',
        transform: 'translateY(-50%)',
        color: '#ccc',
        fontSize: '16px',
        height: '16px',
    },
    [theme.breakpoints.down('sm')]: {
        minWidth: '100px',
        fontSize: '12px',
        padding: '4px 8px',
    },
    [theme.breakpoints.between('sm', 'md')]: {
        minWidth: '110px',
        fontSize: '14px',
    },
}));

export const ProductsGrid = styled(Grid)(({ theme }) => ({
    marginTop: '16px',
    [theme.breakpoints.down('sm')]: {
        marginTop: '8px',
    },
}));

export const StyledCard = styled('div')({
    position: 'relative',
    background: '#fff',
    borderRadius: '10px',
    border: '1px solid #f6f6f6',
    textAlign: 'center',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    overflow: 'hidden',
});

export const CardHead = styled('div')(({ theme }) => ({
    backgroundColor: '#f8f8f8',
    marginBottom: '16px',
    borderRadius: '10px 10px 0px 0px',
    height: '260px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    [theme.breakpoints.down('sm')]: {
        height: '150px',
        marginBottom: '10px',
    },
    [theme.breakpoints.between('sm', 'md')]: {
        height: '180px',
    },
}));

export const CardBadge = styled(Badge)(({ theme }) => ({
    position: 'absolute',
    top: '20px',
    right: '34px',
    '& .MuiBadge-badge': {
        borderRadius: '120px 10px / 100px',
        backgroundColor: '#e1c343',
        color: 'black',
        fontSize: '13px',
        fontWeight: '600',
        minWidth: '50px',
        textAlign: 'center',
        [theme.breakpoints.down('sm')]: {
            fontSize: '11px',
            padding: '4px 8px',
            top: '8px',
            right: '8px',
        },
    },
}));

export const CardImage = styled(Image)(({ theme }) => ({
    objectFit: 'contain',
    maxHeight: '100%', // Scale within CardHead height
    width: 'auto',
    [theme.breakpoints.down('sm')]: {
        maxHeight: '100%',
    },
    [theme.breakpoints.between('sm', 'md')]: {
        maxHeight: '100%',
    },
}));

export const CardDetails = styled('div')(({ theme }) => ({
    paddingBottom: '20px',
    [theme.breakpoints.down('sm')]: {
        paddingBottom: '10px',
    },
}));

export const Rating = styled('div')(({ theme }) => ({
    marginBottom: '6px',
    '& .MuiSvgIcon-root': {
        color: '#ffb400',
        '&.empty': {
            color: '#ccc',
        },
        fontSize: '17px',
        [theme.breakpoints.down('sm')]: {
            fontSize: '14px',
        },
    },
}));

export const Price = styled('p')(({ theme }) => ({
    fontWeight: 'bold',
    marginBottom: '8px',
    fontSize: '16px',
    '& .original': {
        textDecoration: 'line-through',
        fontWeight: 'bold',
        color: '#999',
        marginLeft: '8px',
    },
    [theme.breakpoints.down('sm')]: {
        fontSize: '0.875rem',
        marginBottom: '8px',
    },
}));
export const StyledLink = styled(Link)({
    textDecoration: 'none',
    color: 'inherit',
    '&:hover': {
        textDecoration: 'none',
    },
});