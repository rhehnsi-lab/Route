import { NavLink, Outlet } from "react-router";
export default function LayOut() {
    return (
        <>
            <nav>
                <NavLink to="/" end>בית</NavLink>
                <NavLink to="/recipes">מתכונים</NavLink>
            </nav>
            <main>
                <Outlet />
            </main>
        </>
    )
}