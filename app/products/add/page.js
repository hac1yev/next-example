import { addProduct } from "@/lib/actions";

const ProductAdd = () => {
    return (
        <form action={addProduct}>
            <input type="text" name="title" placeholder="Title" required />
            <input type="number" name="price" placeholder="Price" required />
            <button>Add Product</button>
        </form>
    );
};

export default ProductAdd;