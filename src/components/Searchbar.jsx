import {Search} from 'lucide-react'

function Searchbar(){
    return(
        <>
            <div className="relative flex w-full h-full justify-center items-center lg:w-[45%]">
                <input type="text" placeholder="Search for products" className="relative text-[var(--text-muted)] text-[0.8rem] outline-none shadow-[4px_4px_8px_rgba(0,0,0,0.1),-4px_-4px_8px_rgba(255,255,255,0.7)] w-[90%] h-[70%] rounded-3xl px-11 sm:text-[1rem]"></input>
                <Search className="absolute right-12 text-lime-600 bg-whit w-[1.35rem] sm:w-[1.5rem]"/>
            </div>
        </>
    )
}

export default Searchbar