import { NavLink } from "react-router-dom"
import menu from "../data/Menu"

export default function AppHeader() {

    return (
        <header>
            <div className="container">
                <nav className="d-flex justify-content-center my-3">
                    {menu.map(navItem => (
                        <NavLink key={navItem.id} to={navItem.path} className=" text-decoration-none px-3" id="nav-item">{navItem.text}</NavLink>
                    ))}
                </nav>
            </div>
        </header>
    )
}