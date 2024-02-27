// dummy json api
//https://dummyjson.com/products
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Home() {
    const [products, setProducts] = useState(null);

    const fetchProducts = async ()=>{
        const {data} = await axios.get('https://dummyjson.com/products');
        setProducts(data.products.slice(0,6));
    }

    useEffect(()=>{
        fetchProducts();
    }, []);

    console.log(products);
  return (
    <React.Fragment><h2>Trending Products</h2> 
    <div className='products'>   
    
      {
        products?.map(product=>{
            return <div key={product.id}>
                <Link to={`/products/${product.id}`} className='product-card'>
                    <img src={product.thumbnail} alt={product.thumbnail} className='product__image'/>
                    <p className='product__description'>{product.description}</p>
                </Link>
            </div>
        })
      }
    </div>
    <Link to={'/products'}><button>All Products</button></Link>
    </React.Fragment>
  );
}

export default Home;
