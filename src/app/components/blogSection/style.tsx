import { styled, keyframes, Box, Typography, Button, Card, CardContent, CardMedia, IconButton } from "@mui/material";
import Link from 'next/link';

const fadeUp = keyframes`
  0% {
    opacity: 0;
    transform: translateY(30px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const BlogSectionWrapper = styled(Box)(({ theme }) => ({
    padding: "30px 30px 60px 30px",
    textAlign: "center",
    backgroundColor: "#fff",
    [theme.breakpoints.down("sm")]: {
        padding: "40px 10px",
    },
}));
export const BlogBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '38px',
    gap: '30px',
    [theme.breakpoints.down("sm")]: {
        marginTop: '12px',
    },
}));

export const SliderWrapper = styled(Box)(({ theme }) => ({
    padding: '10px',
    display: "flex",
    alignItems: "center",
    gap: "28px",
    overflowX: "auto",
    scrollSnapType: "x mandatory",
    scrollBehavior: "smooth",
    '&::-webkit-scrollbar': {
        display: 'none',
    },
    scrollbarWidth: 'none',
    [theme.breakpoints.down("md")]: {
        padding: '10px 0',
    },
}));

export const CardLink = styled(Link)({
    textDecoration: 'none',
    color: 'inherit',
});

export const BlogCard = styled(Card)(({ theme }) => ({
    flex: "0 0 32.2%",
    scrollSnapAlign: "start",
    borderRadius: 20,
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    overflow: 'hidden',
    transition: 'transform 0.3s ease',
    animation: `${fadeUp} 0.6s ease forwards`,
    opacity: 0,
    transform: 'translateY(30px)',
    '&:hover': {
        transform: 'translateY(-5px)',
    },
    [theme.breakpoints.down("md")]: {
        flex: "0 0 48%",
    },
    [theme.breakpoints.down("sm")]: {
        flex: "0 0 100%",
    },
}));

export const BlogImage = styled(CardMedia)({
    height: 240,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
});

export const BlogCardContent = styled(CardContent)({
    textAlign: "center",
});

export const BlogTitleText = styled(Typography)({
    fontSize: "1.2rem",
    fontWeight: 700,
    color: "#0b1d26",
    marginBottom: 8,
});

export const BlogDescription = styled(Typography)({
    fontSize: "0.95rem",
    color: "#555",
    marginBottom: 12,
});

export const BlogDate = styled(Typography)({
    fontSize: "0.85rem",
    display: "flex",
    alignItems: "center",
    justifyContent: 'center',
    gap: 6,
    marginBottom: 16,
});

export const ReadMoreButton = styled(Button)({
    backgroundColor: "#000",
    color: "#fff",
    textTransform: "none",
    fontWeight: 600,
    padding: "10px 20px",
    borderRadius: 10,
    '&:hover': {
        backgroundColor: "#222",
    },
});

export const ArrowButton = styled(IconButton)({
    backgroundColor: "#e1c343",
    color: "#000",
    '&:hover': {
        backgroundColor: "#e1c343",
    },
});
