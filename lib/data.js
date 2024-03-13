import { connectToDB } from "./connectToDB";
import { Product } from "./models";

export const fetchProducts = async () => {
    try {
        await connectToDB();
        const products = await Product.find();
        
        return products;
    } catch (error) {
        console.log(error);
        throw new Error('Failed to fetch products!');
    }
};