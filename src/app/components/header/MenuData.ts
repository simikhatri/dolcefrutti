export interface Item {
    name: string;
    id: number;
    link: string;
}

export interface Category {
    category: string;
    imageUrl: string;
    link: string;
    items: Item[];
}


const originalShopMenu = [
    {
        category: "Dates",
        imageUrl: "/images/dates-shop.jpg",
        items: [
            { name: "Barhi Dates (Jan-Mar)", id: 1 },
            { name: "Medjool Dates (Jan-Mar)", id: 6 },
            { name: "Yellow Barhi Dates (May-Jul)", id: 4 },
        ],
    },
    {
        category: "Citrus",
        imageUrl: "/images/orange-fruit-collage.webp",
        items: [
            { name: "Marsh Ruby Blush Grapefruit (Jan-Mar)", id: 7 },
            { name: "Minneola Tangelos (Jan-Apr)", id: 2 },
            { name: "Temple Oranges (Jan-Mar)", id: 3 },
        ],
    },
    {
        category: "Mangos",
        imageUrl: "/images/mango-fruit-collage.jpg",
        items: [
            { name: "Desert Ruby Mangos (May-Jun)", id: 9 },
            { name: "Golden Lady Mangos (May-Jul)", id: 5 },
            { name: "Keitt Mangos (Jun-Sep)", id: 10 },
            { name: "Valencia Pride Mangos (May-Aug)", id: 8 },
        ],
    },
    {
        category: "Pears",
        imageUrl: "/images/Bartlett-Pears.jpg",
        items: [{ name: "Bartlett Pears", id: 18 }],
    },
    {
        category: "Almonds",
        imageUrl: "/images/Nonpareil-Almonds.jpg",
        items: [{ name: "Nonpareil Almonds", id: 24 }],
    },
    {
        category: "Dragon Fruits",
        imageUrl: "/images/Yellow-Dragons-Fruits.jpg",
        items: [
            { name: "Yellow Dragon Fruits", id: 28 },
            { name: "Red Dragon Fruits", id: 29 },
        ],
    },
    {
        category: "Grapes",
        imageUrl: "/images/Thompson-Grapes.jpg",
        items: [{ name: "Thompson Seedless Grapes", id: 15 }],
    },
    {
        category: "Figs",
        imageUrl: "/images/figs.jpg",
        items: [{ name: "Violette de Bordeaux Figs (Apr-Jul)", id: 12 }],
    },
    {
        category: "Pomegranates",
        imageUrl: "/images/pomegranate.webp",
        items: [{ name: "Purple Heart Pomegranate (Jun-Sep)", id: 11 }],
    },
    {
        category: "Peaches",
        imageUrl: "/images/Elberta-Peaches.jpg",
        items: [{ name: "Elberta Peaches", id: 19 }],
    },
    {
        category: "Apples",
        imageUrl: "/images/Gravenstein-Apples.jpg",
        items: [{ name: "Gravenstein Apples", id: 17 }],
    },
    {
        category: "Apricots",
        imageUrl: "/images/Blenheim-Apricots.jpg",
        items: [{ name: "Blenheim Apricots", id: 23 }],
    },
    {
        category: "Plums",
        imageUrl: "/images/Santa-Rosa-Plums.jpg",
        items: [
            { name: "Santa Rosa Plums", id: 16 },
            { name: "Mirabelle Sour Plums", id: 21 },
        ],
    },
];

// Helper to generate URL-friendly slugs
const generateLink = (text: string) =>
    `/${text.toLowerCase().replace(/\s+/g, "-").replace(/[()]/g, "").replace(/-+/g, "-")}`;

const shopMenu: Category[] = originalShopMenu.map((category) => ({
    ...category,
    link: generateLink(category.category),
    items: category.items.map((item) => ({
        ...item,
        link: generateLink(item.name),
    })),
}));

export default shopMenu;
