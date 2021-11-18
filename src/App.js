import React, { useState, useEffect } from 'react';
import Home from './components/Home';
import Category from './components/Category';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import FourohFour from './components/FourohFour';
import { slugify } from './utils/slugify';
import Cart from './components/Cart';
import CartProvider from './context/CartContext';
const App = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/categories')
      .then((res) => res.json())
      .then((json) => setCategories(json));
  }, []);

  // const [cartItems, setCartItems] = useState([]);
  // const addProduct = (product) => {
  //   const exist = cartItems.find((x) => x.id === product.id);
  //   if (exist) {
  //     // product already on cart
  //     setCartItems(cartItems.map((x) => (x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x)));
  //   } else {
  //     // new product on cart
  //     setCartItems([...cartItems, { ...product, qty: 1 }]);
  //   }
  // };
  // const deleteProduct = (product) => {
  //   setCartItems(cartItems.filter((x) => x.id !== product.id));
  // };
  // const clearCart = () => {
  //   setCartItems([]);
  // };
  // const removeProduct = (product) => {
  //   const exist = cartItems.find((x) => x.id === product.id);
  //   if (exist.qty === 1) {
  //     setCartItems(cartItems.filter((x) => x.id !== product.id));
  //   } else {
  //     setCartItems(cartItems.map((x) => (x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x)));
  //   }
  // };

  return (
    <div id='wrapper'>
      <CartProvider>
        <BrowserRouter>
          <Header {...{ categories }} />
          <main className='py-3'>
            <Routes>
              <Route path='/' element={<Home categories={categories} />} />
              {categories.map((datum, index) => {
                return (
                  <Route
                    key={`route-category-${index}`}
                    path={slugify(datum)}
                    element={<Category category={datum} />}
                  />
                );
              })}
              <Route path='/cart' element={<Cart />} />
              <Route path='*' element={<FourohFour />} />
            </Routes>
          </main>
          <Footer />
        </BrowserRouter>
      </CartProvider>
    </div>
  );
};

export default App;
