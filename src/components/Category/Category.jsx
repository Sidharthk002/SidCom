import { useParams } from "react-router-dom";
import Products from "../Products/Products";
import { useState,useEffect } from "react";
import axios from "axios";

import "./Category.scss";

const Category = () => {
    const { id } = useParams();
    const [data,setData] = useState();
    
    useEffect(()=>{
        axios.get(`http://localhost:5000/posts?category=${id}`).then(res=>{
          console.log(res)
          setData(res.data)
        })
      },[id])

    return (
        <div className="category-main-content">
            <div className="layout">
                <div className="category-title">
                    {
                        data? data[0].category:""
                    }
                </div>
                <Products innerPage={true} product={data} />
            </div>
        </div>
    );
};

export default Category;
