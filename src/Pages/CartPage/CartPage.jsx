import React, { useEffect, useState } from "react";
import axios from "axios";

const CartPage = () => {
  const [cart, setCart] = useState([]);
  const [orderValue, setOrderValue] = useState(0);

  useEffect(() => {
    async function fetchCart() {
      try {
        
        const response = await axios.get("https://dummyjson.com/products?limit=5");
        setCart(response.data.products); // products array
      } catch (error) {
        console.error("Error fetching cart:", error);
      }
    }

    fetchCart();
  }, []);

  // Calculate order value whenever cart changes
  useEffect(() => {
    const total = cart.reduce((sum, product) => sum + product.price, 0);
    setOrderValue(total);
  }, [cart]);

  return (
    <div className="d-flex">
      {/* List of products */}
      <div className="listOfProducts w-75 d-flex flex-column row-gap-3 p-3">
        {cart.length === 0 ? (
          <h3>Your cart is empty</h3>
        ) : (
          cart.map((product) => (
            <div className="productInCart" key={product.id}>
              <img src={product.thumbnail} alt={product.title} width="250px" />
              <div className="productcartDetails m-2">
                <h1>{product.title}</h1>
                <h6>{product.description}</h6>
                <h6>Quantity: 1</h6>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Order Summary */}
      <div className="orderSummary w-25 p-3">
        <h1>Order Summary</h1>
        {cart.map((product) => (
          <div className="productInCart" key={product.id}>
            <img src={product.thumbnail} alt={product.title} width="150px" />
            <div className="productcartDetails m-2">
              <h6>{product.title}</h6>
              <h6>Quantity: 1</h6>
              <h5>Price: ${product.price}</h5>
            </div>
          </div>
        ))}
        <h4>Order total: ${orderValue}</h4>
      </div>
    </div>
  );
};

export default CartPage;
