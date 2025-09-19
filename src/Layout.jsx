import {Outlet} from 'react-router-dom'

import BottomNavbar from './components/BottomNavbar'
import Navbar from './components/Navbar'

function Layout(){
    return(
        <>
        <Navbar/>
        <Outlet/>
        <BottomNavbar/>
        </>
    )
}

export default Layout