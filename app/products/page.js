import { fetchProducts } from "@/lib/data";
import Link from "next/link";

const ProductsPage = async () => {
    const products = await fetchProducts();

    return (
        <ul>
            {products.map(product => (
                <li key={product._id} style={{ display: 'flex', gap: '10px', margin: '10px' }}>
                    <input type="checkbox" />
                    <p>{product.price}</p>
                    <p>{product.title}</p>
                </li>
            ))}
            <Link style={{ fontSize: '18px', textDecoration: 'underline' }} href="/products/add">Add Product</Link>
        </ul>
    );
};

export default ProductsPage;