import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Cart from './Components/Cart';
import Nav from './Components/Nav';
import Page404 from './Components/Page404';
import ProductDetials from './Components/ProductDetails';
import Products from './Components/Products';
import Todo from './Components/Todo';
import Watchlist from './Components/Watchlist';

const App = () => {
  return ( 
    <main>
      <Routes>
        <Route path='/' element={<section><Nav /><Products /></section>} />
        <Route path='/watchlist' element={<section><Nav /><Watchlist /></section>} />
        <Route path='/cart' element={<section><Nav /><Cart /></section>}/>
        <Route path='product' element={<section><Nav /><ProductDetials /></section>}/>
        <Route path='*' element={<section><Page404 /></section>}/>
      </Routes>
    </main>
   );
}
export default App;
