import { createBrowserRouter, RouterProvider } from "react-router-dom"

import Homepage from "./pages/Homepage"
import BottomNavbar from './components/BottomNavbar'
import Navbar from './components/Navbar'
function App(){
  return(
    <>
      <Navbar/>
      <Homepage/>
      <BottomNavbar/>
    </>
  )
}

export default App