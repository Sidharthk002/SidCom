import {React,useEffect,useState} from "react";
import Products from "../../Products/Products";
import axios from "axios";
const RelatedProducts = ({ categoryId, productId }) => {
    const [data,setData] = useState();
    console.log(categoryId)
    console.log(productId * 2)
    let datas 
    useEffect(()=>{
        axios.get(`http://localhost:5000/posts?category=${categoryId}`).then(res=>{
            setData(res.data)
            console.log(data);
             datas = data?.filter((p)=> p.id !== productId);
          })
    },[categoryId])
    console.log(datas)
    
    
    return (
        <div className="related-products">
            <Products headingText="Related Products" product={data} />
        </div>
    );
};

export default RelatedProducts;
