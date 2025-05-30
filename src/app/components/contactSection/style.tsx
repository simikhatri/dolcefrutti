import { styled, Box, TextField, Button, Select, Typography } from '@mui/material';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/material.css'

export const ContactWrapper = styled(Box)({
    width: '100%',
    minHeight: '400px',
    position: 'relative',
    backgroundImage: 'url(/images/testimonial-back.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundBlendMode: 'color',
    backgroundColor: 'rgba(56, 56, 56, 0.8)',
    backgroundAttachment: 'fixed',
    padding: '60px 8%',
});

export const ContactContent = styled(Box)(({ theme }) => ({
    display: 'flex',
    gap: '40px',
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    position: 'relative',
    zIndex: 1,
    [theme.breakpoints.down('md')]: {
        flexDirection: 'column',
    },
}));

export const InfoBox = styled(Box)({
    backgroundColor: '#000',
    color: '#fff',
    flex: '1',
    padding: '40px',
    borderRadius: '20px',
    minWidth: '300px',
});

export const InfoItem = styled(Box)({
    marginBottom: '24px',
});

export const InfoTitle = styled('h3')({
    marginBottom: '6px',
    fontWeight: 700,
});

export const InfoText = styled('p')({
    margin: 0,
    fontWeight: 400,
});

export const FormBox = styled(Box)({
    flex: '1',
    minWidth: '300px',
    display: 'flex',
    flexDirection: 'column',
    gap: '18px',
    color: '#fff',
});

export const FormHeading = styled(Typography)({
    fontSize: '30px',
    fontWeight: '600',
    color: '#fff',
    marginBottom: '14px',
});

export const FormLabel = styled(Typography)({
    color: '#fff',
    fontWeight: 500,
    marginBottom: '4px',
    fontSize: '16px',
});

export const StyledInput = styled(TextField)({
    '& .MuiInputBase-root': {
        borderRadius: '8px',
        height: '36px',
        backgroundColor: 'transparent',
        color: '#fff',
    },
    '& .MuiInputLabel-root': {
        display: 'none',
    },
    '& .MuiOutlinedInput-notchedOutline': {
        borderColor: '#fff',
    },
    '&:hover .MuiOutlinedInput-notchedOutline': {
        borderColor: '#e1c343',
    },
    '& .Mui-focused .MuiOutlinedInput-notchedOutline': {
        borderColor: '#e1c343',
    },
});

export const StyledTextArea = styled(StyledInput)({
    '& .MuiInputBase-root': {
        height: 'auto',
    },
});

export const StyledSelect = styled(Select)({
    borderRadius: '8px',
    height: '36px',
    backgroundColor: 'transparent',
    color: '#fff',
    '& .MuiSvgIcon-root': {
        color: '#fff',
    },
    '& .MuiOutlinedInput-notchedOutline': {
        borderColor: '#fff',
    },
    '&:hover .MuiOutlinedInput-notchedOutline': {
        borderColor: '#e1c343',
    },
    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
        borderColor: '#e1c343',
    },
    '& .MuiInputLabel-root': {
        display: 'none',
    },
});

export const FormGrid = styled(Box)(({ theme }) => ({
    display: 'flex',
    gap: '20px',
    flexWrap: 'wrap',
    '& > *': {
        flex: '1 1 45%',
        minWidth: '200px',
    },
    [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
        '& > *': {
            flex: '1 1 100%',
        },
    },
}));

export const SubmitButton = styled(Button)({
    backgroundColor: '#000',
    color: '#fff',
    padding: '12px 24px',
    borderRadius: '8px',
    textTransform: 'none',
    fontWeight: 600,
    fontSize: '16px',
    width: '100%',
    '&:hover': {
        backgroundColor: '#e1c343',
        color: 'black',
    },
});

export const StyledPhoneInput = styled(PhoneInput)({
    '& .form-control': {
        borderRadius: '8px',
        height: '36px',
        backgroundColor: 'transparent',
        color: '#fff',
        border: '1px solid #fff',
        width: '100%',
        maxWidth: '100%',
        paddingLeft: '48px',
        boxShadow: 'none',
        outline: 'none',
    },
    '& .flag-dropdown': {
        backgroundColor: 'transparent',
        border: 'none',
        position: 'absolute',
        top: '0',
        left: '0',
        height: '100%',
        width: 'auto',
    },
    '& .selected-flag': {
        borderRight: '1px solid #fff',
        borderRadius: '8px 0 0 8px',
        backgroundColor: 'transparent',
        padding: '0 8px',
    },
    '& .country-list': {
        backgroundColor: '#fff',
        color: '#000',
    },
    '& input': {
        paddingLeft: '54px !important',
        border: 'none',
        backgroundColor: 'transparent',
        color: '#fff',
        height: '34px',
        width: '100%',
    },
    '& .special-label': {
        display: 'none',
    },
    '& .form-control:hover': {
        borderColor: '#e1c343',
    },
    '& .form-control:focus': {
        borderColor: '#e1c343',
        boxShadow: 'none',
    },
});

export const StyledDateTextField = styled(TextField, {
    shouldForwardProp: (prop) =>
        prop !== 'ownerState' && prop !== 'areAllSectionsEmpty' && prop !== 'sectionListRef',
})({
    '& .MuiInputBase-root': {
        borderRadius: '8px',
        height: '36px',
        backgroundColor: 'transparent',
        color: '#fff',
    },
    '& .MuiOutlinedInput-notchedOutline': {
        borderColor: '#fff',
    },
    '&:hover .MuiOutlinedInput-notchedOutline': {
        borderColor: '#ccc',
    },
    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
        borderColor: '#fff',
    },
});