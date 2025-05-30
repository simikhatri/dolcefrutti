'use client';
import Link from 'next/link';
import Image from 'next/image';
import {
    Twitter,
    LinkedIn,
    Instagram,
    Facebook,
    Phone,
    Email,
    WhatsApp,
    Fax,
} from '@mui/icons-material';
import {
    FooterContainer,
    FooterContent,
    FooterColumn,
    FooterLogo,
    FooterText,
    FooterContactItem,
    FooterSocial,
    FooterSocialLink,
    FooterTitle,
    FooterList,
    FooterListItem,
    FooterListLink,
    FooterPaymentLink,
    FooterBottom,
    FooterBottomText,
    FooterBottomLink,
} from './style';

const Footer = () => {
    const products = [
        'Dates',
        'Citrus',
        'Mangoes',
        'Figs',
        'Pomegranates',
        'Plums',
        'Bartlett Pears',
        'Elberta Peaches',
        'Gravenstein Apples',
        'Blenheim Apricots',
        'Nonpareil Almonds',
        'Thompson Seedless Grapes',
    ];

    const companyLinks = [
        { href: '/about', text: 'About' },
        { href: '/shop', text: 'Shop' },
        { href: '/gifts', text: 'Gifts' },
        { href: '/blog', text: 'Blogs' },
        { href: '/testimonials', text: 'Testimonials' },
        { href: '/contact', text: 'Contact us' },
    ];

    const paymentMethods = [
        { imgSrc: '/images/credit-card.png', alt: 'Credit/Debit Card', text: 'Credit/Debit Card' },
        { imgSrc: '/images/paypal.png', alt: 'PayPal', text: 'PayPal' },
        { imgSrc: '/images/google-pay.png', alt: 'Google Pay', text: 'Google Pay' },
        { imgSrc: '/images/apple.png', alt: 'Apple Pay', text: 'Apple Pay' },
        { imgSrc: '/images/zelle_icon.png', alt: 'Zelle', text: 'Zelle: shop@dolcefrutti.com' },
        { imgSrc: '/images/finance.png', alt: 'Venmo', text: 'Venmo: shop@dolcefrutti.com' },
    ];

    const customerCare = [
        { href: 'mailto:support@dolcefrutti.com', text: 'support@dolcefrutti.com', icon: <Email fontSize="small" /> },
        { href: 'mailto:info@dolcefrutti.com', text: 'info@dolcefrutti.com', icon: <Email fontSize="small" /> },
        { href: 'mailto:shop@dolcefrutti.com', text: 'shop@dolcefrutti.com', icon: <Email fontSize="small" /> },
        { href: 'tel:7607867786', text: '760.786.7786', icon: <Phone fontSize="small" /> },
        { href: 'tel:7607867786', text: '760.786.7786', icon: <WhatsApp fontSize="small" /> },
        { href: 'tel:7607867786', text: '760.786.7786', icon: <Fax fontSize="small" /> },
    ];

    const socialLinks = [
        { href: 'https://twitter.com', icon: <Twitter /> },
        { href: 'https://linkedin.com', icon: <LinkedIn /> },
        { href: 'https://instagram.com', icon: <Instagram /> },
        { href: 'https://facebook.com', icon: <Facebook /> },
    ];

    return (
        <FooterContainer>
            <FooterContent>
                {/* First Column: Logo & Info */}
                <FooterColumn className="first-column">
                    <FooterLogo>
                        <Link href="/">
                            <Image
                                src="/images/footer-logo.png"
                                alt="Dolce Frutti"
                                width={150}
                                height={100}
                                layout="responsive"
                                objectFit="contain"
                                sizes="(max-width: 768px) 50vw, 150px"
                            />
                        </Link>
                    </FooterLogo>
                    <FooterText>
                        Lorem ipsum is simply dummy text of the and typesetLorem ipsum is
                    </FooterText>
                    <div>
                        <FooterContactItem>
                            Dolce Frutti LLC 72-811 Hwy 111 Ste 1052 Palm Desert CA 92260
                        </FooterContactItem>
                        <FooterContactItem>
                            <Phone fontSize="small" className="footer-contact-icon" />
                            760.786.7786
                        </FooterContactItem>
                    </div>
                    <FooterSocial>
                        {socialLinks.map((link, index) => (
                            <FooterSocialLink key={index} href={link.href}>
                                {link.icon}
                            </FooterSocialLink>
                        ))}
                    </FooterSocial>
                </FooterColumn>

                {/* Second Column: Product */}
                <FooterColumn>
                    <FooterTitle>Product</FooterTitle>
                    <FooterList>
                        {products.map((product, index) => (
                            <FooterListItem key={index}>
                                <FooterListLink href={`/products/${product.toLowerCase().replace(/ /g, '-')}`}>
                                    {product}
                                </FooterListLink>
                            </FooterListItem>
                        ))}
                    </FooterList>
                </FooterColumn>

                {/* Third Column: Company */}
                <FooterColumn className="third-column">
                    <FooterTitle>Company</FooterTitle>
                    <FooterList>
                        {companyLinks.map((link, index) => (
                            <FooterListItem key={index}>
                                <FooterListLink href={link.href}>{link.text}</FooterListLink>
                            </FooterListItem>
                        ))}
                    </FooterList>
                </FooterColumn>

                {/* Fourth Column: Payment */}
                <FooterColumn>
                    <FooterTitle>Payment</FooterTitle>
                    <FooterList>
                        {paymentMethods.map((method, index) => (
                            <FooterListItem key={index}>
                                <FooterPaymentLink href="">
                                    <img src={method.imgSrc} alt={method.alt} />
                                    {method.text}
                                </FooterPaymentLink>
                            </FooterListItem>
                        ))}
                    </FooterList>
                </FooterColumn>

                {/* Fifth Column: Customer Care */}
                <FooterColumn>
                    <FooterTitle>Customer Care</FooterTitle>
                    <FooterList>
                        {customerCare.map((care, index) => (
                            <FooterListItem key={index}>
                                <FooterListLink href={care.href}>
                                    {care.icon}
                                    {care.text}
                                </FooterListLink>
                            </FooterListItem>
                        ))}
                    </FooterList>
                </FooterColumn>
            </FooterContent>

            {/* Bottom Section */}
            <FooterBottom>
                <FooterBottomText>
                    <FooterBottomLink href="/return-refund-policy">
                        Return & Refund Policy
                    </FooterBottomLink>{' '}
                    |{' '}
                    <FooterBottomLink href="/privacy-policy">
                        Privacy Policy
                    </FooterBottomLink>{' '}
                    | All Copy Right Reserved © 2025 {' '}
                    <FooterBottomLink href="/">
                        Dolce Frutti LLC
                    </FooterBottomLink>{' '}

                </FooterBottomText>
            </FooterBottom>
        </FooterContainer>
    );
};

export default Footer;