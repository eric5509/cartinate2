import { BsCart, BsCart2, BsCart3, BsCart4, BsHeart, BsHeartFill, BsStarFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { addToCart, removeFromCart, addToWatchlist, singleProduct, removeFromWatchlist } from "../features/products/ProductSlice";

const ProductsCard = ({product}) => {
    const dispatch = useDispatch()
    const userId = 1
    return ( 
        <div className="flex group py-0.5c border-b-2 border-black md:border-0 flex-col w-full gap-1c">
            <div onClick={() => dispatch(singleProduct({itemId: product.id}))} className="h-14c relative w-full rounded p-0.5c">
                <img src={product.img}  className='w-full h-full object-contain object-center '/>
                {product.watchedBy.some(item => item === userId) ? 
                    <BsHeartFill id='heart' className="text-rose-500 z-50 cursor-pointer absolute top-0.5c right-0.5c" onClick={() => dispatch(removeFromWatchlist({id: product.id,userId: userId}))}/>
                    :<BsHeart id='heart' className="cursor-pointer z-50 absolute top-0.5c right-0.5c" onClick={() => dispatch(addToWatchlist({id: product.id,name: product.name,actualPrice: product.actualPrice,discountPrice: product.discountPrice,userId: userId, img: product.img}))}/>
                }
            </div>
            <div className="flex py-0.5c gap-0.5c flex-col">
                <NavLink to='/product' className="flex">
                    <p  onClick={() => dispatch(singleProduct({itemId: product.id}))} className="text-xs font-bold hover:underline duration-300 group-hover:text-red-600">{product.name}</p>
                </NavLink>
                <div className="flex items-center gap-0.5c">
                    <p className="font-bold text-base">${product.discountPrice}</p>
                    <p className="text-xs line-through text-gray-400">${product.actualPrice}</p>
                    <p className="bg-rose-200 py-0.1c px-0.5c text-[10px] rounded text-red-600">-{Math.floor(100 - ((100 * product.discountPrice) / product.actualPrice))}%</p>
                </div>
                <div className="flex justify-between items-center text-xs">
                    <div className="flex gap-0.5c items-center">
                        <BsStarFill className="text-sm text-amber-300"/>
                        <p className="text-[11px]">{product.rating}</p>
                    </div>
                    {product.cartedBy.some(item => item === userId) ?  
                        <div className="flex cursor-pointer p-0.4c bg-lime-500 hover:bg-blue-600 text-white duration-300 gap-0.25c rounded w-fit items-center" onClick={() => dispatch(removeFromCart({id: product.id,userId: userId}))}>
                            <BsCart className="text-xs"/> 
                            <p className="text-[8px]">ITEM CARTED</p>
                        </div>
                        :<div className="flex cursor-pointer p-0.4c bg-amber-500 hover:bg-rose-500 duration-500 text-white gap-0.25c rounded w-fit items-center" onClick={() => dispatch(addToCart({id: product.id,name: product.name,actualPrice: product.actualPrice,discountPrice: product.discountPrice,userId: userId, img: product.img}))}>
                            <BsCart4 className="text-xs"/> 
                            <p className="text-[8px]">CART ITEM</p>
                        </div>
                    }
                </div>
            </div>
        </div>
     );
}
export default ProductsCard;