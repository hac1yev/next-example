import { getServerSession } from "next-auth";
import { connectToDB } from "./connectToDB";
import { Product, User } from "./models";

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

export const fetchFavProducts = async () => {
    const session = await getServerSession();

    try {
        await connectToDB();
        const user = User.findOne({ username: session.user.email });

        const populate = await user.populate('favorites');

        return populate;
    } catch (error) {
        console.log(error);
        throw new Error('Failed to fetch products!');
    }
};
