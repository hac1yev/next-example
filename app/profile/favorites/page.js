import { fetchFavProducts } from "@/lib/data";

const FavoritesPage = async () => {
    const favProducts = await fetchFavProducts();

    return (
        <>
            {favProducts.favorites.map(favorite => (
                <div key={favorite._id}>
                    <h4>Product name: {favorite.title}</h4>
                    <p>Product price: {favorite.price}$</p>
                </div>
            ))}
        </>
    );
};

export default FavoritesPage;