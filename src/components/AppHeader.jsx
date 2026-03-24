import { NavLink } from "react-router-dom"
import menu from "../data/Menu"
import { useContext } from "react"
import BudgetContext from "../contexts/BudgetContext"

export default function AppHeader() {

    const { setBudgetMode, budgetMode } = useContext(BudgetContext);

    return (
        <header>
            <div className="container">
                <nav className="d-flex justify-content-center align-items-center my-3">
                    {menu.map(navItem => (
                        <NavLink key={navItem.id} to={navItem.path} className=" text-decoration-none px-3" id="nav-item">{navItem.text}</NavLink>
                    ))}
                    <button onClick={() => setBudgetMode(!budgetMode)} className="ms-2">{budgetMode ? "Disattiva budget mode" : "Attiva budget mode"}</button>
                </nav>
            </div>
        </header>
    )
}