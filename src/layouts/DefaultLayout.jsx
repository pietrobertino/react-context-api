import { Outlet } from "react-router-dom";
import AppHeader from "../components/AppHeader";
import AppFooter from "../components/AppFooter";

export default function DefaultLayout() {

    return (
        <>
            <div id="layout">
                <AppHeader />
                <main>
                    <Outlet />
                </main>
                <AppFooter />
            </div>
        </>
    )
}