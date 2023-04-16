import { Link } from "react-router-dom";

const Homepage = () => {
    return (
        <>
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
        </>
    );
};

export { Homepage };

/*
            <h1>Homepage</h1>
            <p>Welcome to the home page! 
               This site is dedicated to the theme of Star Wars. 
               You can find the information you are interested in the appropriate sections.</p>
*/
