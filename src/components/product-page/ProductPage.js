import React, { useState } from "react";

function ProductPage() {
  const [products, setProducts] = useState([{ name: "pelota", quantity: 0 }]);
  const addProduct = () => {
    setProducts([...products, { name: "canasta", quantity: 0 }]);
  };
  return (
    <>
      <h1>Pagina de productos</h1>
      {products.map((p, index) => (
        <div key={index}>
          <p>Item #{index + 1}:</p>
          <p>{p.name}</p>
          <p>{p.quantity}</p>
        </div>
      ))}
      <button onClick={() => addProduct()}>GET PRODUCTS</button>
    </>
  );
}

export default ProductPage;
