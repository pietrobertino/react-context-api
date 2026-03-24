import axios from 'axios'
import { useEffect, useState } from 'react'
const api_url = "https://fakestoreapi.com/products"
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import BudgetContext from '../contexts/BudgetContext'

export default function Products() {

    const { maxPrice } = useContext(BudgetContext);

    const [products, setProducts] = useState([])

    useEffect(() => {
        axios.get(api_url)
            .then(response => {
                setProducts(response.data)
            })
            .catch(function (error) {
                console.log(error.toJSON())
            })
    }, [])

    function getBudgetProducts(list) {
        let finalList
        if (maxPrice) {
            finalList = list.filter(item => item.price <= maxPrice)
        } else {
            finalList = products
        }

        return finalList
    }

    return (

        <div className="container">
            <h1 className='my-5'>
                I nostri prodotti
            </h1>

            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-3">
                {getBudgetProducts(products).map(product => (
                    <div className='col' key={product.id}>
                        <div className="card p-3 h-100">

                            <div className=' card-header '>
                                <div className='card-subtitle'>{product.category}</div>
                                <img src={product.image} alt={product.title} className=' card-img p-3' />
                            </div>

                            <div className='card-body d-flex flex-column'>
                                <h3 className='card-title'>{product.title}</h3>
                                <Link to={`/prodotti/${product.id}`}>Find out more</Link>
                                <div className='card-footer mt-auto'>
                                    <div className=' fw-bolder'>&pound;{product.price}</div>
                                </div>
                            </div>

                        </div>
                    </div>
                ))}
            </div>
        </div >

    )
}