import { useLoaderData } from "react-router-dom";
import Product from "../Products/Product";

const All = () => {
    const videos = useLoaderData();
  const allVideo = videos.data;

    return (
        <div id="products-card-container" className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 gap-5 px-5">
           {
            allVideo.map(video => 
            <Product
            key={video.id}
            product={video}
            ></Product>)
           }
        </div>
    );
};

export default All;