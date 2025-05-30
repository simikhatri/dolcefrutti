'use client';

import { Grid } from '@mui/material';
import Image from 'next/image';
import {
    MainBox,
    LeftCard,
    LeftCardContent,
    LeftCardTitle,
    LeftCardPrice,
    LeftCardShipping,
    LeftCardImg,
    TopRightCard,
    BottomRightCard,
    RightCardContent,
    RightCardTitle,
    RightCardPrice,
    RightCardShipping,
    RightCardImg,
} from './style';
import Shopbtn from '../ui/shopbtn';

const FeaturedProduct = () => {
    return (
        <MainBox>
            <Grid container spacing={3}>
                {/* Left Column - Single Large Card */}
                <Grid size={{ xs: 12, md: 6 }}>
                    <LeftCard>
                        <LeftCardContent>
                            <LeftCardTitle variant="h2">Yellow Barhi Dates</LeftCardTitle>
                            <LeftCardPrice>
                                From <strong>$23.02</strong>
                            </LeftCardPrice>
                            <LeftCardShipping>Free Shipping</LeftCardShipping>
                            <Shopbtn text="Shop Now" href={``} />
                        </LeftCardContent>
                        <LeftCardImg>
                            <Image
                                src="/images/datesbg.png"
                                alt="Yellow Barhi Dates"
                                width={400}
                                height={250}
                            />
                        </LeftCardImg>
                    </LeftCard>
                </Grid>

                {/* Right Column - Two Smaller Cards */}
                <Grid size={{ xs: 12, md: 6 }}>
                    <Grid container direction="column" spacing={3}>
                        {/* Top Right Card */}
                        <Grid size={{ xs: 12 }}>
                            <TopRightCard>
                                <RightCardContent>
                                    <RightCardImg>
                                        <Image
                                            src="/images/Elberta-Peaches.png"
                                            alt="Minneola Tangelos"
                                            width={236}
                                            height={210}
                                        />
                                    </RightCardImg>
                                    <div>
                                        <RightCardTitle variant="h3">Minneola Tangelos</RightCardTitle>
                                        <RightCardPrice>
                                            From <strong>$82.67</strong>
                                        </RightCardPrice>
                                        <RightCardShipping>Free Shipping</RightCardShipping>
                                        <Shopbtn text="Shop Now" href={``} />
                                    </div>
                                </RightCardContent>
                            </TopRightCard>
                        </Grid>

                        {/* Bottom Right Card */}
                        <Grid size={{ xs: 12 }}>
                            <BottomRightCard>
                                <RightCardContent>
                                    <div>
                                        <RightCardTitle variant="h3">Bartlett Pears</RightCardTitle>
                                        <RightCardPrice>
                                            From <strong>$29.99</strong>
                                        </RightCardPrice>
                                        <RightCardShipping>Free Shipping</RightCardShipping>
                                        <Shopbtn text="Shop Now" href={``} />
                                    </div>
                                    <RightCardImg>
                                        <Image
                                            src="/images/Bartlett-Pears.png"
                                            alt="Bartlett Pears"
                                            width={236}
                                            height={210}
                                        />
                                    </RightCardImg>
                                </RightCardContent>
                            </BottomRightCard>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </MainBox>
    );
};

export default FeaturedProduct;