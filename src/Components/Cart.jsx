import CartCard from "./CartCard";
import { useSelector } from "react-redux";
import { BsCart } from "react-icons/bs";


const Cart = () => {
    const userId = 1
    const { cart } = useSelector((store) => store.products)
    const products = cart.filter(item => item.cartedBy === userId)
    const cartLength = products.length
    const quantity = products.map(item => item.quantity)
    const sumQuantity = quantity.reduce((acc, cur) => {return acc + cur }, 0)
    const price = products.map(item => item.discountPrice * item.quantity)
    const sumPrice = price.reduce((acc, cur) => {return acc + cur }, 0)

    return ( 
        <div className="">
            {cartLength === 0 ? 
                <div className="flex fixed w-screen text-white flex-col gap-2c h-screen bg-rose-500 top-0 left-0 items-center justify-center">
                    <BsCart className='text-6xl'/>
                    <p>YOUR CART IS EMPTY</p>
                </div>
                :<div className="grid parent grid-cols-[1fr] gap-1c md:grid-cols-[1fr_15rem] ">
                    <div className="flex flex-col gap-1c"> 
                        {products.map((product) => (<CartCard product={product} cartLength={cartLength} key={product.id}/>))}
                    </div>
                    <div className="flex h-fit pb-1c mb-1c group hover:shadow-rose-200 duration-500 shadow-md rounded flex-col gap-2c p-0.5c">
                        <p className="text-center font-bold text-lg hidden md:block">CHECKOUT</p>
                        <div className="flex flex-col gap-1c">
                            <p className="text-xs">NO OF ITEMS: {sumQuantity}</p>
                            <p className="text-xs">DELIVERY FEE:  </p>
                            <p className="text-xs font-bold">TOTAL: ${sumPrice} <span className="text-[10px] italic font-normal">(Excluding delivery)</span> </p>
                            <p className="w-full bg-blue-500 cursor-pointer text-white py-0.5c text-center rounded text-sm font-bold">CONTINUE</p>
                        </div>
                    </div>
                </div>
            }
        </div>
     );
}
 
export default Cart;