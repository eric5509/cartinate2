import ProductsCard from "./ProductsCard";
import { useSelector } from "react-redux";

const Products = () => {
    const { products } = useSelector((store) => store.products)
  return ( 
        <div className="grid z-20 relative parent gap-2c grid-cols-gtc180">
            {products.map((product) => (<ProductsCard product={product} key={product.id}/>))}
      </div>
     );
}
 
export default Products;