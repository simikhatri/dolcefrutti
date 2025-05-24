'use client';
import React, { useState, useEffect } from 'react';
import Shopbtn from '../ui/shopbtn';
import {
    GiftSection,
    SliderContainer,
    Slide,
    SlideContent,
    SlideTitle,
    SlideDesc,
    ButtonContainer,
    SlideButton,
    SlideButtonSecondary,
    SliderDots,
    Dot,
    SliderArrow,
} from './style';
import { ArrowBack, ArrowForward } from '@mui/icons-material';

const slides = [
    {
        image: '/gifttt.jpg',
        title: 'Our Dolce Fresh Gift’s',
        desc: 'We found the unique beauty and versatility of growing in the Coachella Valley of Southern California as the perfect place to set up shop. Seeing the growing market for all kinds of fruits and our signature sweet-as-Barhi dates, from Americans who want to just eat or gift delicious fruit.',
        buttonText: 'Order Now',
        buttonLink: '/shop/gifts',
        secondaryButtonText: 'View our products',
        secondaryButtonLink: '/products',
    },
    {
        image: '/gift-mangos.jpg',
        title: 'Holiday Gift Baskets',
        desc: 'Celebrate the season with our festive gift baskets, perfect for sharing joy with family and friends.',
        buttonText: 'Order Now',
        buttonLink: '/gifts/holiday',
        secondaryButtonText: 'View our products',
        secondaryButtonLink: '/products',
    },
    {
        image: '/appleslide.jpg',
        title: 'Customizable Gift Boxes',
        desc: 'Create a personalized gift box with your choice of fresh fruits and artisan snacks.',
        buttonText: 'Order Now',
        buttonLink: '/gifts/customize',
        secondaryButtonText: 'View our products',
        secondaryButtonLink: '/products',
    },
];

const GiftSectionComponent = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const totalSlides = slides.length;

    // Auto-slide every 5 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
        }, 5000);
        return () => clearInterval(interval);
    }, [totalSlides]);

    const handleNext = () => {
        setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
    };

    const handlePrev = () => {
        setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
    };

    const goToSlide = (index: number) => {
        setCurrentSlide(index);
    };

    return (
        <GiftSection>
            <SliderContainer>
                {slides.map((slide, index) => (
                    <Slide
                        key={index}
                        active={index === currentSlide}
                        style={{ backgroundImage: `url(${slide.image})`, zIndex: index === currentSlide ? 2 : 1 }}
                    >
                        <SlideContent>
                            <SlideTitle>{slide.title}</SlideTitle>
                            <SlideDesc>{slide.desc}</SlideDesc>
                            <ButtonContainer>
                                <Shopbtn text={slide.buttonText} href={slide.buttonLink}></Shopbtn>
                                <Shopbtn text={slide.secondaryButtonText} href={slide.secondaryButtonLink}></Shopbtn>
                                {/* <SlideButton href={slide.buttonLink}>{slide.buttonText}</SlideButton> */}
                                {/* <SlideButtonSecondary href={slide.secondaryButtonLink}>
                                    {slide.secondaryButtonText}
                                </SlideButtonSecondary> */}
                            </ButtonContainer>
                        </SlideContent>
                    </Slide>
                ))}
                {/* <SliderArrow direction="left" onClick={handlePrev}>
                    <ArrowBack />
                </SliderArrow>
                <SliderArrow direction="right" onClick={handleNext}>
                    <ArrowForward />
                </SliderArrow> */}
                <SliderDots>
                    {slides.map((_, index) => (
                        <Dot
                            key={index}
                            active={index === currentSlide}
                            onClick={() => goToSlide(index)}
                        />
                    ))}
                </SliderDots>
            </SliderContainer>
        </GiftSection>
    );
};

export default GiftSectionComponent;