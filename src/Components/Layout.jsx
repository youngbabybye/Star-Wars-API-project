import {Link, Outlet} from "react-router-dom";

const Layout = () => {
    return (
        <>
        <header>
            <Link to="/">Home</Link>
            <Link to="/people">People</Link>
            <Link to="/planets">Planets</Link>
            <Link to="/species">Species</Link>
            <Link to="/starships">Starships</Link>
            <Link to="/vehicles">Vehicles</Link>
            <Link to="/films">Films</Link>
        </header>


        <Outlet />


        <footer>2023</footer>
        </>
    )
}


export {Layout}