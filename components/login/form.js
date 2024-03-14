"use client"

import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Form = () => {
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);

        const response = await signIn('credentials', {
            username: formData.get("username"),
            password: formData.get("password"),
            redirect: false
        });
        
        if(!response?.error) {
            router.push("/");
            router.refresh();
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="username" placeholder="Username" required />
            <input type="password" name="password" placeholder="Password" required />
            <button>Login</button>
            <Link href="/signup">Sign Up</Link>
        </form>
    );
};

export default Form;