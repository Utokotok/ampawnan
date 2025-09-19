import {Search} from 'lucide-react'
import {useState, useRef} from 'react'
import { useNavigate } from 'react-router-dom'

function Searchbar(){
    const searchButton = useRef()
    const [search, setSearch] = useState('')
    const [placeHolder, setPlaceHolder] = useState('Search for products')
    const [textColor, setTextColor] = useState(true)
    const navigate = useNavigate();

    return(
        <>
            <div className="relative flex w-full h-full justify-center items-center lg:w-[45%]">
                <input type="text" onChange={(e) => {setSearch(e.target.value)}} value={search} placeholder={placeHolder} className={`relative bg-[var(--bg)] text-[var(--text-muted)] text-[0.8rem] outline-none shadow-[4px_4px_8px_rgba(0,0,0,0.1),-4px_-4px_8px_rgba(255,255,255,0.7)] w-[90%] h-[70%] rounded-3xl px-11 sm:text-[1rem] ${textColor ? "placeholder-gray-400" : "placeholder-red-300"}`}  onKeyDown={(e) => {if(e.key == 'Enter') console.log(searchButton.current.click())}}></input>
                <div className="absolute right-[10%]" ref={searchButton} onClick={() => {if(search == null || search == ""){
                        setTextColor(false)
                        setPlaceHolder('Enter a product name to search')
                        const timer = setTimeout(() => {
                        setPlaceHolder('Search for products')
                        setTextColor(true)
                    }, 2000)
                    } else{
                        setSearch('')
                        navigate(`/store/name/${search}`)
                    }}}>
                    <Search className="text-lime-600 bg-whit w-[1.35rem] sm:w-[1.5rem]"></Search>
                </div>
            </div>
        </>
    )
}

export default Searchbar