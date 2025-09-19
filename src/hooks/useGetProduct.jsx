import {useState, useEffect} from 'react'

function useGetProduct(name, category){
    const [isLoading, setIsLoading] = useState(true)
    const [products, setProducts] = useState([])
    const [filtered, setFiltered] = useState([])

    useEffect(() => {
        setIsLoading(true)
        const timer = setTimeout(() => {
            fetch('/ampawnan/products/products.json')
            .then(result => result.json())
            .then(result => {
                setIsLoading(false)
                setProducts(result)
                if(name) setProducts(p => p.filter(e => e.name.toLowerCase().includes(name.toLowerCase())))
                if(category) setProducts(p => p.filter(e => e.category.toLowerCase() == category.toLowerCase()))
                console.log(name, category)
            })
        }, 500)

        return(() => {clearTimeout(timer)})
    },[name])

    return [isLoading, products]
}


export default useGetProduct