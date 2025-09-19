import {CircleUser, ShoppingBasket, Store, Search} from 'lucide-react'
import {NavLink} from 'react-router-dom'
import Logo from './Logo'
import Searchbar from './Searchbar'

function Navbar(){
    return(
        <>
            <div className="flex w-full justify-between px-6 h-16 items-center fixed top-0 md:px-14 lg:px-16 bg-[var(--bg-darker)] backdrop-blur-[10px] z-50">
                
                <Logo/>
                <Searchbar/>

                <ul className="list-none absolute -translate-x-52 lg:relative lg:flex lg:justify-between lg:translate-x-0 lg:w-96">
                    <NavLink to={'/store'}><li className="nav-btn"><Store/>Shop</li></NavLink>
                    <NavLink to={'/cart'}><li className="nav-btn"><ShoppingBasket/>Cart</li></NavLink>
                    <NavLink to={'/account'}><li className="nav-btn"><CircleUser/>Account</li></NavLink>
                </ul>
            </div>
            
        </>
    )
}

export default Navbar