import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Product from "./Product";


const Products = () => {
    const [products, setProducts] = useState([])
    const productsObj = useLoaderData() || {}
    useEffect(() => { 
        if (productsObj.data) {
            setProducts(productsObj.data)
        }
     },[productsObj.data])
    return (
        <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 gap-5 px-5">
            {
                products.map((product,idx) => 
                <Product
                key={idx}
                product = {product}
                ></Product>)
            }
        </div>
    );
};

export default Products;