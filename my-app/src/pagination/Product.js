import React from "react";

function Product({ product }) {
  const style = {
    width: "200px",
    height: "250px",
    border: "1px solid black",
    padding: "5px",
    margin: "10px",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  };
  return (
    <div className="product" style={style}>
      <img
        src={product.thumbnail}
        style={{ width: "100%", height: "95%", objectFit: "cover" }}
        alt={product.title}
      />

      <span>{product.title}</span>
    </div>
  );
}

export default Product;
