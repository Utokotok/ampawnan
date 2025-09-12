import {CircleUser, ShoppingBasket, Store, Search} from 'lucide-react'
import Logo from './Logo'
import Searchbar from './Searchbar'

function Navbar(){
    return(
        <>
            <div className="flex w-full justify-between px-6 h-16 z-1 items-center sticky top-0 md:px-14 lg:px-16 bg-[var(--bg)]">
                <Logo/>
                <Searchbar/>

                <ul className="list-none absolute -translate-x-52 lg:relative lg:flex lg:justify-between lg:translate-x-0 lg:w-96">
                    <li className="nav-btn"><Store/>Shop</li>
                    <li className="nav-btn"><ShoppingBasket/>Cart</li>
                    <li className="nav-btn"><CircleUser/>Account</li>
                </ul>
            </div>
            
        </>
    )
}

export default Navbar