import type { ICarts } from '../../../redux/state-slicers/2-e-commerce-cart/e-commerce-cart.type';

const api = "https://fakestoreapi.com/products";

export const fetchProducts = async (): Promise<ICarts[] | undefined> => {
    try {
        const response = await fetch(api);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const products: ICarts[] = await response.json();
        return products;
    } catch (error) {
        console.error("Failed to fetch products:", error);
        return undefined;
    }
};
