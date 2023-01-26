import { BsCart, BsHeart, BsSearch} from 'react-icons/bs'
import { FaBars} from 'react-icons/fa'
import { Link, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';


const Nav = () => {
    const userId = 1
    const { cart, watchlist } = useSelector((store) => store.products)
    const products = cart.filter(item => item.cartedBy === userId)
    const watchlist2 = watchlist.filter(item => item.watchedBy === userId)
    const quantity = products.map(item => item.quantity)
    const sumQuantity = quantity.reduce((acc, cur) => {return acc + cur }, 0)

    return ( 
        <div className="parent h-5c">
            <div className="w-screen z-50 bg-white px-1c shadow-md h-3.5c fixed top-0 grid grid-cols-[1fr_1fr] gap-1c md:grid-cols-[1fr_3fr_1fr] left-0">
                <div className="flex  items-center justify-start text-lg md:text-2xl font-bold cursor-pointer">
                    <Link to='/' className='text-rose-500'>CARTINATE</Link>
                </div>
                <div className="hidden py-0.4c px-0.25c md:flex items-center justify-center">
                    <div className="border-2 border-rose-300 hover:border-rose-500 duration-300 w-full h-full rounded-full pl-0.5c overflow-hidden grid grid-cols-[8rem_1fr_6rem]">
                        <select className='text-xs font-bold border-0 outline-0 bg-transparent'>
                            <option value="">All Categories</option>
                        </select>
                        <input placeholder='Search Products.......' type="text" className='px-1c text-xs border-0 outline-0 bg-transparent' />
                        <div className="flex items-center bg-rose-500 text-white cursor-pointer justify-center gap-0.5c">
                            <BsSearch />
                            <p className='text-xs'>SEARCH</p>
                        </div>
                    </div>
                </div>
                <div className="flex justify-end items-center gap-1c text-xl">
                    <NavLink to='/cart' className="flex group hover:text-rose-500 duration-300 gap-0.5c cursor-pointer items-center">
                        <div className="flex relative">
                            {sumQuantity !== 0 && <div className="w-1c h-1c bg-white text-red border-2 border-rose-500 group-focus:text-white duration-300 group-focus:bg-rose-500  rounded-full -top-0.5c flex items-center justify-center -right-0.5c text-[8px] absolute"><p>{sumQuantity}</p></div>}
                            <BsCart className=''/>
                        </div>
                        <p className='text-[10px] hidden md:flex'>CART</p>
                    </NavLink>
                    <NavLink to='/watchlist' className="flex hover:text-rose-500 duration-300 gap-0.5c group cursor-pointer items-center">
                        <div className="flex relative">
                            {watchlist2.length !== 0 && <div className="w-1c h-1c bg-white text-red border-2 border-rose-500 group-focus:text-white duration-300 group-focus:bg-rose-500  rounded-full -top-0.5c flex items-center justify-center -right-0.5c text-[8px] absolute"><p>{watchlist2.length}</p></div>}
                            <BsHeart className=''/>
                        </div>
                        <p className='text-[10px] hidden md:flex'>WATCHLIST</p>
                    </NavLink>
                    <FaBars className='md:hidden'/>
                </div>

            </div>
        </div>
     );
}
 
export default Nav;
