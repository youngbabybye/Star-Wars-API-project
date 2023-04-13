import { Outlet } from "react-router-dom";
import { CustomLink } from "./CustomLink";

const Layout = () => {
    return (
        <>
            <body>
                <nav className="nav">
                    <div className="container">
                        <ul className="navbar">
                            <li className="navbar__item">
                                <CustomLink to="/">Homepage</CustomLink>
                            </li>
                            <li className="navbar__item">
                                <CustomLink to="/people">People</CustomLink>
                            </li>
                            <li className="navbar__item">
                                <CustomLink to="/planets">Planets</CustomLink>
                            </li>
                            <li className="navbar__item">
                                <CustomLink to="/species">Species</CustomLink>
                            </li>
                            <li className="navbar__item">
                                <CustomLink to="/starships">
                                    Starships
                                </CustomLink>
                            </li>
                            <li className="navbar__item">
                                <CustomLink to="/vehicles">Vehicles</CustomLink>
                            </li>
                            <li className="navbar__item">
                                <CustomLink to="/films">Films</CustomLink>
                            </li>
                        </ul>
                    </div>
                </nav>
                <main className="section">
                    <Outlet />
                </main>
                <footer>2023</footer>
            </body>
        </>
    );
};

export { Layout };
