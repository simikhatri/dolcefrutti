import { useState } from 'react';
import { useMediaQuery, useTheme } from '@mui/material';
import shopMenu, { Category } from './MenuData';
import {
    MegaMenuContainer,
    MegaMenuColumn,
    MegaMenuCategory,
    MegaMenuItem,
    MegaMenuImageColumn,
    MegaMenuImage,
    MegaMenuLogo,
    StyledMegaMenu,
} from './style';

const columns = [
    shopMenu.filter(category => ['Dates', 'Citrus', 'Mangos'].includes(category.category)),
    shopMenu.filter(category => ['Almonds', 'Dragon Fruits', 'Grapes', 'Figs', 'Pomegranates'].includes(category.category)),
    shopMenu.filter(category => ['Pears', 'Peaches', 'Apples', 'Apricots', 'Plums'].includes(category.category)),
    [],
];

interface MegaMenuProps {
    id: string;
    anchorEl: HTMLElement | null;
    open: boolean;
    onClose: () => void;
    anchorOrigin: {
        vertical: 'top' | 'bottom' | 'center';
        horizontal: 'left' | 'right' | 'center';
    };
    transformOrigin: {
        vertical: 'top' | 'bottom' | 'center';
        horizontal: 'left' | 'right' | 'center';
    };
}

const MegaMenu = ({ id, anchorEl, open, onClose, anchorOrigin, transformOrigin }: MegaMenuProps) => {
    const [hoveredCategory, setHoveredCategory] = useState<Category | null>(null);
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'), { noSsr: true });

    const handleCategoryHover = (category: Category) => {
        setHoveredCategory(category);
    };

    const handleCategoryLeave = () => {
        setHoveredCategory(null);
    };

    return (
        <StyledMegaMenu
            id={id}
            anchorEl={anchorEl}
            open={open}
            onClose={onClose}
            anchorOrigin={anchorOrigin}
            transformOrigin={transformOrigin}
        >
            <MegaMenuContainer onMouseLeave={onClose}>
                {/* Columns 1-3: Category items */}
                {columns.slice(0, 3).map((column, index) => (
                    <MegaMenuColumn key={index}>
                        {column.map((category) => (
                            <div
                                key={category.category}
                                onMouseEnter={() => handleCategoryHover(category)}
                                onMouseLeave={handleCategoryLeave}
                            >
                                <MegaMenuCategory>
                                    <a href={category.link}>{category.category}</a>
                                </MegaMenuCategory>
                                {category.items.map((item) => (
                                    <MegaMenuItem key={item.id}>
                                        <a href={item.link}>{item.name}</a>
                                    </MegaMenuItem>
                                ))}
                            </div>
                        ))}
                    </MegaMenuColumn>
                ))}

                {!isSmallScreen && (
                    <MegaMenuImageColumn>
                        {hoveredCategory ? (
                            <MegaMenuImage src={hoveredCategory.imageUrl} alt={hoveredCategory.category} />
                        ) : (
                            <MegaMenuLogo src="/images/loader_logo.png" alt="Dolce Frutti Logo" />
                        )}
                    </MegaMenuImageColumn>
                )}
            </MegaMenuContainer>
        </StyledMegaMenu>
    );
};

export default MegaMenu;