import '../styles/card-filler.css'

function CardFiller(){
    return(
        <>
            <div className="relative grid grid-rows-[60%_40%] grid-cols-1 bg-[var(--bg)] w-full aspect-[1/1.5] justify-center items-center rounded-[10px] shadow-2xs">
                <div className=" relative h-[100%] w-full rounded-t-[10px] loadingAnimation"></div>
                <div className="h-[100%] w-full relative grid grid-rows-[40%_30%_20%] grid-cols-1 items-center justify-items-center">
                    <div className="relative h-[50%] w-[90%] loadingAnimation"></div>
                    <div className="relative h-[70%] w-[90%] loadingAnimation"></div>
                    <div className="relative h-[70%] w-[90%] loadingAnimation"></div>
                </div>
            </div>
        </>
    )
}

export default CardFiller