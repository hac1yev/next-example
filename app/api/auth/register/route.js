import { NextResponse } from "next/server";
import { hash } from 'bcrypt';
import { connectToDB } from "@/lib/connectToDB";
import { User } from "@/lib/models";

export async function POST(request) {
    try {
        const { username, password } = await request.json();
        console.log({ username, password });

        const hashedPassword = await hash(password, 10);

        await connectToDB();
        const newUser = new User({ username, password: hashedPassword });

        await newUser.save();
    } catch (error) {
        console.log(error);
    }

    return NextResponse.json({ message: 'success' });
}