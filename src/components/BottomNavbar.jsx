import {CircleUser, ShoppingBasket, Store, House} from 'lucide-react'
import {useState} from 'react'
import {NavLink} from 'react-router-dom'

function BottomNavbar(){

    const [selected, setSelected] = useState('home')

    const modifySelected = (e) => {
        console.log(e.target.value)
        setSelected(e.target.value)
    }

    return(
        <>
            <div className="fixed grid grid-cols-[repeat(4,1fr)] h-12 w-full shadow-2xl bg-[var(--bg-darker)] backdrop-blur-[10px] bottom-0 lg:hidden justify-items-center items-center rounded-t-2xl">

                <NavLink to={'/'} className={({isActive}) => isActive ? "selected" : "notSelected"}>
                    <label className="bottom-nav-options">
                        <input type="radio" name="bottom-navbar" value="home" defaultChecked></input>
                        <House className="bottom-nav-icons"/>
                        <p>Home</p>
                        <span></span>
                    </label>
                </NavLink>

                <NavLink to={'/store'} className={({isActive}) => isActive ? "selected" : "notSelected"}>
                    <label className="bottom-nav-options">
                        <input type="radio" name="bottom-navbar" value="store">
                        </input>
                        <Store className="bottom-nav-icons"/>
                        <p>Store</p>
                        <span></span>
                    </label>
                </NavLink>

                <NavLink to={'/cart'} className={({isActive}) => isActive ? "selected" : "notSelected"}>
                    <label className="bottom-nav-options">
                        <input type="radio" name="bottom-navbar" value="cart">
                        </input><ShoppingBasket className="bottom-nav-icons"/>
                        <p>Cart</p>
                        <span></span>
                    </label>
                </NavLink>

                <NavLink to={'/account'} className={({isActive}) => isActive ? "selected" : "notSelected"}>
                    <label className="bottom-nav-options">
                        <input type="radio" name="bottom-navbar" value="account">
                        </input><CircleUser className="bottom-nav-icons"/>
                        <p>Account</p>
                        <span></span>
                    </label>
                </NavLink>

            </div>
        </>
    )
}

export default BottomNavbar