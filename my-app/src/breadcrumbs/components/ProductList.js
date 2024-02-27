// dummy json api
//https://dummyjson.com/products
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ProductList() {
  const [products, setProducts] = useState(null);

  const fetchProducts = async () => {
    const { data } = await axios.get("https://dummyjson.com/products");
    setProducts(data.products);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  console.log(products);
  return (
    <React.Fragment>
      <h2>All Products</h2>
      <div className="products">
        {products?.map((product) => {
          return (
            <Link
              to={`/products/${product.id}`}
              className="product-card"
              key={product.id}
            >
              <img
                src={product.thumbnail}
                alt={product.thumbnail}
                className="product__image"
              />
              <p className="product__description">{product.description}</p>
            </Link>
          );
        })}
      </div>
    </React.Fragment>
  );
}

export default ProductList;
