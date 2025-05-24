import { styled, Typography, Button, Box } from "@mui/material"

export const StyledBox = styled(Box)(({ theme }) => ({
    padding: '34px 8%',
    textAlign: 'center',
    [theme.breakpoints.down('md')]: {
        padding: '20px 6%',
    },
    [theme.breakpoints.down('sm')]: {
        padding: '16px 6%',
    },
}));

export const Styledh1 = styled(Typography)(({ theme }) => ({
    color: 'black',
    fontWeight: '600',
    fontSize: '30px',
    textTransform: 'capitalize',
    [theme.breakpoints.down("md")]: {
        fontSize: '24px',
    }
}))

export const Styledh3 = styled(Typography)(({ theme }) => ({
    color: 'black',
    fontWeight: 'bold',
    fontSize: '16px',
    textTransform: 'capitalize',
    marginBottom: '4px',
    textDecoration: 'none !important',
    '&:hover': {
        color: '#e1c343',
    },
    [theme.breakpoints.down("md")]: {
        fontSize: '18px',
    }
}))

export const Styledbutton = styled(Button)(({ theme }) => ({
    background: '#000',
    color: 'white',
    fontWeight: 'bold',
    fontSize: '15px',
    padding: '6px 20px',
    borderRadius: '6px',
    textTransform: 'capitalize',
    '&:hover': {
        background: '#e1c343',
        color: 'black',
    },
    [theme.breakpoints.down("sm")]: {
        fontSize: '16px',
        fontWeight: '400',
    }
}))