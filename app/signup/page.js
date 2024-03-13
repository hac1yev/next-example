import { signUpHandler } from "@/lib/actions";

const SignUpPage = () => {
    return (
        <form action={signUpHandler}>
            <input type="text" name="username" placeholder="Username" required />
            <input type="password" name="password" placeholder="Password" required />
            <button>Register</button>
        </form>
    );
};

export default SignUpPage;