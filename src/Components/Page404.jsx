import { Link } from "react-router-dom";
import { BiError } from 'react-icons/bi'

const Page404 = () => {
    return ( 
        <div className="top-0 left-0 text-center text-white fixed w-screen flex justify-center items-center gap-1c flex-col h-screen bg-rose-500">
            <BiError className="text-6xl"/>
            <p className="text-4xl font-bold "> CARTINATE</p>
            <div className="flex flex-col gap-1c">
                <p className="text-gray-200">THE PAGE REQUESTED DOES NOT EXIST</p>
                <p className="text-gray-200">RETURN TO <Link to='/' className="text-blue-400">HOMEPAGE</Link></p>
            </div>
        </div>
     );
}
 
export default Page404;