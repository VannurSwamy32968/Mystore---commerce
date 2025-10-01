import React, { useEffect, useState } from "react";
import ProductCarousel from "../../Components/ProductCarousel/ProductCarousel";
import axios from "axios";
import { useParams } from "react-router-dom";

const Product = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();

  async function addToCart(product) {
    try {
      const response = await axios.post(
        "https://dummyjson.com/carts/add",
        {
          userId: 1, // hardcoded user for now
          products: [
            {
              id: product.id,
              quantity: 1,
            },
          ],
        },
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      console.log("Cart Updated:", response.data);
      alert(`${product.title} added to cart ✅`);
    } catch (error) {
      console.error("Error adding to cart:", error);
      alert("Failed to add to cart ❌");
    }
  }

  useEffect(() => {
    async function productDetails() {
      if (id) {
        let productData = await axios.get(
          "https://dummyjson.com/products/" + id
        );
        setProduct(productData.data);
      }
    }
    productDetails();
  }, [id]);

  return (
    <div className="productpage d-flex">
      <div className="productImage halfDiv d-flex justify-content-center align-items-center">
        {product.images && <ProductCarousel images={product.images} />}
      </div>
      <div className="productInfo halfDiv d-flex align-items-start">
        <div className="d-flex flex-column row-gap-3 p-3">
          <h1>{product.title}</h1>
          <h3>Price : ${product.price}</h3>
          <h5>{product.category}</h5>
          <p>{product.description}</p>
          <button
            className="btn btn-primary btn-lg w-25"
            onClick={() => addToCart(product)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
