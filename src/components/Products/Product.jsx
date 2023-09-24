import {AiTwotoneStar} from 'react-icons/ai'
const Product = ({product}) => {
    return (
        <div className="card h-[340px] bg-base-100 shadow-xl gap-8">
            <figure>
            <img src={product.thumbnail} alt="" className="w-[312px] rounded-lg" />
            </figure>

            <div className="w-24 absolute top-40 right-7 flex justify-center items-center">
            
            </div>

            <div className="pl-0">
            <div className="flex justify-start gap-3">
                <img src={product.authors[0]?.profile_picture} alt="" className="w-10 h-10 rounded-[40px]" />
                <h2 className="text-[#171717] text-base font-bold">{product?.title}</h2>
            </div>
            <p className="text-[#171717] text-sm font-normal pl-12 flex">
                {product.authors[0]?.profile_name}
                <span className="ml-3 flex gap-2 justify-center items-center mt-1">
                {product?.authors[0]?.verified ? <AiTwotoneStar className='text-blue-600 font-extrabold'></AiTwotoneStar> : ''}
                </span>
            </p>
            <p className="text-[#171717] text-sm mt-2 font-normal">{product?.others?.views}</p>
            </div>

        </div>
    );
};

export default Product;