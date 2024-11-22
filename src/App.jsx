import { useState, useEffect } from 'react'
import './App.css'
// import { Button } from './components/Button/Button'
import { List } from './components/List/List'
import { Cart } from './components/Cart/Cart'

function App() {

  const [list, setList] = useState([])
  const [cart, setCart] = useState([])

  useEffect(()=>{
    //console.log('le composant a été rendu')
    fetch('https://api.npoint.io/68bf5db20a3c236f68ed') //interroge l'url fournie en paramètre
      .then(response => response.json())
      .then(data => setList(data))
  },[])

  function addToCart(produit) {
    setCart([...cart, {...produit}])
  }
  
  return (
    <>
      <main>
        <h1>My Grocery Shop</h1>
        {/* rendu conditionnel, on test le booleen et on affiche le bouton que pour la valeur true 
        { booleen && <Button count={count} action={handleClick}/> }  
        <Button count={count} action={handleClick}/>*/}
        <List list={list} addToCart={addToCart}/>
      </main>
      <aside>
        <Cart products={cart} addToCart={addToCart}/>
      </aside>
    </>
  )
}

export default App
