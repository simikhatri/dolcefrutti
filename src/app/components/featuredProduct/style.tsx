import { styled, Grid, Box, Typography, Card } from '@mui/material';

export const FeaturedCard = styled(Box)(({ theme }) => ({
    borderRadius: '20px',
    position: 'relative',
    minWidth: '300px',
    [theme.breakpoints.down('sm')]: {
        minWidth: '100%', // Ensure card takes full width on mobile
    },
}));

export const CardPrimary = styled(Card)(({ theme }) => ({
    backgroundColor: '#f5f5e5',
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.down(992)]: {
        flexDirection: 'column',
        textAlign: 'center',
    },
    [theme.breakpoints.down('sm')]: {
        padding: '10px', // Reduce padding on mobile to avoid overflow
    },
}));

export const PrimaryCardContent = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: '24px 10px 0 46px',
    [theme.breakpoints.down(992)]: {
        alignItems: 'center',
        textAlign: 'center',
        padding: '16px 8px 0 8px', // Adjust padding for tablet
    },
    [theme.breakpoints.down('sm')]: {
        padding: '12px 6px 0 6px', // Further reduce padding for mobile
    },
}));

export const PrimaryCardContentTitle = styled(Typography)(({ theme }) => ({
    fontWeight: 800,
    fontSize: '40px',
    [theme.breakpoints.between('sm', 'md')]: {
        fontSize: '32px',
    },
    [theme.breakpoints.down('sm')]: {
        fontSize: '28px',
    },
    [theme.breakpoints.down('xs')]: {
        fontSize: '24px', // Extra small screens (e.g., <400px)
    },
}));

export const PrimaryCardContentPrice = styled(Typography)(({ theme }) => ({
    fontSize: '26px',
    fontWeight: 600,
    margin: '10px 0',
    paddingBottom: '12px',
    '& strong': {
        fontSize: '40px',
        fontWeight: 800,
        [theme.breakpoints.between('sm', 'md')]: {
            fontSize: '32px',
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: '28px',
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: '24px',
        },
    },
    [theme.breakpoints.between('sm', 'md')]: {
        fontSize: '22px',
    },
    [theme.breakpoints.down('sm')]: {
        fontSize: '20px',
    },
    [theme.breakpoints.down('xs')]: {
        fontSize: '18px',
    },
}));

export const PrimaryCardContentShipping = styled(Typography)(({ theme }) => ({
    fontSize: '18px',
    fontWeight: 400,
    color: '#5e5c5c',
    marginBottom: '20px',
    [theme.breakpoints.between('sm', 'md')]: {
        fontSize: '16px',
        marginBottom: '16px',
    },
    [theme.breakpoints.down('sm')]: {
        fontSize: '14px',
        marginBottom: '12px',
    },
    [theme.breakpoints.down('xs')]: {
        fontSize: '12px',
        marginBottom: '10px',
    },
}));

export const PrimaryCardImage = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'end',
    padding: '0 40px 4px 0',
    [theme.breakpoints.down(992)]: {
        alignItems: 'center',
        padding: '0 20px 4px 20px', // Center image on tablet
        '& img': {
            width: '100%',
            height: 'auto', // Ensure image scales proportionally
            maxWidth: '300px', // Maintain max width
        },
    },
    [theme.breakpoints.down('sm')]: {
        padding: '0 10px 4px 10px',
        '& img': {
            maxWidth: '250px', // Slightly smaller on mobile
        },
    },
    [theme.breakpoints.down('xs')]: {
        '& img': {
            maxWidth: '200px', // Even smaller on extra small screens
        },
    },
}));

export const FeaturedCardSecondary = styled(Card)(({ theme }) => ({
    backgroundColor: '#fceee4',
    display: 'flex',
    flexDirection: 'row',
    gap: '16px',
    '&:nth-child(2)': {
        backgroundColor: '#e4f9e6',
    },
    [theme.breakpoints.down(992)]: {
        flexDirection: 'column',
        textAlign: 'center',
    },
    [theme.breakpoints.down('sm')]: {
        padding: '10px', // Add padding to avoid content touching edges
    },
}));

