import {CircleUser, ShoppingBasket, Store, House} from 'lucide-react'
import {useState} from 'react'

function BottomNavbar(){

    const [selected, setSelected] = useState('home');

    const modifySelected = (e) => {
        console.log(e.target.value)
        setSelected(e.target.value);
    }
    
    return(
        <>
            <div className="fixed grid grid-cols-[repeat(4,1fr)] h-12 w-full bg-[var(--bg)] bottom-0 lg:hidden rounded-t-3xl justify-items-center items-center">
                <label className="bottom-nav-options"><input type="radio" name="bottom-navbar" value="home" onChange={modifySelected} className="peer"></input><House className="bottom-nav-icons"/><p>Home</p><span></span></label>
                <label className="bottom-nav-options"><input type="radio" name="bottom-navbar" value="store" onChange={modifySelected} className="peer"></input><Store className="bottom-nav-icons"/><p>Store</p><span></span></label>
                <label className="bottom-nav-options"><input type="radio" name="bottom-navbar" value="cart" onChange={modifySelected} className="peer"></input><ShoppingBasket className="bottom-nav-icons"/><p>Cart</p><span></span></label>
                <label className="bottom-nav-options"><input type="radio" name="bottom-navbar" value="account" onChange={modifySelected} className="peer"></input><CircleUser className="bottom-nav-icons"/><p>Account</p><span></span></label>
            </div>
        </>
    )
}

export default BottomNavbar