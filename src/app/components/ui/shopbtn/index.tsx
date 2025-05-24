import React from 'react';
import { useRouter } from 'next/navigation';
import { Styledbutton } from '../Common';

interface ShopBtnProps {
    text: string;
    href?: string;
    onClick?: () => void;
    type?: 'button' | 'submit' | 'reset';
}

const Shopbtn: React.FC<ShopBtnProps> = ({ text, href, onClick, type = 'button' }) => {
    const router = useRouter();

    const handleClick = () => {
        if (onClick) onClick();
        if (href) router.push(href);
    };

    return (
        <Styledbutton type={type} onClick={handleClick}>
            {text}
        </Styledbutton>
    );
};

export default Shopbtn;
