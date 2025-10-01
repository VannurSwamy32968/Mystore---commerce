import { Carousel } from "bootstrap";
import "./Home.css";
import React, { useEffect, useState } from "react";
import CarouselPage from "../../Components/Carousel/Carousel";
import CategoryCard from "../../Components/CategoryCard";
import axios from "axios";
import ProductCard from "../../Components/ProductCard";

const Home = () => {
  const [storeproducts, setStoreProducts] = useState([]);
  useEffect(() => {
    async function getProducts() {
      // let response = await axios.get("https://dummyjson.com/products");
      let response = await axios.get("https://dummyjson.com/products?limit=30");
      // console.log(response.data.products); // products list
      setStoreProducts(response.data.products);
    }

    getProducts();
  }, []);
  return (
    <>
      <CarouselPage />
      <div>
        <h1>Categories</h1>
        <div className="d-flex  justify-content-start column-gap-3">
          <CategoryCard fileName={"vegetables.jpg"} categoryName={"Food"} />
          <CategoryCard fileName={"clothes.jpg"} categoryName={"Clothes"} />
          <CategoryCard
            fileName={"lemon.jpg"}
            categoryName={"Kitchen Appliances"}
          />
          <CategoryCard fileName={"furniture.jpg"} categoryName={"Furniture"} />
          <CategoryCard fileName={"lipstick.jpg"} categoryName={"Beauty"} />
        </div>
      </div>
      <div>
        <h1>Products</h1>
        <div className="d-flex justify-content-start column-gap-3 row-gap-3 flex-wrap">
          {storeproducts &&
            storeproducts.length > 1 &&
            storeproducts.map((product) => {
              return <ProductCard product={product} />;
            })}
        </div>
      </div>
    </>
  );
};

export default Home;
