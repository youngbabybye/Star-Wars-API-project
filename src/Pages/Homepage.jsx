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
                    <div className="portfolio">
                        <div className="containers">
                            <main className="gallery">
                                <div className="gallery__left">
                                    <img
                                        className="gallery__item"
                                        src={people}
                                        alt="Alt"
                                    />

                                    <div className="text-block gallery__item">
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
                                        className="gallery__item"
                                        src={species}
                                        alt="Alt"
                                    />
                                    <div className="text-block gallery__item">
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
                                        className="gallery__item"
                                        src={vehicles}
                                        alt="Alt"
                                    />
                                    <div className="text-block gallery__item last">
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

                                <div className="gallery__right">
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
                                        className="gallery__item"
                                        src={planets}
                                        alt="Alt"
                                    />
                                    <div className="text-block gallery__item">
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
                                        className="gallery__item"
                                        src={starships}
                                        alt="Alt"
                                    />

                                    <div className="text-block gallery__item">
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
