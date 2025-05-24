'use client';

import React, { useState } from 'react';
import StarIcon from '@mui/icons-material/Star';
import { products } from './products';
import { Styledh1, StyledBox, Styledh3 } from '../ui/Common';
import Shopbtn from '../ui/shopbtn';
import {
    ProductsTab,
    StyledTabs,
    StyledTab,
    ProductsGrid,
    ProductCard,
    ProductCardWrapper,
    StyledBadge,
    ProductCardImage,
    ProductCardDetails,
    ProductCardStars,
    ProductCardPrice,
    StyledLink
} from './style';

const categories = [
    'All',
    'Dates',
    'Citrus',
    'Mangoes',
    'Pomegranates',
    'Figs',
    'Plums',
    'Apples',
    'Grapes',
    'Peaches',
    'Apricots',
    'Almonds',
    'Pears',
];

const ProductsSection = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');

    const filteredProducts = selectedCategory === 'All'
        ? products
        : products.filter((p) => p.category === selectedCategory);

    return (
        <StyledBox>
            <Styledh1>Our Products</Styledh1>

            <ProductsTab>
                <StyledTabs
                    value={selectedCategory}
                    onChange={(e, val) => setSelectedCategory(val)}
                    variant="scrollable"
                    scrollButtons="auto"
                    className="products_tabs_container"
                >
                    {categories.map((cat) => (
                        <StyledTab key={cat} label={cat} value={cat} />
                    ))}
                </StyledTabs>
            </ProductsTab>

            <ProductsGrid container spacing={3}>
                {filteredProducts.slice(0, 8).map((product) => (
                    <ProductsGrid size={{ xs: 12, sm: 6, md: 3 }} key={product.id}>
                        <StyledLink href={`/product/${product.id}`}>
                            <ProductCard>
                                <ProductCardWrapper>
                                    <StyledBadge badgeContent="New">
                                        <ProductCardImage src={product.image} alt={product.name} width={200} height={200} />
                                    </StyledBadge>
                                </ProductCardWrapper>

                                <ProductCardDetails>
                                    <ProductCardStars>
                                        {[...Array(5)].map((_, idx) => (
                                            <StarIcon key={idx} className={idx < Math.floor(product.rating) ? 'filled' : 'empty'} fontSize="small" />
                                        ))}
                                    </ProductCardStars>
                                    <Styledh3>{product.name}</Styledh3>
                                    <ProductCardPrice>
                                        ${product.priceAfter.toFixed(2)} <span className="original">${product.priceBefore.toFixed(2)}</span>
                                    </ProductCardPrice>
                                    <Shopbtn text="Order Now" href={`/product/${product.id}`} />
                                </ProductCardDetails>
                            </ProductCard>
                        </StyledLink>
                    </ProductsGrid>
                ))}
            </ProductsGrid>
        </StyledBox>
    );
};

export default ProductsSection;