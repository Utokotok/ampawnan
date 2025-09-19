import '../styles/card-filler.css'
import useGetProduct from '../hooks/useGetProduct'
import CardFiller from './CardFiller';
import { PhilippinePeso, MapPin } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { useParams } from 'react-router-dom';

function ProductGrid(){
    const {name, category} = useParams()
    const [isLoading, productData] = useGetProduct(name, category)
    const filler = [1,2,3,4,5,6,7,8,9,10,11]
    const swapImage = (e) => {
        e.target.src = 'products/images/placeholder.png'
    }

    return(
        <>
            <div className="relative left-1/2 -translate-x-1/2 grid grid-cols-2 w-[clamp(1rem,80vw,1300px)] grid-rows-[auto] [@media(min-width:480px)_and_(max-width:640px)]:grid-cols-3 justify-items-center items-center gap-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                {
                    isLoading ? (
                        filler.map(e => (
                            <CardFiller key={e}/>
                        ))
                    ) : (
                        productData.map((productData, i) => (
                            <NavLink to={`/product/${productData.id}`} key={productData.id}>
                                <div className="relative bg-[var(--bg)] w-full aspect-[1/1.5] justify-center items-center rounded-[10px] shadow-2xs cardsEntryAnimation " style={{"--i":i}}>
                                {console.log(i)}
                                   <img src={productData.image} onError={(e) => {swapImage(e)}} className="relative h-[60%] w-full rounded-t-[10px] object-cover"></img>
                                                                     
                                    {productData.name == "" ? (                
                                        <div className="h-[40%] w-full relative grid grid-rows-[40%_30%_20%] grid-cols-1 items-center justify-items-center">
                                            <div className="relative h-[50%] w-[90%] loadingAnimation"></div>
                                            <div className="relative h-[70%] w-[90%] loadingAnimation"></div>
                                            <div className="relative h-[70%] w-[90%] loadingAnimation"></div>
                                        </div>
                                    ) : (
                                        <div className="h-[40%] relative flex flex-col justify-between p-2 text-[0.65rem] sm:text-[0.8rem] md:text-[1rem] md:mx-1.5">
                                            <p className="h-12 relative line-clamp-2">{productData.name}</p>
                                            <div className="flex text-lime-600 font-medium h-[25%]"><div className="flex items-center"><PhilippinePeso className="w-[0.7rem] sm:w-[0.8rem] md:w-[1rem]"/><p>{productData.price}</p></div></div>
                                            <div className="flex relative items-center text-[var(--text-muted)] font-medium h-[25%] text-[0.6rem] sm:text-[0.7rem] md:text-[0.8rem]"><MapPin className="w-[0.6rem] sm:w-[0.7rem] md:w-[0.8rem] mr-1"/><p>{productData.location}</p></div>
                                        </div>
                                    )}
                                </div>
                            </NavLink>
                        )
                    )
                )
                }
            </div>
        </>
    )
}

export default ProductGrid