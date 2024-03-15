import ProductItem from "@/components/products/product-item";
import { fetchProducts } from "@/lib/data";
import Link from "next/link";

const ProductsPage = async () => {
    const products = await fetchProducts();

    return (
        <ul style={{ display: 'flex', gap: '40px', margin: '20px' }}>
            <Link style={{ fontSize: '18px', textDecoration: 'underline' }} href="/products/add">Add Product</Link>
            <div style={{ display: 'flex', flexDirection: 'column', flexWrap: 'wrap', gap: '10px', height: '200px' }}>
                <ProductItem products={products} />
            </div> 
        </ul>
    );
};

export default ProductsPage;