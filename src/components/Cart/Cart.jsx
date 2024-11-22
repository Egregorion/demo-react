import { Produit } from "../Produit/Produit";

export function Cart({products}) {
    return (
        <>
            <h2>Panier</h2>
            {products.map((product, index) => 
                <Produit key={index} product={product}/> 
            )}
             
        </>
    )
}