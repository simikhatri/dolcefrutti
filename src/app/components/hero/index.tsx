'use client';
import { useEffect, useRef } from 'react';
import {
    HeroContainer,
    HeroVideoWrapper,
    HeroVideoPlayer,
    HeroContent,
    HeroSubtitle,
    HeroTitle,
    HeroButtonsWrapper,
    HeroFarmButton,
    HeroShopButton
} from './style';
import { Box } from '@mui/material';

const Hero = () => {
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.play();
        }
    }, []);

    return (
        <HeroContainer>
            <HeroVideoWrapper>
                <HeroVideoPlayer
                    ref={videoRef}
                    loop
                    muted
                    playsInline
                >
                    <source src="/images/video.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </HeroVideoPlayer>
            </HeroVideoWrapper>
            <HeroContent>
                <Box>
                    <HeroSubtitle variant="subtitle1">
                        🍏 100% Organic Fruit
                    </HeroSubtitle>
                    <HeroTitle variant="h2">
                        Our Dolce Frutti <br /> Farm Organic Product
                    </HeroTitle>
                </Box>
                <HeroButtonsWrapper>
                    <HeroFarmButton href="/">
                        Our Farm
                    </HeroFarmButton>
                    <HeroShopButton href="/">
                        Shop Now
                    </HeroShopButton>
                </HeroButtonsWrapper>
            </HeroContent>
        </HeroContainer>
    );
};

export default Hero;