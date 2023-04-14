import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const FilmsDynamic = () => {
    const { id } = useParams();
    const [info, setInfo] = useState(null);
    const navigate = useNavigate();

    const goBack = () => navigate(-1);

    useEffect(() => {
        fetch(`https://swapi.dev/api/films/${id}`)
            .then((res) => res.json())
            .then((data) => {
                setInfo(data);
            });
    }, [id]);

    return (
        <div>
            {info && (
                <>
                    <div className="films_container">
                        <ul className="films_box">
                            <div className="films_header">
                                <p className="films_header__text">
                                    {info.title}
                                </p>
                            </div>
                            <li className="films_info">
                                <p className="films_info_title">
                                    {" "}
                                    Opening crawl
                                </p>
                                <p className="films_info_text">
                                    {info.opening_crawl}
                                </p>
                            </li>
                            <li className="films_info">
                                <p className="films_info_title"> Director:</p>
                                <p className="films_info_text">
                                    {info.director}
                                </p>
                            </li>
                            <li className="films_info">
                                <p className="films_info_title"> Producer:</p>
                                <p className="films_info_text">
                                    {info.producer}
                                </p>
                            </li>
                            <li className="films_info">
                                <p className="films_info_title">
                                    {" "}
                                    Release date:
                                </p>
                                <p className="films_info_text">
                                    {info.release_date}
                                </p>
                            </li>
                            <div className="btn">
                                <button onClick={goBack}>🢀</button>
                            </div>
                        </ul>
                        <div className={`films_image${info.episode_id}`}></div>
                    </div>
                </>
            )}
        </div>
    );
};

export { FilmsDynamic };
