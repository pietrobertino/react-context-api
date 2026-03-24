import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import axios from 'axios'
const api_url = "https://fakestoreapi.com/products"
import { Bouncy } from 'ldrs/react'
import 'ldrs/react/Bouncy.css'


export default function Product() {

    const { id } = useParams()
    const [productInfo, setProductInfo] = useState(null)
    const navigate = useNavigate()

    useEffect(() => {
        axios.get(`${api_url}/${id}`)
            .then(res => {
                if (res.data) {
                    setProductInfo(res.data)
                } else {
                    navigate("/404-not-found")
                }
            })

    }, [id, navigate])


    return (
        <>
            {
                productInfo ?
                    <div className="container">
                        <h1 className="py-3">{productInfo.title}</h1>
                        <div className="row mt-3 g-3">
                            <div className="col col-12 col-md-7 text-center">
                                <img src={productInfo.image} alt={productInfo.title} className="product-img" />
                            </div>

                            <div className="col col-12 col-md-5 p-3">
                                <div className="d-flex justify-content-between">
                                    <span className="opacity-75">{productInfo.category}</span>
                                    <div>
                                        <span>{productInfo.rating?.rate} <i className="bi bi-star"></i></span>
                                        <span className="ms-2">{productInfo.rating?.count} reviews</span>
                                    </div>
                                </div>
                                <div className="my-3 fw-bold">{productInfo.title}</div>
                                <p>{productInfo.description}</p>
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="fw-bold">&pound;{productInfo.price}</div>
                                    <div>
                                        <button className="btn btn-success text-white btn-sm me-2">Buy now</button>
                                        <button className="btn btn-primary btn-sm"><i className="bi bi-cart"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex align-items-center justify-content-center p-5 mt-3 gap-3">
                            {id != 1 && <button className="btn btn-dark btn-lg" onClick={() => navigate(`/prodotti/${Number(id) - 1}`)}><i className="bi bi-arrow-left"></i></button>}
                            <button className="btn btn-dark btn-lg" onClick={() => navigate(`/prodotti/${Number(id) + 1}`)}><i className="bi bi-arrow-right"></i></button>
                        </div>
                    </div>
                    :
                    <div className="d-flex justify-content-center align-items-center" id="loading-screen">
                        <Bouncy size="200" speed="1.75" color="black" />
                    </div>
            }
        </>
    )
}   