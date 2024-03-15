"use server"

import { connectToDB } from "./connectToDB";
import { hash } from "bcrypt";
import { redirect } from "next/navigation";
import { Product, User } from "./models";
import { revalidatePath } from "next/cache";
import { getServerSession } from "next-auth";

export const signUpHandler = async (formData) => {
    const { username, password } = Object.fromEntries(formData);

    const hashedPassword = await hash(password, 12);

    try {
        await connectToDB();
        const newUser = new User({ username, password: hashedPassword });

        await newUser.save();

    } catch (error) {
        throw new Error("Cant sign up!!!", error);
    }
    
    redirect('/login');
};

export const addProduct = async (formData) => {
    const { title, price } = Object.fromEntries(formData);

    console.log(formData);

    try {
        await connectToDB();
        const newProduct = new Product({ title, price });

        await newProduct.save();

    } catch (error) {
        console.log(error);
        throw new Error("Cant add product!!!");
    }

    revalidatePath("/products");
    redirect("/products");
};

export const addToFavorite = async (formData) => {
    const { id } = Object.fromEntries(formData);
    const session = await getServerSession();
  
    await connectToDB();
  
    const user = await User.findOne({ username: session.user.email })
  
    if (!user) {
      throw new Error("There is no user!")
    }
  
    const product = await Product.findById({ _id: id });
  
    if (!product) {
      throw new Error("Product not found!");
    }
  
    const isProductInFavorites = user.favorites.some((fav) => fav.equals(product._id));

    if (isProductInFavorites) {
        return;
    }

    user.favorites.push(product._id); 

    await user.save();

    revalidatePath('/profile/favorites');
};