import { createBrowserRouter, RouterProvider } from "react-router-dom"

import Homepage from "./pages/Homepage"
import Store from './pages/Store'
import Cart from './pages/Cart'
import Account from './pages/Account'
import Layout from './Layout'
import Product from './pages/Product'

import BottomNavbar from './components/BottomNavbar'
import Navbar from './components/Navbar'
function App(){

  const router = createBrowserRouter([
    {path:'/', element:<Layout/>, children: [
      {index: true, element:<Homepage/>},
      {path:'/cart', element:<Cart/>},
      {path:'/account', element:<Account/>},
      {path:'/store', element:<Store/>},
      {path:'/store/name/:name', element:<Store/>},
      {path:'/store/category/:category', element:<Store/>},
      {path:'/store/name/:name/category/:category', element:<Store/>},
      {path:'/product/:id', element:<Product/>}
    ]}
  ], {basename: '/ampawnan/'})

  return(
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App