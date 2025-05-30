import { styled } from '@mui/material/styles';
import { Box, List, ListItem, Link as MuiLink } from '@mui/material';

export const FooterContainer = styled(Box)(({ theme }) => ({
    backgroundColor: '#000',
    color: '#fff',
    padding: '60px 8% 6px',
    fontFamily: 'Arial, sans-serif',
    [theme.breakpoints.down('sm')]: {
        padding: '30px 4% 8px',
    },
}));

export const FooterContent = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    gap: '20px',
    [theme.breakpoints.down('sm')]: {
        // max-width: 768px
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
    },
}));

export const FooterColumn = styled(Box)(({ theme }) => ({
    flex: 1,
    minWidth: '200px',
    textAlign: 'left',
    '&.first-column': {
        flex: 2,
        [theme.breakpoints.down('sm')]: {
            flex: 1,
        },
    },
    '&.third-column': {
        flex: 1,
        [theme.breakpoints.down('sm')]: {
            flex: 1,
        },
    },
    [theme.breakpoints.down('sm')]: {
        textAlign: 'center !important',
        marginTop: '10px'
    },
}));

export const FooterLogo = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    marginBottom: '15px',
    [theme.breakpoints.down('sm')]: {
        justifyContent: 'center',
    },
    '& img': {
        maxWidth: '100%',
        height: 'auto',
        [theme.breakpoints.down('sm')]: {
            width: '200px',
        },
        [theme.breakpoints.down('xs')]: {
            width: '100px ',
            height: 'auto',
        },
    },
}));

export const FooterText = styled('p')(({ theme }) => ({
    fontSize: '15px',
    lineHeight: 1.4,
    marginBottom: '15px',
    width: '86%',
    [theme.breakpoints.down('sm')]: {
        width: '95%',
    },
    [theme.breakpoints.down('xs')]: {
        fontSize: '12px',
    },
}));

export const FooterContactItem = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    fontSize: '15px',
    marginBottom: '10px',
    width: '86%',
    [theme.breakpoints.down('sm')]: {
        width: '95%',
        justifyContent: 'center',
    },
    [theme.breakpoints.down('xs')]: {
        fontSize: '12px',
    },
    '& .footer-contact-icon': {
        fontSize: '16px',
        [theme.breakpoints.down('xs')]: {
            fontSize: '14px',
        },
    },
}));

export const FooterSocial = styled(Box)(({ theme }) => ({
    display: 'flex',
    gap: '10px',
    marginTop: '20px',
    [theme.breakpoints.down('sm')]: {
        justifyContent: 'center',
    },
}));

export const FooterSocialLink = styled(MuiLink)(({ theme }) => ({
    color: '#e1c343',
    width: '36px',
    height: '36px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '1px solid #e1c343',
    borderRadius: '50%',
    textDecoration: 'none',
    [theme.breakpoints.down('xs')]: {
        width: '32px',
        height: '32px',
        fontSize: '18px',
    },
    '&:hover': {
        borderColor: '#000',
        backgroundColor: '#e1c343',
        color: '#000',
    },
}));

export const FooterTitle = styled('h3')({
    fontSize: '16px',
    fontWeight: 'bold',
    marginBottom: '16px',
    textTransform: 'uppercase',
});

export const FooterList = styled(List)(({ theme }) => ({
    listStyle: 'none',
    padding: 0,
    '& .css-uvoud4-MuiListItem-root': {
        width: 'auto',
    },
    [theme.breakpoints.down('sm')]: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        textAlign: 'center',
        width: 'auto'

    },
}));

export const FooterListItem = styled(ListItem)(({ theme }) => ({
    marginBottom: '6px',
    padding: 0,
    [theme.breakpoints.down('sm')]: {
        textAlign: 'center',
    },
}));

export const FooterListLink = styled(MuiLink)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    color: '#fff',
    fontSize: '16px',
    textDecoration: 'none',
    [theme.breakpoints.down('xs')]: {
        fontSize: '14px',
        textAlign: 'center',
    },
    '&:hover': {
        color: '#e1c343',
    },
}));

// export const FooterPaymentItem = styled(ListItem)(({ theme }) => ({
//     listStyle: 'none',
//     fontSize: '16px',
//     padding: '0',
//     marginBottom: '4px',
//     '& css-vsqmxl-MuiListItem-root': {
//         width: 'auto',
//     },
// }));

export const FooterPaymentLink = styled(MuiLink)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    textDecoration: 'none',
    color: '#fff',
    [theme.breakpoints.down('sm')]: {
        justifyContent: 'center',
    },
    '&:hover': {
        color: '#e1c343',
    },
    '& img': {
        width: '18px',
        height: '18px',
    },
}));

export const FooterBottom = styled(Box)(({ theme }) => ({
    textAlign: 'center',
    padding: '20px 0',
    borderTop: '1px solid #444',
    marginTop: '30px',
    [theme.breakpoints.down('sm')]: {
        padding: '15px 0',
    },
}));

export const FooterBottomText = styled('p')(({ theme }) => ({
    fontSize: '16px',
    [theme.breakpoints.down('sm')]: {
        fontSize: '14px',
    },
}));

export const FooterBottomLink = styled(MuiLink)({
    color: '#fff',
    textDecoration: 'none',
    '&:hover': {
        color: '#e1c343',
    },
});