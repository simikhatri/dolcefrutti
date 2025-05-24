'use client';

import { Box, Grid } from '@mui/material';
import Image from 'next/image';
import './_.scss';
import Shopbtn from '../ui/shopbtn';

const FeaturedProduct = () => {
    return (
        <Box className="featured">
            <Grid container spacing={2}>
                <Grid size={{ xs: 12, md: 6 }}>
                    <Box className="featured_card featured_card--primary">
                        <Box className="featured_card_content">
                            <h1 className="featured_card_content_title">Yellow Barhi Dates</h1>
                            <h3 className="featured_card_content_price">From <strong>$23.02</strong></h3>
                            <p className="featured_card_content_shipping">Free Shipping</p>
                            <Shopbtn text="Order Now" href='' />
                        </Box>
                        <Box className="featured_card_image">
                            <Image src="/datesbg.png" alt="Yellow Barhi Dates" width={300} height={200} />
                        </Box>
                    </Box>
                </Grid>

                <Grid size={{ xs: 12, md: 6 }}>
                    <Grid container direction="column" spacing={2}>
                        <Grid size={{ xs: 12 }}>
                            <Box className="featured_card featured_card--secondary">
                                <Box className="featured_card_sec">
                                    <Box className="featured_card_sec_image">
                                        <Image src="/Elberta-Peaches.png" alt="Minneola Tangelos" width={236} height={224} />
                                    </Box>
                                    <Box className="featured_card_sec_content">
                                        <h1 className="featured_card_sec_content_title">Minneola Tangelos</h1>
                                        <h2 className="featured_card_sec_content_price">From <strong>$82.67</strong></h2>
                                        <p className="featured_card_sec_content_shipping">Free Shipping</p>
                                        <Shopbtn text="Order Now" href='' />
                                    </Box>
                                </Box>
                            </Box>
                        </Grid>

                        <Grid size={{ xs: 12 }}>
                            <Box className="featured_card featured_card--third">
                                <Box className="featured_card_sec">
                                    <Box className="featured_card_sec_content">
                                        <h1 className="featured_card_sec_content_title">Bartlett Pears</h1>
                                        <h2 className="featured_card_sec_content_price">From <strong>$29.99</strong></h2>
                                        <p className="featured_card_sec_content_shipping">Free Shipping</p>
                                        <Shopbtn text="Order Now" href='' />
                                    </Box>
                                    <Box className="featured_card_sec_image">
                                        <Image src="/Bartlett-Pears.png" alt="Bartlett Pears" width={236} height={224} />
                                    </Box>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    );
};

export default FeaturedProduct;