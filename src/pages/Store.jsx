import ProductGrid from "../components/ProductGrid"
import useGetProduct from "../hooks/useGetProduct"
import { useParams } from "react-router-dom"
function Store(){
    return(
        <>
        <div className="bg-[var(--bg-dark)] py-[80px]">
            <ProductGrid/>
        </div>
        </>
    )
}

export default Store