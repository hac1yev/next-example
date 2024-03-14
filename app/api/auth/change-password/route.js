import { connectToDB } from "@/lib/connectToDB";
import { User } from "@/lib/models";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { compare } from "bcrypt";
import { hash } from "bcrypt";

export async function POST(request) {
    const session = await getServerSession();

    try {
        const { oldPassword, newPassword } = await request.json();

        await connectToDB();

        let username = await User.findOne({ username: session.user.email });

        if(!username) {
            return NextResponse.json({ message: "Can't find username!" })
        }

        const passwordIsEqual = await compare(oldPassword, username.password);


        if(!passwordIsEqual) {
            return NextResponse.json({ message: 'Invalid password!' })
        }

        if(passwordIsEqual) {
            const hashedNewPassword = await hash(newPassword, 10);
            await User.findOneAndUpdate({ username: session.user.email }, { password: hashedNewPassword });
            await username.save();
        }

        return NextResponse.json({ message: 'Password updated successfully!' });
    } catch (error) {
        return NextResponse.json({ message: error });
    }

}