'use client';
import React, { useRef } from 'react';
import {
    BlogSectionWrapper,
    BlogBox,
    SliderWrapper,
    BlogCard,
    BlogImage,
    BlogCardContent,
    BlogDescription,
    BlogDate,
    CardLink,
    ArrowButton
} from './style';
import Shopbtn from '../ui/shopbtn';
import { Styledh1, Styledh3 } from '../ui/Common';
import { ChevronLeft, ChevronRight, CalendarToday } from '@mui/icons-material';

const blogData = [
    {
        title: 'Coachella Valley Special Dates',
        description: 'Taste the Golden Harvest: Unveiling the Best Organic Barhi Dates California.',
        date: 'May 22, 2025',
        image: '/images/date-blog.jpg',
        link: '/blog/coachella-dates',
    },
    {
        title: 'Mangoes',
        description: "Nature's candy, a sweet and chewy delight for a wholesome treat.",
        date: 'May 22, 2025',
        image: '/images/mango-blog.jpg',
        link: '/blog/coachella-dates',
    },
    {
        title: 'Citrus',
        description: 'Bursting Jewels, A Taste Explosion Of Sweet And Tart Perfection.',
        date: 'May 02, 2025',
        image: '/images/organic-citrus.jpg',
        link: '/blog/coachella-dates',
    },
    {
        title: 'Mangoes',
        description: "Nature's candy, a sweet and chewy delight for a wholesome treat.",
        date: 'May 22, 2025',
        image: '/images/mango-blog.jpg',
        link: '/blog/coachella-dates',
    },
    {
        title: 'Citrus',
        description: 'Bursting Jewels, A Taste Explosion Of Sweet And Tart Perfection.',
        date: 'May 02, 2025',
        image: '/images/organic-citrus.jpg',
        link: '/blog/coachella-dates',
    },
];

const Blog = () => {
    const sliderRef = useRef<HTMLDivElement>(null);

    const scrollSlider = (direction: 'left' | 'right') => {
        if (sliderRef.current) {
            const { scrollLeft, clientWidth } = sliderRef.current;
            const scrollAmount = direction === 'left' ? -clientWidth : clientWidth;
            sliderRef.current.scrollTo({ left: scrollLeft + scrollAmount, behavior: 'smooth' });
        }
    };

    return (
        <BlogSectionWrapper>
            <Styledh1>Latest Blog</Styledh1>

            <BlogBox>
                <ArrowButton onClick={() => scrollSlider('left')}>
                    <ChevronLeft />
                </ArrowButton>

                <SliderWrapper ref={sliderRef}>
                    {blogData.map((blog, index) => (
                        <BlogCard key={index} style={{ animationDelay: `${index * 0.3}s` }}>
                            <CardLink href={blog.link} >
                                <BlogImage image={blog.image} title={blog.title} />
                                <BlogCardContent>
                                    <Styledh3>{blog.title}</Styledh3>
                                    <BlogDescription>{blog.description}</BlogDescription>
                                    <BlogDate>
                                        <CalendarToday fontSize="small" sx={{ color: '#e1c343' }} /> {blog.date}
                                    </BlogDate>
                                    <Shopbtn text="Read More" href={``} />
                                </BlogCardContent>
                            </CardLink>
                        </BlogCard>
                    ))}
                </SliderWrapper>

                <ArrowButton onClick={() => scrollSlider('right')}>
                    <ChevronRight />
                </ArrowButton>
            </BlogBox>
        </BlogSectionWrapper>
    );
};

export default Blog;
