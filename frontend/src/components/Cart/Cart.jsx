import { useState, useEffect } from "react";
import { Produit } from "../Produit/Produit";
import './Cart.css';

export function Cart({products, addToCart, removeFromCart}) {
    
    let total = 0

    products.map((product) => {
        total += product.prix * product.quantity
    })
    
    return (
        <div className="cart">
            <h2>Panier</h2>
            {products.map((product, index) => 
                <Produit key={index} product={product} addToCart={addToCart} removeFromCart={removeFromCart}/> 
            )}
            <div>{total.toFixed(2)}€</div>
             
        </div>
    )
}