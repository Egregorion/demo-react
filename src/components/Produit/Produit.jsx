export function Produit({product, addToCart}) {
    return (
        <>
            <h2>{product.nom}</h2>
            <button onClick={()=>addToCart(product)}></button>
        </>
    )
}