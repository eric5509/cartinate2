import { useSelector, useDispatch } from "react-redux";
import { BsCart, BsTrash } from 'react-icons/bs'
import { addToCart, removeFromCart, removeFromWatchlist, singleProduct, addToWatchlist } from "../features/products/ProductSlice";
import { NavLink } from "react-router-dom";

const WatchlistCard = ({product}) => {
    const dispatch = useDispatch()
    const userId = 1
    const { products } = useSelector((store) => store.products)
    return ( 
        <div className="grid shadow-md md:grid-rows-[1fr] grid-rows-[1fr_50px] p-0.5c w-full">
            <div className="grid grid-cols-[10rem_1fr] gap-0.5c ">
                <div className="rounded ">
                    <img src={product.img}  className='w-full h-full object-contain object-center '/>
                </div>
                <div className="flex p-0.5c flex-col gap-1c justify-between">
                    <div className="flex items-start justify-between">
                        <NavLink to='/product' onClick={() => dispatch(singleProduct({itemId: product.id}))}  className='w-full md:w-50pc text-sm font-bold hover:underline cursor-pointer duration-300'>{product.name}</NavLink>
                        <div className="hidden w-3c md:flex cursor-pointer p-0.5c justify-center hover:text-red-500 hover:shadow-sm duration-300 rounded item-center gap-0.5c" onClick={() => dispatch(removeFromWatchlist({id: product.id,userId: userId}))}>
                            <BsTrash />
                        </div>
                    </div>
                    <div className="flex items-center justify-between">
                        <p className='text-sm font-bold'>${product.discountPrice}</p>
                        {
                            products.some(item => {
                                if(item.id === product.id){
                                    if(item.cartedBy.includes(userId)){
                                        return true
                                    }
                                    return false
                                }
                        }) ?
                        <div className="p-0.5c bg-lime-500 text-white rounded cursor-pointer hidden md:flex items-center gap-0.5c hover:shadow-md duration-300" onClick={() => dispatch(removeFromCart({id: product.id,userId: userId}))}>
                            <BsCart />
                            <p className="text-[10px]">ITEM CARTED</p>
                        </div>
                        :<div className="p-0.5c bg-rose-500 text-white rounded cursor-pointer hidden md:flex items-center gap-0.5c" onClick={() => dispatch(addToCart({id: product.id,name: product.name,actualPrice: product.actualPrice,discountPrice: product.discountPrice,userId: userId, img: product.img}))}>
                            <BsCart />
                            <p className="text-[10px]">ADD TO CART</p>
                        </div> 
                        }
                    </div>
                </div>
            </div>
            <div className="flex md:hidden items-center justify-between">
                <div className="flex gap-0.5c">
                    <div className="flex cursor-pointer  hover:text-white duration-300 w-fit p-0.5c rounded item-center gap-0.5c" onClick={() => dispatch(removeFromWatchlist({id: product.id,userId: userId}))}>
                        <BsTrash className="text-lg"/>
                    </div>
                </div>
                {
                    products.some(item => {
                        if(item.id === product.id){
                            if(item.cartedBy.includes(userId)){
                                return true
                            }
                            return false
                        }
                }) ?
                    <div className="p-0.5c bg-lime-500 text-white rounded cursor-pointer flex md:hidden items-center gap-0.5c" onClick={() => dispatch(removeFromCart({id: product.id,userId: userId}))}>
                        <BsCart />
                        <p className="text-[10px]">ITEM CARTED</p>
                    </div>
                   :<div className="p-0.5c bg-rose-500 text-white rounded flex items-center gap-0.5c" onClick={() => dispatch(addToCart({id: product.id,name: product.name,actualPrice: product.actualPrice,discountPrice: product.discountPrice,userId: userId, img: product.img}))}>
                        <BsCart />
                        <p className="text-[10px]">CART ITEM</p>
                    </div>
                }
            </div>
        </div>
     );
}
 
export default WatchlistCard;