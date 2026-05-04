import React, { useState } from 'react'
import ProductList ,{ sampleProducts }from './components/ProductList'
import DarkModeToggle from './components/DarkModeToggle'
import Cart from './components/Cart'

const App = () => {

  // TODO: Implement state for dark mode toggle
  const [isDark, setIsDark] = useState(false);


const handleToggleBtn = ()=>{
  setIsDark(prev => {
 const newDark = !prev;
    document.body.style.backgroundColor = newDark ? "black" : "white";
    return newDark;
  })
  
  
}
  // TODO: Implement state for cart management
  const [cart,setCart] = useState([])
const addToCart = (productName)=>{
  setCart(c =>[...c,productName])
}
  // TODO: Implement state for category filtering
const [category,setCategory] = useState("all")

  return (
    <div>
      <h1>🛒 Shopping App</h1>
      <p>
        Welcome! Your task is to implement filtering, cart management, and dark
        mode.
      </p>

      {/* TODO: Render DarkModeToggle and implement dark mode functionality */}
      <DarkModeToggle handleToggleBtn = {handleToggleBtn} isDark ={isDark} />

      {/* TODO: Implement category filter dropdown */}
      <label>Filter by Category: </label>
      <select onChange={(e)=> setCategory(e.target.value)}>
        <option value="all">All</option>
        <option value="Fruits">Fruits</option>
        <option value="Dairy">Dairy</option>
      </select>

      <ProductList category={category} addToCart ={addToCart} products={sampleProducts}/>

      {/* TODO: Implement and render Cart component */}
      <Cart cart={cart}/>
    </div>
  )
}

export default App
