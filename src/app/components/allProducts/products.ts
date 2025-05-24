export interface Product {
    id: number;
    name: string;
    category: string;
    image: string;
    priceBefore: number;
    priceAfter: number;
    rating: number;
    new: boolean;
}

export const products: Product[] = [
    // Mangoes Category: 4 items
    { id: 1, name: "Keitt Mangoes", category: "Mangoes", image: "/mango-fruit-collage.jpg", priceBefore: 78.00, priceAfter: 85.00, rating: 4.5, new: true },

    // Citrus Category: 3 items
    { id: 5, name: "Minneola Tangelos", category: "Citrus", image: "/temple-orange.jpg", priceBefore: 65.00, priceAfter: 72.00, rating: 4.2, new: true },


    // Dates Category: 3 items
    { id: 8, name: "Yellow Barhi Dates", category: "Dates", image: "/dates.jpg", priceBefore: 70.00, priceAfter: 78.00, rating: 4.4, new: true },


    // Other Categories: Unchanged
    { id: 11, name: "Pomegranate", category: "Pomegranates", image: "/pomegranate.webp", priceBefore: 65.00, priceAfter: 72.00, rating: 4.2, new: true },
    { id: 12, name: "Figs", category: "Figs", image: "/figs.jpg", priceBefore: 60.00, priceAfter: 68.00, rating: 4.3, new: true },
    { id: 13, name: "Mirabelle Plums", category: "Plums", image: "/Mirabelle-Plums.jpg", priceBefore: 55.00, priceAfter: 62.00, rating: 4.1, new: true },
    { id: 14, name: "Apples", category: "Apples", image: "/Gravenstein-Apples.jpg", priceBefore: 78.00, priceAfter: 85.00, rating: 4.0, new: true },
    { id: 9, name: "Barhi Dates", category: "Dates", image: "/dates-shop.jpg", priceBefore: 68.00, priceAfter: 75.00, rating: 4.2, new: true },
    { id: 20, name: "Santa Rosa Plums", category: "Plums", image: "/Santa-Rosa-Plums.jpg", priceBefore: 55.00, priceAfter: 62.00, rating: 4.1, new: true },
    { id: 10, name: "Medjool Dates", category: "Dates", image: "/dates-shop.jpg", priceBefore: 80.00, priceAfter: 88.00, rating: 4.5, new: true },
    { id: 15, name: "Thompson Grapes", category: "Grapes", image: "/Thompson-Grapes.jpg", priceBefore: 70.00, priceAfter: 78.00, rating: 4.4, new: true },
    { id: 6, name: "Temple Oranges", category: "Citrus", image: "/temple-orange.jpg", priceBefore: 60.00, priceAfter: 68.00, rating: 4.3, new: true },
    { id: 7, name: "Marsh Ruby Blush Grapefruit", category: "Citrus", image: "/temple-orange.jpg", priceBefore: 55.00, priceAfter: 62.00, rating: 4.1, new: true },
    { id: 16, name: "Elberta Peaches", category: "Peaches", image: "/Elberta-Peaches.jpg", priceBefore: 75.00, priceAfter: 82.00, rating: 4.2, new: true },
    { id: 2, name: "Desert Ruby Mangoes", category: "Mangoes", image: "/mango-fruit-collage.jpg", priceBefore: 80.00, priceAfter: 88.00, rating: 4.2, new: true },
    { id: 3, name: "Valencia Pride Mangoes", category: "Mangoes", image: "/mango-fruit-collage.jpg", priceBefore: 75.00, priceAfter: 82.00, rating: 4.3, new: true },
    { id: 4, name: "Golden Lady Mangoes", category: "Mangoes", image: "/mango-fruit-collage.jpg", priceBefore: 72.00, priceAfter: 79.00, rating: 4.1, new: true },
    { id: 17, name: "Blenheim Apricots", category: "Apricots", image: "/Blenheim-Apricots.jpg", priceBefore: 68.00, priceAfter: 75.00, rating: 4.0, new: true },
    { id: 18, name: "Nonpareil Almonds", category: "Almonds", image: "/Nonpareil-Almonds.jpg", priceBefore: 80.00, priceAfter: 88.00, rating: 4.5, new: true },
    { id: 19, name: "Bartlett Pears", category: "Pears", image: "/Bartlett-Pears.jpg", priceBefore: 72.00, priceAfter: 79.00, rating: 4.3, new: true },
];