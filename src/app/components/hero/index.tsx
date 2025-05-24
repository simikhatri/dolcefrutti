'use client';
import { Box } from '@mui/material';
import { useEffect, useRef } from 'react';
import './_.scss';
import Link from 'next/link';

const Hero = () => {
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.play();
        }
    }, []);

    return (
        <Box component="section" className="hero">
            <Box className="hero_video">
                <video
                    ref={videoRef}
                    loop
                    muted
                    playsInline
                    className="hero_video_player"
                >
                    <source src="/video.mp4" type="video/mp4" /> {/* Replace with your video path */}
                    Your browser does not support the video tag.
                </video>
            </Box>
            <Box className="hero_content">
                <Box className="hero_content_text">
                    <p className="hero_content_text_subtitle">
                        🍏 100% Organic Fruit
                    </p>
                    <h2 className="hero_content_text_title">
                        Our Dolce Frutti <br />  Farm Organic Product
                    </h2>
                </Box>
                <Box className="hero_content_btns">
                    <Link href={""} className="hero_content_btns_farm">
                        Our Farm
                    </Link>
                    <Link href={""} className="hero_content_btns_shop">
                        Shop Now
                    </Link>
                </Box>
                {/* <Box className="hero_logo">
          <Image
            src="/dolce-frutti-badge.png" // Replace with your logo image path
            alt="Dolce Frutti"
            width={100}
            height={100}
            objectFit="contain"
          />
        </Box> */}
            </Box>
        </Box>
    );
};

export default Hero;