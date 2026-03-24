import { Link } from "react-router-dom"

export default function NotFoundPage() {

    return (
        <div className="container d-flex justify-content-center align-items-center " id="error-page">
            <div>
                <h1>404 Not Found</h1>
                <Link to="/prodotti">Go back</Link>
            </div>
        </div>

    )
}