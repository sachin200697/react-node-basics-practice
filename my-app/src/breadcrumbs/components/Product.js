import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

function Product() {
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  const fetchProducts = async () => {
    const { data } = await axios.get(`https://dummyjson.com/products/${id}`);
    setProduct(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);  
  return (
    <div>
      <h2>Product Details</h2>
      {product ? (
        <div key={product.id}>
          <div className="product-details__container">
            <img
              src={product.thumbnail}
              alt={product.thumbnail}
              className='product-details__image'
            />
            <div className='product-details__details'>
              <h3>{product.title}</h3>
              <h3>${product.price}</h3>
              <p className="product__description">{product.description}</p>
            </div>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Product;
