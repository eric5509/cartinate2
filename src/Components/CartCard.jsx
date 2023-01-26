import { useSelector, useDispatch } from "react-redux";
import { BsCart, BsHeart, BsHeartFill, BsTrash } from 'react-icons/bs'
import { addToCart, removeFromCart, increaseQty,singleProduct, addToWatchlist, removeFromWatchlist, decreaseQty } from "../features/products/ProductSlice";
import { NavLink } from "react-router-dom";

const CartCard = ({product}) => {
    const dispatch = useDispatch()
    const userId = 1
    const { products, cart } = useSelector((store) => store.products)
    return ( 
        <div className="">
            <div className="grid shadow-md md:grid-rows-[1fr] grid-rows-[1fr_50px] p-0.5c w-full">
                <div className="grid grid-cols-[10rem_1fr] gap-0.5c ">
                    <div className="rounded ">
                        <img src={product.img}  className='w-full h-full object-contain object-center '/>
                    </div>
                    <div className="flex p-0.5c flex-col gap-1c justify-between">
                        <div className="flex items-start justify-between">
                            <NavLink to='/product' onClick={() => dispatch(singleProduct({itemId: product.id}))} className='w-full md:w-50pc text-sm font-bold hover:underline cursor-pointer duration-300'>{product.name}</NavLink>
                            <div className="flex flex-col gap-0.5c">
                                <div className="hidden w-3c md:flex cursor-pointer p-0.5c justify-center text-rose-400 hover:shadow-sm hover:text-red-600 duration-300 rounded item-center gap-0.5c">
                                    {
                                        products.some(item => {
                                            if(item.id === product.id){
                                                if(item.watchedBy.includes(userId)){
                                                    return true
                                                }
                                                return false
                                            }
                                    }) ?
                                        <BsHeartFill className="text-rose-500" onClick={() => dispatch(removeFromWatchlist({id: product.id,userId: userId}))}/>
                                        :<BsHeart onClick={() => dispatch(addToWatchlist({id: product.id,name: product.name,actualPrice: product.actualPrice,discountPrice: product.discountPrice,userId: userId, img: product.img}))}/>
                                    }   
                                </div>
                                <div className="hidden w-3c md:flex cursor-pointer p-0.5c justify-center hover:text-red-500 hover:shadow-sm duration-300 rounded item-center gap-0.5c">
                                    <BsTrash className="shadow-xs" onClick={() => dispatch(removeFromCart({id: product.id,userId: userId}))}/>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center justify-between">
                            <p className='text-sm font-bold'>${product.discountPrice}</p>
                            <div className="hidden h-2c md:flex items-center gap-0.5c ">
                                <div className="h-1.5c w-1.5c rounded flex cursor-pointer items-center font-bold justify-center shadow-sm bg-teal-200" onClick={() => dispatch(decreaseQty({id: product.id,userId: userId}))}><p>-</p></div>
                                <div className="h-1.5c w-2.5c rounded flex items-center text-xs font-bold justify-center shadow"><p>{product.quantity}</p></div>
                                <div className="h-1.5c w-1.5c rounded flex cursor-pointer items-center font-bold justify-center shadow-sm bg-teal-200" onClick={() => dispatch(increaseQty({id: product.id,userId: userId}))}><p>+</p></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex md:hidden items-center justify-between">
                    <div className="flex gap-0.5c">
                        <div className="flex cursor-pointer duration-300 w-fit p-0.5c rounded item-center gap-0.5c">
                            <BsTrash className='text'onClick={() => dispatch(removeFromCart({id: product.id,userId: userId}))}/>
                        </div>
                        <div className="flex cursor-pointer duration-300 w-fit p-0.5c rounded item-center gap-0.5c">
                        {
                            products.some(item => {
                                if(item.id === product.id){
                                    if(item.watchedBy.includes(userId)){
                                        return true
                                    }
                                    return false
                                }
                            }) ?
                            <BsHeartFill className="text-rose-500" onClick={() => dispatch(removeFromWatchlist({id: product.id,userId: userId}))}/>
                            :<BsHeart onClick={() => dispatch(addToWatchlist({id: product.id,name: product.name,actualPrice: product.actualPrice,discountPrice: product.discountPrice,userId: userId, img: product.img}))}/>
                        }
                        </div>
                    </div>
                    <div className="h-2c flex items-center gap-0.5c ">
                        <div className="h-1.75c w-1.75c rounded flex cursor-pointer items-center font-bold justify-center shadow-sm bg-red-200 duration-300 hover:bg-rose-400" onClick={() => dispatch(decreaseQty({id: product.id,userId: userId}))}><p>-</p></div>
                        <div className="h-1.75c w-2.5c rounded flex items-center text-xs font-bold justify-center shadow"><p>{product.quantity}</p></div>
                        <div className="h-1.75c w-1.75c rounded flex cursor-pointer items-center font-bold justify-center shadow-sm bg-teal-200 duration-300 hover:bg-lime-400" onClick={() => dispatch(increaseQty({id: product.id,userId: userId}))}><p>+</p></div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default CartCard;