import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import ProductList from './components/ProductList';
import Product from './components/Product';
import './bread-crumb.css';
import BreadCrumb from './components/BreadCrumb';

function BreadCrumbExmaple() {
  return (
    <div>
      <Router>
        <h1>BreadCrumb Example</h1>  
        <BreadCrumb />      
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/products' element={<ProductList />} />  
            <Route path='/products/:id' element={<Product />} />
                  
        </Routes>
      </Router>
    </div>
  );
}

export default BreadCrumbExmaple;
