import { addToFavorite } from "@/lib/actions";

const ProductItem = ({ products }) => {

    // Only plain objects can be passed to Client Components from Server Components. Objects with toJSON methods are not supported. Convert it manually to a simple value before passing it to props
    const data = JSON.parse(JSON.stringify(products));

    return (
        <>
            {data.map(product => (
                <form 
                    key={product._id} 
                    action={addToFavorite} 
                    style={{ display: 'flex', alignItems: 'center', gap: '10px' }}
                >
                    <li style={{ display: 'flex', gap: '10px', margin: '10px' }}>
                        <input type="hidden" name="id" value={product._id} />
                        <p>{product.title}</p>
                        <p>{product.price}$</p>
                    </li>
                    <button style={{ height: '20px', cursor: 'pointer' }}>Add to favorite</button>
                </form>
            ))}
        </>
    );
};

export default ProductItem;