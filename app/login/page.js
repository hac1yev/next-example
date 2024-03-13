import Link from "next/link";

const Login = () => {
    return (
        <form>
            <input type="text" name="username" placeholder="Username" required />
            <input type="password" name="password" placeholder="Password" required />
            <button>Login</button>
            <Link href="/signup">Sign Up</Link>
        </form>
    );
};

export default Login;