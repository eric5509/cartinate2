import { useState } from 'react';
import { BsCart, BsCheckCircleFill, BsChevronDown, BsHeart, BsHeartFill, BsPhone, BsStarFill, BsStickies } from 'react-icons/bs'
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, removeFromCart, addToWatchlist, removeFromWatchlist } from "../features/products/ProductSlice";

const ProductDetials = () => {
    const dispatch = useDispatch()
    const { products, itemId } = useSelector((store) => store.products)
    const itemDetials = products.filter(item => item.id === itemId)
    const details = itemDetials[0]
    const userId = 1

    const [chevron, setChevron] = useState(false)
    const toggleChevron = () => {
        setChevron(!chevron)
    }
    return ( 
        <div className="">
        {itemId === ''?<div className="">
        </div>
        :<div className="grid grid-cols-[1fr] gap-1c md:grid-cols-[1fr_2fr_1fr]">
            <div className="h-14c">
                <img src={details.img} alt="" className='w-full h-full object-center object-contain'/>
            </div>
            <div className="h-fit p-0.5c flex flex-col gap-0.75c">
                <div className="flex justify-between items-center">
                    <p className='font-bold'>{details.name}</p>
                    { (details.watchedBy.includes(userId)) ?
                        <BsHeartFill className='cursor-pointer text-rose-500 duration-300'  onClick={() => dispatch(removeFromWatchlist({id: details.id,userId: userId}))}/>
                        :<BsHeart className='cursor-pointer hover:text-rose-500 duration-300' onClick={() => dispatch(addToWatchlist(
                            {id: details.id,name: details.name,actualPrice: details.actualPrice,discountPrice: details.discountPrice,userId: userId, img: details.img}))}/>
                    }
                </div>
                <div className="flex text-xs items-center gap-0.5c">
                    <BsPhone />
                    <p>{details.category}</p>
                </div>
                <p className='text-sm font-bold'>${details.discountPrice}</p>
                <div className="flex text-xs items-center gap-0.25c">
                    <BsStarFill className='text-amber-400'/>
                    <p>{details.rating} ({details.reviews} Reviews)</p>
                </div>
                <div className="flex flex-col gap-1c">
                    { (details.cartedBy.includes(userId)) ?
                    <div className="flex items-center justify-between">
                        <div  onClick={() => dispatch(removeFromCart({id: details.id, userId: userId}))} className="flex bg-lime-500 cursor-pointer text-white rounded w-fit p-0.5c text-xs items-center gap-0.5c">
                            <BsCart />
                            <p>ITEM CARTED</p>
                        </div>
                        <p className='bg-emerald-500 hover:bg-emerald-400 duration-300 text-white text-xs cursor-pointer p-0.5c px-1c rounded-full'>BUY NOW</p>
                    </div>
                    
                    :
                    <div className="flex justify-between">
                        <div onClick={() => dispatch(addToCart({id: details.id,name: details.name,actualPrice: details.actualPrice,discountPrice: details.discountPrice,userId: userId, img: details.img}))} className="flex bg-rose-500 cursor-pointer text-white rounded w-fit p-0.5c text-xs items-center gap-0.5c">
                            <BsCart />
                            <p>CART ITEM</p>
                        </div>
                        <p className='bg-emerald-500 hover:bg-emerald-400 duration-300 text-white text-xs cursor-pointer p-0.5c px-1c rounded-full'>BUY NOW</p>
                     </div>
                    }
                </div>
                <div onClick={toggleChevron} className="flex cursor-pointer mt-1c items-center uppercase text-xs gap-0.5c">
                    <p>About This Product</p>
                    <BsChevronDown className={chevron ?'stroke-1 duration-500 rotate-180':'stroke-1 duration-500'}/>
                </div>
                <div className={chevron ? "flex duration-300 flex-col gap-1c":"opacity-0 hidden duration-300 flex-col gap-1c"}>
                    {details.properties.map((item) => (
                        <div className="flex items-start gap-0.5c">
                            <div className="">
                                <BsCheckCircleFill className='text-rose-500'/>
                            </div>
                            <p className='text-xs'>
                                <span className='font-bold capitalize'>{item[0]}: </span>
                                <span className='text-xs'>{item[1]}</span>
                            </p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="hidden md:flex"></div>
        </div>
        }
        </div>

     );
}
 
export default ProductDetials;