import { styled, Box, Typography } from '@mui/material';
import FormatQuoteOutlinedIcon from '@mui/icons-material/FormatQuoteOutlined';

interface ProfileProps {
    short: string;
}

export const Wrap = styled(Box)({
    padding: '60px 8%',
    backgroundColor: '#fff',
    textAlign: 'center',
});

export const StyledBox = styled(Box)({
    padding: '40px 0',
});

export const Title = styled(Typography)({
    fontSize: '36px',
    fontWeight: 700,
    marginBottom: '40px',
    color: '#000',
});

export const Card = styled(Box)(({ theme }) => ({
    backgroundColor: '#f5f5f5',
    borderRadius: '20px',
    padding: '20px',
    textAlign: 'center',
    position: 'relative',
    height: '400px',
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'visible',
    [theme.breakpoints.down('sm')]: {
        margin: '0 10px',
        padding: '70px 20px 10px',
        height: '300px',
    },
}));

export const ProfileWrapper = styled(Box)({
    position: 'absolute',
    top: '-40px',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '80px',
    height: '80px',
    zIndex: '2000',
    overflow: 'visible',
});

export const Profile = styled(Box)<ProfileProps>(({ short }) => ({
    width: '90px',
    height: '90px',
    borderRadius: '50%',
    backgroundColor: '#ccc',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#000',
    fontSize: '24px',
    fontWeight: '700',
    textTransform: 'uppercase',
    '&::before': {
        content: `"${short}"`,
    },
}));

export const QuoteTop = styled(FormatQuoteOutlinedIcon)({
    position: 'absolute',
    top: '0',
    left: '4px',
    color: '#ccc',
    fontSize: '80px',
    transform: 'rotate(180deg)',
});

export const QuoteBottom = styled(FormatQuoteOutlinedIcon)({
    position: 'absolute',
    bottom: '0',
    right: '4px',
    color: '#ccc',
    fontSize: '80px',
});

export const Name = styled(Typography)({
    fontSize: '18px',
    fontWeight: 700,
    color: '#000',
    marginTop: '30px',
});

export const Text = styled(Box)(({ theme }) => ({
    fontSize: '16px',
    color: '#555',
    marginBottom: '10px',
    lineHeight: '1.3',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    WebkitBoxOrient: 'vertical',
    WebkitLineClamp: 3,
    [theme.breakpoints.down('sm')]: {
        fontSize: '14px',
    },
    '& a': {
        display: 'inline',
        textDecoration: 'none',
    },
}));


export const ReadMoreButton = styled(Typography)(({ theme }) => ({
    color: '#e1c343',
    fontSize: '14px',
    fontWeight: '500',
    cursor: 'pointer',
    textDecoration: 'underline',
    marginLeft: '5px',
    display: 'inline',
    [theme.breakpoints.down('sm')]: {
        fontSize: '12px',
    },
}));

export const DateText = styled(Typography)({
    fontSize: '14px',
    color: '#888',
});

export const SliderWrapper = styled(Box)({
    '& .slick-list': {
        overflowY: 'visible',
        overflowX: 'hidden',
        margin: '0 -10px',
    },
    '& .slick-slide': {
        padding: '0 10px',
    },
});