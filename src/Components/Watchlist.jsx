import { useSelector } from "react-redux";
import WatchlistCard from "./WatchlistCard";
import { BsHeart } from "react-icons/bs";


const Watchlist = () => {
    const userId = 1
    const { watchlist } = useSelector((store) => store.products)
    const products = watchlist.filter(item => item.watchedBy === userId)
    return ( 
        <div className="flex flex-col parent gap-1c">
            {products.length === 0 ?
                <div className="flex fixed w-screen text-white flex-col gap-2c h-screen bg-rose-500 top-0 left-0 items-center justify-center">
                    <BsHeart className='text-6xl'/>
                    <p>YOUR WATCHLIST IS EMPTY</p>
                </div>
                :<div className="">
                    {products.map((product) => (<WatchlistCard product={product} key={product.id}/>))}
                </div>
            }
        </div>
     );
}
 
export default Watchlist;