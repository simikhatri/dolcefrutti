'use client';

import { Grid } from '@mui/material';
import Image from 'next/image';
import Shopbtn from '../ui/shopbtn';
import { Styledh1, StyledBox, Styledh3 } from '../ui/Common';
import {
    CardPrimary,
    PrimaryCardContent,
    PrimaryCardContentTitle,
    PrimaryCardContentPrice,
    PrimaryCardContentShipping,
    PrimaryCardImage,
    FeaturedCardSecondary,
    FeaturedCardThird,
    FeaturedCardSec,
    FeaturedCardSecContent,
    FeaturedCardSecTitle,
    FeaturedCardSecPrice,
    FeaturedCardSecShipping,
    FeaturedCardSecImage,
    FeaturedColumn,
} from './style';

const FeaturedProduct = () => {
    return (
        <StyledBox>
            <Grid container spacing={2}>
                <Grid size={{ xs: 12, md: 6 }}>
                    <CardPrimary>
                        <PrimaryCardContent>
                            <PrimaryCardContentTitle>Yellow Barhi Dates</PrimaryCardContentTitle>
                            <PrimaryCardContentPrice>From <strong>$23.02</strong></PrimaryCardContentPrice>
                            <PrimaryCardContentShipping>Free Shipping</PrimaryCardContentShipping>
                            <Shopbtn text="Order Now" href='' />
                        </PrimaryCardContent>
                        <PrimaryCardImage>
                            <Image src="/datesbg.png" alt="Yellow Barhi Dates" width={300} height={200} />
                        </PrimaryCardImage>
                    </CardPrimary>
                </Grid>

                <Grid size={{ xs: 12, md: 6 }}>
                    <FeaturedColumn>
                        <Grid size={{ xs: 12 }}>
                            <FeaturedCardSecondary>
                                <FeaturedCardSec>
                                    <FeaturedCardSecImage>
                                        <Image src="/Elberta-Peaches.png" alt="Minneola Tangelos" width={236} height={218} />
                                    </FeaturedCardSecImage>
                                    <FeaturedCardSecContent>
                                        <FeaturedCardSecTitle>Minneola Tangelos</FeaturedCardSecTitle>
                                        <FeaturedCardSecPrice>From <strong>$82.67</strong></FeaturedCardSecPrice>
                                        <FeaturedCardSecShipping>Free Shipping</FeaturedCardSecShipping>
                                        <Shopbtn text="Order Now" href='' />
                                    </FeaturedCardSecContent>
                                </FeaturedCardSec>
                            </FeaturedCardSecondary>
                        </Grid>

                        <Grid size={{ xs: 12 }}>
                            <FeaturedCardThird>
                                <FeaturedCardSec>
                                    <FeaturedCardSecContent>
                                        <FeaturedCardSecTitle>Bartlett Pears</FeaturedCardSecTitle>
                                        <FeaturedCardSecPrice>From <strong>$29.99</strong></FeaturedCardSecPrice>
                                        <FeaturedCardSecShipping>Free Shipping</FeaturedCardSecShipping>
                                        <Shopbtn text="Order Now" href='' />
                                    </FeaturedCardSecContent>
                                    <FeaturedCardSecImage>
                                        <Image src="/Bartlett-Pears.png" alt="Bartlett Pears" width={236} height={218} />
                                    </FeaturedCardSecImage>
                                </FeaturedCardSec>
                            </FeaturedCardThird>
                        </Grid>
                    </FeaturedColumn>
                </Grid>
            </Grid>
        </StyledBox>
    );
};

export default FeaturedProduct;