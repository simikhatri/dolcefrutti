'use client';
import Link from 'next/link';
import Image from 'next/image';
import './_.scss';
import {
    Twitter,
    LinkedIn,
    Instagram,
    Facebook,
    LocationOn,
    Phone,
    Email,
    WhatsApp,
    Fax
} from '@mui/icons-material';

const Footer = () => {
    // Arrays for repeated sections
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
        { imgSrc: '/credit-card.png', alt: 'Credit/Debit Card', text: 'Credit/Debit Card' },
        { imgSrc: '/paypal.png', alt: 'PayPal', text: 'PayPal' },
        { imgSrc: '/google-pay.png', alt: 'Google Pay', text: 'Google Pay' },
        { imgSrc: '/apple.png', alt: 'Apple Pay', text: 'Apple Pay' },
        { imgSrc: '/zelle_icon.png', alt: 'Zelle', text: 'Zelle: shop@dolcefrutti.com' },
        { imgSrc: '/finance.png', alt: 'Venmo', text: 'Venmo: shop@dolcefrutti.com' },
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
        <footer className="footer">
            <div className="footer_content">
                {/* First Column: Logo & Info */}
                <div className="footer_content_column">
                    <div className="footer_content_column_logo">
                        <Link href="/">
                            <Image
                                src="/footer-logo.png"
                                alt="Dolce Frutti"
                                width={150}
                                height={100}
                                layout="responsive"
                                objectFit="contain"
                                sizes="(max-width: 768px) 50vw, 150px"
                            />
                        </Link>
                    </div>
                    <p className="footer_content_column_text">
                        Lorem ipsum is simply dummy text of the and typesetLorem ipsum is
                    </p>
                    <div className="footer_content_column_contact">
                        <p className="footer_content_column_contact_item">
                            {/* <LocationOnIcon className="footer_content_column_contact_icon" /> */}
                            Dolce Frutti LLC 72-811 Hwy 111 Ste 1052 Palm Desert CA 92260
                        </p>
                        <p className="footer_content_column_contact_item">
                            <Phone fontSize="small" className="footer_content_column_contact_icon" />
                            760.786.7786
                        </p>
                    </div>
                    <div className="footer_content_column_social">
                        {socialLinks.map((link, index) => (
                            <Link key={index} href={link.href} className="footer_content_column_social_link">
                                {link.icon}
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Second Column: Product */}
                <div className="footer_content_column">
                    <h3 className="footer_content_column_title">Product</h3>
                    <ul className="footer_content_column_list">
                        {products.map((product, index) => (
                            <li key={index}>
                                <Link href={`/products/${product.toLowerCase().replace(/ /g, '-')}`} className="footer_content_column_list_link">
                                    {product}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Third Column: Company */}
                <div className="footer_content_column">
                    <h3 className="footer_content_column_title">Company</h3>
                    <ul className="footer_content_column_list">
                        {companyLinks.map((link, index) => (
                            <li key={index}>
                                <Link href={link.href} className="footer_content_column_list_link">
                                    {link.text}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Fourth Column: Payment */}
                <div className="footer_content_column">
                    <h3 className="footer_content_column_title">Payment</h3>
                    <ul className="footer_content_column_payment">
                        {paymentMethods.map((method, index) => (
                            <li key={index} className="footer_content_column_payment_item">
                                <Link href={""} className="footer_content_column_payment_item_link">
                                    <img src={method.imgSrc} alt={method.alt} />
                                    {method.text}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Fifth Column: Customer Care */}
                <div className="footer_content_column">
                    <h3 className="footer_content_column_title">Customer Care</h3>
                    <ul className="footer_content_column_list">
                        {customerCare.map((care, index) => (
                            <li key={index}>
                                <Link href={care.href} className="footer_content_column_list_link">
                                    {care.icon}
                                    {care.text}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Bottom Section */}
            <div className="footer_bottom">
                <p className="footer_bottom_text">
                    <Link href="/return-refund-policy" className="footer_bottom_link">
                        Return & Refund Policy
                    </Link>{' '}
                    |{' '}
                    <Link href="/privacy-policy" className="footer_bottom_link">
                        Privacy Policy
                    </Link>{' '}
                    | All Copy Right Reserved © 2025 Dolce Frutti LLC
                </p>
            </div>
        </footer>
    );
};

export default Footer;