export const FeaturedCardThird = styled(Card)(({ theme }) => ({
    backgroundColor: 'rgb(202, 243, 202)',
    display: 'flex',
    flexDirection: 'row',
    paddingLeft: '26px',
    gap: '16px',
    [theme.breakpoints.down(992)]: {
        flexDirection: 'column',
        textAlign: 'center',
        paddingLeft: '0', // Center content on tablet
    },
    [theme.breakpoints.down('sm')]: {
        padding: '10px',
    },
}));

export const FeaturedCardSec = styled(Box)(({ theme }) => ({
    display: 'flex',
    width: '100%',
    [theme.breakpoints.down(992)]: {
        flexDirection: 'column', // Ensure content stacks properly
        alignItems: 'center',
    },
}));

export const FeaturedCardSecContent = styled(Box)(({ theme }) => ({
    textAlign: 'left',
    padding: '30px 16px',
    [theme.breakpoints.down(992)]: {
        textAlign: 'center',
        padding: '20px 12px', // Reduce padding for tablet
    },
    [theme.breakpoints.down('sm')]: {
        padding: '16px 8px', // Further reduce for mobile
    },
}));

export const FeaturedCardSecTitle = styled(Typography)(({ theme }) => ({
    fontSize: '24px',
    fontWeight: 800,
    [theme.breakpoints.between('sm', 'md')]: {
        fontSize: '20px',
    },
    [theme.breakpoints.down('sm')]: {
        fontSize: '18px',
    },
    [theme.breakpoints.down('xs')]: {
        fontSize: '16px',
    },
}));

export const FeaturedCardSecPrice = styled(Typography)(({ theme }) => ({
    fontSize: '20px',
    fontWeight: 600,
    paddingBottom: '6px',
    '& strong': {
        fontSize: '24px',
        fontWeight: 800,
        [theme.breakpoints.between('sm', 'md')]: {
            fontSize: '20px',
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: '18px',
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: '16px',
        },
    },
    [theme.breakpoints.between('sm', 'md')]: {
        fontSize: '18px',
    },
    [theme.breakpoints.down('sm')]: {
        fontSize: '16px',
    },
    [theme.breakpoints.down('xs')]: {
        fontSize: '14px',
    },
}));

export const FeaturedCardSecShipping = styled(Typography)(({ theme }) => ({
    fontSize: '16px',
    fontWeight: 400,
    color: '#5e5c5c',
    marginBottom: '12px',
    [theme.breakpoints.between('sm', 'md')]: {
        fontSize: '14px',
        marginBottom: '10px',
    },
    [theme.breakpoints.down('sm')]: {
        fontSize: '12px',
        marginBottom: '8px',
    },
    [theme.breakpoints.down('xs')]: {
        fontSize: '10px',
        marginBottom: '6px',
    },
}));

export const FeaturedCardSecImage = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'end',
    padding: '0 40px 4px 0',
    [theme.breakpoints.down(992)]: {
        alignItems: 'center',
        padding: '0 20px 4px 20px', // Center image on tablet
        '& img': {
            width: '100%',
            height: 'auto', // Scale image proportionally
            maxWidth: '236px', // Maintain max width
        },
    },
    [theme.breakpoints.down('sm')]: {
        padding: '0 10px 4px 10px',
        '& img': {
            maxWidth: '200px', // Smaller on mobile
        },
    },
    [theme.breakpoints.down('xs')]: {
        '& img': {
            maxWidth: '180px', // Even smaller on extra small screens
        },
    },
}));

export const FeaturedColumn = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    [theme.breakpoints.down('sm')]: {
        gap: '16px', // Reduce gap on mobile for better spacing
    },
}));