'use client';
import React, { useRef, useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Rating } from '@mui/material';
import Link from 'next/link';
import {
    Wrap,
    Title,
    Card,
    ProfileWrapper,
    Profile,
    QuoteTop,
    QuoteBottom,
    Name,
    Text,
    DateText,
    SliderWrapper,
    StyledBox,
    ReadMoreButton,
} from './style';
import testimonialData from './TestimonialData';

const TestimonialSection = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 6000,
        arrows: false,
        centerMode: false,
        variableWidth: false,
        slidesPerRow: 1,
        responsive: [
            {
                breakpoint: 960,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    const [truncated, setTruncated] = useState<{ [key: number]: boolean }>({});
    const textRefs = useRef<{ [key: number]: HTMLSpanElement | null }>({});

    useEffect(() => {
        const checkTruncation = () => {
            const newTruncated: { [key: number]: boolean } = {};
            testimonialData.forEach((testimonial) => {
                const id = testimonial.id;
                const element = textRefs.current[id];
                const comment = testimonial.comment || '';
                newTruncated[id] = comment.includes('...') || (element ? element.scrollHeight > element.offsetHeight : true);
            });
            setTruncated(newTruncated);
        };

        checkTruncation();
        window.addEventListener('resize', checkTruncation);
        return () => window.removeEventListener('resize', checkTruncation);
    }, []);

    return (
        <Wrap>
            <Title variant="h2">Testimonial Data</Title>
            <SliderWrapper>
                <Slider {...settings}>
                    {testimonialData.map((item) => {
                        const hasDots = item.comment.includes('...');
                        const displayText = hasDots ? `${item.comment.split('...')[0]}...` : item.comment;

                        return (
                            <StyledBox key={item.id}>
                                <Card>
                                    <ProfileWrapper>
                                        <Profile short={item.short} />
                                    </ProfileWrapper>
                                    <QuoteTop />
                                    <Name variant="h6">{item.name}</Name>
                                    <DateText variant="body2">{item.date}</DateText>
                                    <Text
                                        className="testimonial-text"
                                        ref={(el: HTMLSpanElement | null) => {
                                            textRefs.current[item.id] = el;
                                        }}
                                    >
                                        {displayText}
                                        {truncated[item.id] && (
                                            <Link href={`/testimonials/${item.id}`} passHref>
                                                <ReadMoreButton>Read More</ReadMoreButton>
                                            </Link>
                                        )}
                                    </Text>
                                    <Rating value={5} readOnly />
                                    <QuoteBottom />
                                </Card>
                            </StyledBox>
                        );
                    })}
                </Slider>
            </SliderWrapper>
        </Wrap>
    );
};

export default TestimonialSection;