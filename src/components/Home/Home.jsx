import React, { useEffect, useContext } from "react";
import "./Home.scss";
import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import Products from "../Products/Products";

import { Context } from "../../utils/context";
import axios from "axios";

const Home = () => {
    const { products, setProducts, categories, setCategories } =
        useContext(Context);
    useEffect(() => {
        getProducts();
        getCategories();
    },[]);

    const getProducts = () => {
        axios.get("http://localhost:5000/posts").then(res=>{
      console.log(res.data)
      setProducts(res.data)
    })
    };
    const getCategories = () => {
        axios.get("http://localhost:5000/posts").then(res=>{
            console.log(res.data)
            setCategories(res.data)
          })
    };

    return (
        <div>
            <Banner />
            <div className="main-content">
                <div className="layout">
                    <Category categories={categories} />
                    <Products
                        headingText="Popular Products"
                        product={products}
                    />
                </div>
            </div>
        </div>
    );
};

export default Home;
