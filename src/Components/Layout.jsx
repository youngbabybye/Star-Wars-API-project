import {Outlet} from "react-router-dom";
import { CustomLink } from "./CustomLink";

const Layout = () => {
    return (
        <>
        <header>
            <CustomLink to="/">Home</CustomLink>
            <CustomLink to="/people">People</CustomLink>
            <CustomLink to="/planets">Planets</CustomLink>
            <CustomLink to="/species">Species</CustomLink>
            <CustomLink to="/starships">Starships</CustomLink>
            <CustomLink to="/vehicles">Vehicles</CustomLink>
            <CustomLink to="/films">Films</CustomLink>
        </header>


        <Outlet />


        <footer>2023</footer>
        </>
    )
}


export {Layout}