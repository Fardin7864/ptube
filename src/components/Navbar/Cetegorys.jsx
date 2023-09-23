import { useEffect, useState } from "react";
import Cetegory from "./Cetegory";
import Products from "../Products/Products";

const Cetegorys = () => {
    const [categorys, setCategorys] = useState([]);
    useEffect(()=>{
            fetch('https://openapi.programming-hero.com/api/videos/categories')
            .then(res => res.json())
            .then(data => setCategorys(data.data))
    },[])
    // console.log(categorys)
    return (
        <div className="flex justify-center mt-1 mb-10 lg:gap-5 md:gap-5 gap-2">
            {
                categorys.map((category,idx) => 
                <Cetegory
                key={idx} 
                categorys={category}
                ></Cetegory>
                )
            }
        <Products></Products>
        </div>
    );
};

export default Cetegorys;