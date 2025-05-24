//@typescript-eslint / no-unused-vars
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

export const StyledTabs = styled(Tabs)(({ theme }) => ({
    '& .MuiTabs-indicator': {
        backgroundColor: '#e1c343',
        height: '2px',
    },
}));

export const StyledTab = styled(Tab)(({ theme }) => ({
    fontWeight: 'bold',
    fontSize: '15px',
    color: '#333',
    minWidth: '160px',
    padding: '0 12px',
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

export const ProductCard = styled('div')(({ theme }) => ({
    position: 'relative',
    background: '#fff',
    borderRadius: '10px',
    border: '1px solid #ccc',
    textAlign: 'center',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
}));

export const ProductCardWrapper = styled('div')(({ theme }) => ({
    marginBottom: '16px',
    [theme.breakpoints.down('sm')]: {
        marginBottom: '10px',
    },
}));

export const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        borderRadius: '10px 100px / 120px',
        backgroundColor: '#e1c343',
        color: 'black',
        fontSize: '12px',
        fontWeight: '600',
        position: 'absolute',
        top: '12%',
        right: '-6%',
        [theme.breakpoints.down('lg')]: {
            right: '4%',
        },
        [theme.breakpoints.down('md')]: {
            right: '-30%',
        },
        [theme.breakpoints.down('sm')]: {
            top: '16%',
            right: '-50%',
        },
    },
}));

export const ProductCardImage = styled(Image)(({ theme }) => ({
    objectFit: 'contain',
    maxHeight: '180px',
    width: 'auto',
    [theme.breakpoints.down('sm')]: {
        maxHeight: '120px',
    },
    [theme.breakpoints.between('sm', 'md')]: {
        maxHeight: '150px',
    },
}));

export const ProductCardDetails = styled('div')(({ theme }) => ({
    paddingBottom: '20px',
    [theme.breakpoints.down('sm')]: {
        paddingBottom: '10px',
    },
}));

export const ProductCardStars = styled('div')(({ theme }) => ({
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

export const ProductCardPrice = styled('p')(({ theme }) => ({
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
export const StyledLink = styled(Link)(({ theme }) => ({
    textDecoration: 'none',
    color: 'inherit',
    '&:hover': {
        textDecoration: 'none',
    },
}));