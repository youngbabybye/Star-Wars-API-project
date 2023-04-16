import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const PlanetsDynamic = () => {
    const { id } = useParams();
    const [info, setInfo] = useState(null);
    const [resident, setResident] = useState([]);
    const navigate = useNavigate();

    const goBack = () => navigate(-1);

    useEffect(() => {
        fetch(`https://swapi.dev/api/planets/${id}`)
            .then((res) => res.json())
            .then((data) => {
                setInfo(data);
                data.residents.forEach((element) => {
                    fetch(element)
                        .then((res) => res.json())
                        .then((data) => setResident((rs) => [...rs, data]));
                });
            });
    }, [id]);

    return (
        <div>
            {info && (
                <>
                    <div className="container">
                        <ul className="card_box_individual">
                            <div className="card_header_individual">
                                <h2 className="card_header_individual__text">
                                    {info.name}
                                </h2>
                            </div>
                            <li className="card_info_individual">
                                <p className="card_info_individual__title">
                                    Climate
                                </p>
                                <p className="card_info_individual__text">
                                    {info.climate[0].toUpperCase() +
                                        info.climate.slice(1)}
                                </p>
                            </li>
                            <li className="card_info_individual">
                                <p className="card_info_individual__title">
                                    Population, units:
                                </p>
                                <p className="card_info_individual__text">
                                    {info.population}
                                </p>
                            </li>
                            <li className="card_info_individual">
                                <p className="card_info_individual__title">
                                    Diameter, km:
                                </p>
                                <p className="card_info_individual__text">
                                    {info.diameter}
                                </p>
                            </li>
                            <li className="card_info_individual">
                                <p className="card_info_individual__title">
                                    Terrain
                                </p>
                                <p className="card_info_individual__text">
                                    {info.terrain[0].toUpperCase() +
                                        info.terrain.slice(1)}
                                </p>
                            </li>

                            <li className="card_info_individual">
                                <p className="card_info_individual__title">
                                    Residents:
                                </p>
                                {resident.length > 0 &&
                                    resident.map((rsd) => (
                                        <p
                                            className="card_info_individual__text"
                                            key={rsd.url}
                                        >
                                            {" "}
                                            {rsd.name}{" "}
                                        </p>
                                    ))}
                                {resident.length === 0 && (
                                    <p className="card_info_individual__text">
                                        Unknown{" "}
                                    </p>
                                )}
                            </li>

                            <div className="btn">
                                <button onClick={goBack}>🢀</button>
                            </div>
                        </ul>
                    </div>
                </>
            )}
        </div>
    );
};

export { PlanetsDynamic };
