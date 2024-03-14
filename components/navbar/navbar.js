import Link from "next/link";
import { getServerSession } from "next-auth";

const Navbar = async () => {
    const session = await getServerSession();

    return (
        <div style={{ margin: '40px' }}>
            <ul style={{ display: 'flex', justifyContent: 'center', gap: '30px', listStyle: 'none', fontSize: '20px' }}>
                <li>
                    <Link href='/products'>
                        Products
                    </Link>    
                </li>
                {!session && <li>
                    <Link href="/login">
                        Login
                    </Link>
                </li>}
                {session && <li>
                    <Link href="/profile">
                        Profile
                    </Link>
                </li>}
            </ul>
        </div>
    );
};

export default Navbar;