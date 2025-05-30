import { styled, Toolbar, Button, IconButton, Menu, MenuItem, MenuProps, MenuItemProps } from '@mui/material';


interface StyledMenuItemProps extends MenuItemProps {
    href?: string;
}

export const StyledToolbar = styled(Toolbar)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: '4px 7%',
    padding: '0 16px',
    [theme.breakpoints.down('md')]: {
        margin: '4px 5%',
        padding: '0 12px',
    },
    [theme.breakpoints.down('sm')]: {
        margin: '4px 3%',
        padding: '0 8px',
    },
}));

export const Logo = styled('img')(({ theme }) => ({
    height: '70px',
    [theme.breakpoints.down('md')]: {
        height: '60px',
    },
    [theme.breakpoints.down('sm')]: {
        height: '50px',
    },
}));

export const NavButtons = styled('div')(({ theme }) => ({
    display: 'flex',
    gap: '20px',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
        display: 'none',
    },
}));

export const NavButton = styled(Button)(({ theme }) => ({
    color: '#000',
    fontWeight: 'bold',
    textTransform: 'none',
    fontSize: '16px',
    '&:hover': {
        color: '#e1c343',
        backgroundColor: 'transparent',
        borderBottom: '2px solid #e1c343',
        borderRadius: '0',
    },
    [theme.breakpoints.down('md')]: {
        fontSize: '14px',
    },
}));

export const IconContainer = styled('div')(({ theme }) => ({
    display: 'flex',
    gap: '15px',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
        gap: '12px',
    },
    [theme.breakpoints.down('sm')]: {
        gap: '8px',
    },
}));

export const StyledIconButton = styled(IconButton)(({ theme }) => ({
    backgroundColor: '#000',
    color: '#fff',
    padding: '8px',
    '&:hover': {
        backgroundColor: '#333',
        color: '#e1c343',
    },
    [theme.breakpoints.down('sm')]: {
        padding: '6px',
    },
}));

export const MobileMenuButton = styled(IconButton)(({ theme }) => ({
    display: 'none',
    [theme.breakpoints.down('md')]: {
        display: 'block',
        color: '#000',
        backgroundColor: '#fff',
        padding: '6px',
        '&:hover': {
            backgroundColor: '#f0f0f0',
            color: '#e1c343',
        },
    },
}));

export const DropdownWrapper = styled('div')(() => ({
    position: 'relative',
    display: 'inline-block',
}));

export const ProfileDropdownWrapper = styled('div')(() => ({
    position: 'relative',
    display: 'inline-block',
}));

export const StyledMenu = styled(Menu)(() => ({
    '& .MuiPaper-root': {
        marginTop: '4px',
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
        borderRadius: '4px',
        minWidth: '150px',
        zIndex: 1300,
        pointerEvents: 'auto',
    },
    pointerEvents: 'none',
    '& .MuiList-root': {
        pointerEvents: 'auto',
    },
}));

export const StyledMenuItem = styled(MenuItem)<StyledMenuItemProps>({
    fontSize: '14px',
    color: '#000',
    justifyContent: 'flex-start',
    '&:hover': {
        backgroundColor: '#e1c343',
        color: '#fff',
    },
});

export const MobileMenu = styled(Menu)(({ theme }) => ({
    '& .MuiPaper-root': {
        width: '100%',
        marginTop: '60px',
        textAlign: 'left',
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
        borderRadius: '4px',
        zIndex: 1300,
        maxHeight: '80vh',
        overflowY: 'auto',
        padding: '8px 0',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
}));

export const MobileSubMenu = styled(Menu)(({ theme }) => ({
    '& .MuiPaper-root': {
        width: '100%',
        textAlign: 'left',
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
        borderRadius: '4px',
        zIndex: 1300,
        marginTop: '0px',
        maxHeight: '80vh',
        overflowY: 'auto',
        padding: '8px 0',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
}));

export const MobileMenuItem = styled(MenuItem)<StyledMenuItemProps>(({ theme }) => ({
    fontSize: '16px',
    color: '#000',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: '8px',
    padding: '12px 16px',
    '&:hover': {
        backgroundColor: '#e1c343',
        color: '#fff',
    },
    [theme.breakpoints.up('md')]: {
        display: 'none',
    },
}));

// MegaMenu Components
export const StyledMegaMenu = styled(Menu)<MenuProps>(({ theme }) => ({
    '& .MuiPaper-root': {
        marginTop: '4px',
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
        borderRadius: '4px',
        width: '86%',
        maxWidth: '1200px',
        overflow: 'hidden',
        zIndex: 1300,
        position: 'absolute',
        left: '6.7% !important',
        transform: 'translateX(-50%)',
        [theme.breakpoints.down('md')]: {
            width: '90%',
            maxWidth: '600px',
        },
        [theme.breakpoints.down('sm')]: {
            width: '100%',
            left: '0 !important',
            transform: 'none',
            marginTop: '0px',
            borderRadius: '0',
            maxHeight: '80vh',
            overflowY: 'auto',
        },
    },
}));

export const MegaMenuContainer = styled('div')(({ theme }) => ({
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '20px',
    padding: '16px',
    backgroundColor: '#fff',
    [theme.breakpoints.down('md')]: {
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '15px',
        padding: '12px',
    },
    [theme.breakpoints.down('sm')]: {
        gridTemplateColumns: '1fr',
        gap: '10px',
        padding: '10px 16px',
        textAlign: 'left',
    },
}));

export const MegaMenuColumn = styled('div')(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    [theme.breakpoints.down('sm')]: {
        gap: '8px',
    },
}));

export const MegaMenuCategory = styled('div')(({ theme }) => ({
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#000',
    position: 'relative',
    paddingBottom: '8px',
    marginBottom: '8px',
    textAlign: 'left',
    '&:after': {
        content: '""',
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '60px',
        height: '3px',
        backgroundColor: '#e1c343',
    },
    '& a': {
        color: '#000',
        textDecoration: 'none',
    },
    [theme.breakpoints.down('md')]: {
        fontSize: '16px',
        BorderBottom: '2px solid #e1c343 !important'
    },
    [theme.breakpoints.down('sm')]: {
        fontSize: '16px',
    },
}));

export const MegaMenuItem = styled('div')(({ theme }) => ({
    fontSize: '15px',
    lineHeight: '1.4',
    color: '#000',
    textAlign: 'left',
    '& a': {
        color: '#000',
        textDecoration: 'none',
        '&:hover': {
            color: '#e1c343',
        },
    },
    [theme.breakpoints.down('sm')]: {
        fontSize: '12px',
    },
}));

export const MegaMenuImageColumn = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    [theme.breakpoints.down('sm')]: {
        display: 'none',
    },
}));

export const MegaMenuImage = styled('img')({
    width: '100%',
    height: 'auto',
    maxHeight: '300px',
    objectFit: 'cover',
});

export const MegaMenuLogo = styled('img')({
    width: '80%',
    height: 'auto',
    maxHeight: '200px',
    objectFit: 'contain',
});

