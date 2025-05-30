'use client';

import { useRef, useState, useEffect } from 'react';
import { ArrowForward, ArrowBack } from '@mui/icons-material';
import { Styledh1, StyledBox } from '../ui/Common';
import {
  Header,
  Controls,
  ControlsBtn,
  ProgressBar,
  ProgressLine,
  ProgressLineBar,
  Slider,
  SliderCard,
  SliderCardLink,
  SliderCardImage,
  SliderCardName,
} from './style';

const products = [
  { id: 1, name: 'Gravenstein Apples', price: '$2.99', image: '/images/Gravenstein-Apples.jpg' },
  { id: 2, name: 'Bartlett Pears', price: '$3.49', image: '/images/bartlett-pears.jpg' },
  { id: 3, name: 'Organic Figs', price: '$4.99', image: '/images/figs.jpg' },
  { id: 4, name: 'Thompson Grapes', price: '$3.99', image: '/images/Thompson-Grapes.jpg' },
  { id: 5, name: 'Plums', price: '$2.99', image: '/images/plum.jpg' },
  { id: 6, name: 'Organic Oranges', price: '$3.49', image: '/images/orange-fruit-collage.webp' },
  { id: 7, name: 'Nonpareil Almonds', price: '$4.99', image: '/images/Nonpareil-Almonds.jpg' },
  { id: 8, name: 'Yellow Barhi', price: '$3.99', image: '/images/dates.jpg' },
  { id: 9, name: 'Organic Oranges', price: '$3.49', image: '/images/orange-fruit-collage.webp' },
  { id: 10, name: 'Nonpareil Almonds', price: '$4.99', image: '/images/Nonpareil-Almonds.jpg' },
];

const BestSeller = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [cardWidth, setCardWidth] = useState(0);
  const cardsPerView = 5;
  const totalSlides = products.length - cardsPerView + 1;

  useEffect(() => {
    if (sliderRef.current && sliderRef.current.firstChild) {
      const firstCard = sliderRef.current.firstChild as HTMLElement;
      setCardWidth(firstCard.offsetWidth + 16);
    }
  }, []);

  const handleNext = () => {
    if (currentSlide < totalSlides - 1) {
      setCurrentSlide(currentSlide + 1);
      if (sliderRef.current) {
        sliderRef.current.scrollBy({ left: cardWidth, behavior: 'smooth' });
      }
    }
  };

  const handlePrev = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
      if (sliderRef.current) {
        sliderRef.current.scrollBy({ left: -cardWidth, behavior: 'smooth' });
      }
    }
  };

  return (
    <StyledBox>
      <Header>
        <Styledh1>
          Best Seller
        </Styledh1>
        <Controls >
          <ControlsBtn onClick={handlePrev} disabled={currentSlide === 0}>
            <ArrowBack />
          </ControlsBtn>
          <ControlsBtn onClick={handleNext} disabled={currentSlide === totalSlides - 1}>
            <ArrowForward />
          </ControlsBtn>
        </Controls>
      </Header>
      <ProgressBar>
        <ProgressLine>
          <ProgressLineBar
            sx={{ width: `${((currentSlide + 1) / totalSlides) * 100}%` }}
          />
        </ProgressLine>
      </ProgressBar>
      <Slider ref={sliderRef} >
        {products.map((product) => (
          <SliderCard key={product.id} >
            <SliderCardLink href={`/product/${product.id}`}>
              <SliderCardImage>
                <img src={product.image} alt={product.name} />
              </SliderCardImage>
              <SliderCardName>
                {product.name}
              </SliderCardName>
            </SliderCardLink>
          </SliderCard>
        ))}
      </Slider>
    </StyledBox>
  );
};

export default BestSeller;