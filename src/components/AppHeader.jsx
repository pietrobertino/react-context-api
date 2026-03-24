import { NavLink } from "react-router-dom"
import menu from "../data/Menu"
import { useContext } from "react"
import BudgetContext from "../contexts/BudgetContext"

export default function AppHeader() {

    const { setMaxPrice, maxPrice } = useContext(BudgetContext);

    return (
        <header>
            <div className="container">
                <nav className="d-flex justify-content-center align-items-center my-3">
                    {menu.map(navItem => (
                        <NavLink key={navItem.id} to={navItem.path} className=" text-decoration-none px-3" id="nav-item">{navItem.text}</NavLink>
                    ))}
                    <input type="number" placeholder="Filtra prodotti per prezzo max" name="maxPrice" className="ms-3" value={maxPrice} onChange={(e) => setMaxPrice(e.target.value)} />
                </nav>
            </div>
        </header>
    )
}