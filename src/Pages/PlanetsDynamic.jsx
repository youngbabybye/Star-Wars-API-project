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
                    <div className="planets_container">
                        <ul className="planets_page_content__ul">
                            <li className="planets_page_content">
                                <h2>{info.name}</h2>
                            </li>
                            <li className="planets_page_content__list">
                                <h3>Climate:</h3>
                                <p>
                                    {info.climate[0].toUpperCase() +
                                        info.climate.slice(1)}
                                </p>
                            </li>
                            <li className="planets_page_content__list">
                                <h3>Terrain:</h3>
                                <p>
                                    {info.terrain[0].toUpperCase() +
                                        info.terrain.slice(1)}
                                </p>
                            </li>
                            <li className="planets_page_content__list">
                                <h3>Population, units:</h3>
                                <p>{info.population}</p>
                            </li>
                            <li className="planets_page_content__list">
                                <h3>Diameter, km:</h3>
                                <p>{info.diameter}</p>
                            </li>
                            <li className="planets_page_content__list">
                                <h3>Residents:</h3>

                                {resident.length > 0 &&
                                    resident.map((rsd) => (
                                        <p key={rsd.url}> {rsd.name}</p>
                                    ))}
                                {resident.length === 0 && <p>Unknown</p>}
                            </li>

                            <button onClick={goBack}>Go back</button>
                        </ul>
                    </div>
                </>
            )}
        </div>
    );
};

export { PlanetsDynamic };
