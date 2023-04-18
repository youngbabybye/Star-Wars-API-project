import { Link } from "react-router-dom";

import films from "../image/Homepage/FilmsImg.jpg";
import planets from "../image/Homepage/PlanetsImg.jpg";
import people from "../image/Homepage/PeopleImg.jpg";
import species from "../image/Homepage/SpeciesImg.jpg";
import starships from "../image/Homepage/StarshipsImg.jpg";
import vehicles from "../image/Homepage/VehiclesImg.jpg";

const Homepage = () => {
    return (
        <>
            <div className="wrapper">
                <div className="content">
                    <header className="hero-section">
                        <div className="containers">
                            <div className="main-header">
                                <h1 className="main-title">
                                    Hi, my name is <span>Viktor</span>.<br />
                                    You are on the home page of an application
                                    dedicated to the Star Wars universe. The API
                                    was used to implement the application:{" "}
                                    <Link to="https://swapi.dev/api/">
                                        <p className="swapi">Star Wars API.</p>
                                    </Link>
                                    Below you can briefly see the content of the
                                    project.
                                </h1>
                            </div>
                        </div>
                    </header>

                    <div className="portfolio">
                        <div className="containers">
                            <main
                                data-scroll
                                data-scroll-speed="1"
                                className="gallery"
                            >
                                <div className="gallery__left">
                                    <img
                                        data-speed=".9"
                                        className="gallery__item"
                                        src={people}
                                        alt="Alt"
                                    />

                                    <div
                                        data-speed="1.1"
                                        className="text-block gallery__item"
                                    >
                                        <h2 className="text-block__h">
                                            Section: <strong>Planets</strong>
                                        </h2>
                                        <p className="text-block__p">
                                            This section introduces you to the
                                            planets of the Star Wars universe.
                                            Learn about their climate, size,
                                            populations, and residents.
                                        </p>
                                        <Link to="/planets">
                                            <p className="text-block__link">
                                                Check it
                                            </p>
                                        </Link>
                                    </div>

                                    <img
                                        data-speed=".9"
                                        className="gallery__item"
                                        src={species}
                                        alt="Alt"
                                    />
                                    <div
                                        data-speed="1.1"
                                        className="text-block gallery__item"
                                    >
                                        <h2 className="text-block__h">
                                            Section: <strong>Starships</strong>
                                        </h2>
                                        <p className="text-block__p">
                                            This section introduces you to the
                                            starships that exist in the Star
                                            Wars universe. Learn about their
                                            size, cost, maximum speed, and more.
                                        </p>
                                        <Link to="/starships">
                                            <p className="text-block__link">
                                                Check it
                                            </p>
                                        </Link>
                                    </div>
                                    <img
                                        data-speed=".9"
                                        className="gallery__item"
                                        src={vehicles}
                                        alt="Alt"
                                    />
                                    <div
                                        data-speed="1.1"
                                        className="text-block gallery__item last"
                                    >
                                        <h2 className="text-block__h">
                                            Section: <strong>Films</strong>
                                        </h2>
                                        <p className="text-block__p">
                                            In this section you will get
                                            acquainted with the movies dedicated
                                            to the Star Wars universe. You will
                                            learn their release date, who was
                                            the director and producer of the
                                            film, and much more.
                                        </p>
                                        <Link to="/films">
                                            <p className="text-block__link">
                                                Check it
                                            </p>
                                        </Link>
                                    </div>
                                </div>

                                <div
                                    data-speed="1.1"
                                    className="gallery__right"
                                >
                                    <div className="text-block gallery__item">
                                        <h2 className="text-block__h">
                                            Section: <strong>People</strong>
                                        </h2>
                                        <p className="text-block__p">
                                            In this section you will get
                                            acquainted with the characters of
                                            the Star Wars universe. You will
                                            learn their home planet, what
                                            equipment and spaceships they rode,
                                            as well as their personal
                                            characteristics.
                                        </p>
                                        <Link to="/people">
                                            <p className="text-block__link">
                                                Check it
                                            </p>
                                        </Link>
                                    </div>
                                    <img
                                        data-speed=".9"
                                        className="gallery__item"
                                        src={planets}
                                        alt="Alt"
                                    />
                                    <div
                                        data-speed="1.1"
                                        className="text-block gallery__item"
                                    >
                                        <h2 className="text-block__h">
                                            Section: <strong>Species</strong>
                                        </h2>
                                        <p className="text-block__p">
                                            In this section you will get
                                            acquainted with the species
                                            inhabiting the Star Wars universe.
                                            You will learn about their
                                            classification, what languages they
                                            speak, as well as much more.
                                        </p>
                                        <Link to="/species">
                                            <p className="text-block__link">
                                                Check it
                                            </p>
                                        </Link>
                                    </div>
                                    <img
                                        data-speed=".9"
                                        className="gallery__item"
                                        src={starships}
                                        alt="Alt"
                                    />

                                    <div
                                        data-speed="1.1"
                                        className="text-block gallery__item"
                                    >
                                        <h2 className="text-block__h">
                                            Section: <strong>Vehicles</strong>
                                        </h2>
                                        <p className="text-block__p">
                                            In this section you will get
                                            acquainted with the vehicles that
                                            exist in the Star Wars universe.
                                            Learn about their size, cost,
                                            maximum speed, and more.
                                        </p>
                                        <Link to="/vehicles">
                                            <p className="text-block__link">
                                                Check it
                                            </p>
                                        </Link>
                                    </div>

                                    <img
                                        data-speed=".9"
                                        className="gallery__item last"
                                        src={films}
                                        alt="Alt"
                                    />
                                </div>
                            </main>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export { Homepage };

/*
<div className="container_homepage">
                <div className="header">
                    <div className="header_title">
                        Hi, my name is <span>Viktor</span>.
                    </div>
                    <p className="header_text">
                        You are on the home page of an application dedicated to
                        the Star Wars universe. The API was used to implement
                        the application:{" "}
                        <Link to="https://swapi.dev/api/">Star Wars API</Link>.
                        Below you can briefly see the content of the project.
                    </p>
                    <div className="header_scroll">
                        <a href="#people">scroll down</a>
                    </div>
                </div>
                <div className="section_container">
                    <div className="section_article">
                        <div className="section_article_title">
                            Section: People
                        </div>
                        <p className="section_article_text">
                            In this section you will get acquainted with the
                            characters of the Star Wars universe. You will learn
                            their home planet, what equipment and spaceships
                            they rode, as well as their personal
                            characteristics.
                        </p>

                        <div className="section_link">
                            <Link to={"/people"}> Go to Section </Link>
                        </div>
                    </div>
                    <div className="section_img people" id="people"></div>
                </div>
                <div className="section_container">
                    <div className="section_article">
                        <div className="section_article_title">
                            Section: Planets
                        </div>
                        <p className="section_article_text">
                            This section introduces you to the planets of the
                            Star Wars universe. Learn about their climate, size,
                            populations, and residents.
                        </p>

                        <div className="section_link">
                            <Link to={"/planets"}>Go to Section </Link>
                        </div>
                    </div>
                    <div className="section_img planets"></div>
                </div>
                <div className="section_container">
                    <div className="section_article">
                        <div className="section_article_title">
                            Section: Species
                        </div>
                        <p className="section_article_text">
                            In this section you will get acquainted with the
                            species inhabiting the Star Wars universe. You will
                            learn about their classification, what languages
                            they speak, as well as much more.
                        </p>

                        <div className="section_link">
                            <Link to={"/species"}>Go to Section</Link>
                        </div>
                    </div>
                    <div className="section_img species"></div>
                </div>
                <div className="section_container">
                    <div className="section_article">
                        <div className="section_article_title">
                            Section: Starships
                        </div>
                        <p className="section_article_text">
                            This section introduces you to the starships that
                            exist in the Star Wars universe. Learn about their
                            size, cost, maximum speed, and more.
                        </p>

                        <div className="section_link">
                            <Link to={"/starships"}>Go to Section</Link>
                        </div>
                    </div>
                    <div className="section_img starships"></div>
                </div>
                <div className="section_container">
                    <div className="section_article">
                        <div className="section_article_title">
                            Section: Vehicles
                        </div>
                        <p className="section_article_text">
                            In this section you will get acquainted with the
                            vehicles that exist in the Star Wars universe. Learn
                            about their size, cost, maximum speed, and more.
                        </p>

                        <div className="section_link">
                            <Link to={"/vehicles"}>Go to Section</Link>
                        </div>
                    </div>
                    <div className="section_img vehicles"></div>
                </div>
                <div className="section_container">
                    <div className="section_article">
                        <div className="section_article_title">
                            Section: Films
                        </div>
                        <p className="section_article_text">
                            In this section you will get acquainted with the
                            movies dedicated to the Star Wars universe. You will
                            learn their release date, who was the director and
                            producer of the film, and much more.
                        </p>

                        <div className="section_link">
                            <Link to={"/films"}>Go to Section</Link>
                        </div>
                    </div>
                    <div className="section_img films"></div>
                </div>
                <footer className="footer"></footer>
            </div> 
 */
