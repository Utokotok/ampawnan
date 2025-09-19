import {NavLink} from 'react-router-dom'

function Logo(){
    return(
        <>
            <NavLink to={'/'}>
                <div className="hidden font-extrabold text-[1.5rem] tracking-widest sm:block">
                    <p>AM<span className="text-lime-600">PAW</span>NAN</p>
                </div>
            </NavLink>
        </>
    )
}

export default Logo