import HeaderImage from '../assets/shop-header-img.png'
import '../styles/homepage.css'
import Accessories from '../assets/categories/accessories.jpg'
import Carriages from '../assets/categories/carriages.jpg'
import Foods from '../assets/categories/foods.jpg'
import Litters from '../assets/categories/litters.jpg'
import Shampoos from '../assets/categories/shampoos.jpg'
import Toys from '../assets/categories/toys.jpg'
import ProductGrid from '../components/ProductGrid'
import {NavLink} from 'react-router-dom'

function Homepage(){
    return(
        <>
        <div className="relative bg-[var(--bg-dark)] entryAnimation overflow-x-hidden pb-[80px]">
            <div className="h-16 bg-[#eeede9]"></div>
            <div className="">
                <div className="flex relative entryAnimation">
                    <img src={HeaderImage} className="relative w-full"></img>
                    <p className="absolute top-[30%] left-[50%] w-[clamp(160px,calc(30%+0.5rem),100rem)] text-[clamp(0.75rem,calc(2vw+0.5rem),10rem)] font-extrabold entryAnimation">Your one stop <span className="text-lime-600">shop</span> for <span className="text-lime-600">Purr-fect</span> finds</p>
                </div>
            </div>

            <div className="relative flex w-full max-w-[80%] h-24 bg-transparent sm:left-1/2 sm:-translate-x-1/2 overflow-x-auto ml-[10%] sm:ml-0 mt-2 md:h-26 md:max-w-[1300px]">
                <div className="relative w-full grid grid-cols-[repeat(6,1fr)] gap-2 mr-16 sm:mr-0 sm:w-[620px] h-full bg-transparent md:left-1/2 md:-translate-x-1/2 md:w-full md:max-w-[80vw]">
                    <NavLink to={'store/category/food'} className="categories-option"><img src={Foods} className="categories-img"></img><p>Foods</p></NavLink>
                    <NavLink to={'store/category/accessory'} className="categories-option"><img src={Accessories} className="categories-img"></img><p>Accessories</p></NavLink>
                    <NavLink to={'store/category/shampoo'} className="categories-option"><img src={Shampoos} className="categories-img"></img><p>Shampoos</p></NavLink>
                    <NavLink to={'store/category/toy'} className="categories-option"><img src={Toys} className="categories-img"></img><p>Toys</p></NavLink>
                    <NavLink to={'store/category/carriage'} className="categories-option"><img src={Carriages} className="categories-img"></img><p>Carriages</p></NavLink>
                    <NavLink to={'store/category/litter'} className="categories-option"><img src={Litters} className="categories-img"></img><p>Litters</p></NavLink>
                </div>
            </div>
            
            <ProductGrid/>
        </div>

        </>
    )
}

export default Homepage