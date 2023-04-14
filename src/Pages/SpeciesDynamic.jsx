import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const SpeciesDynamic = () => {
    const { id } = useParams();
    const [info, setInfo] = useState(null);
    const [peopleSpecies, setPeopleSpecies] = useState([]);
    const [homeWorld, setHomeWorld] = useState([]);
    const navigate = useNavigate();

    const goBack = () => navigate(-1);

    useEffect(() => {
        fetch(`https://swapi.dev/api/species/${id}`)
            .then((res) => res.json())
            .then((data) => {
                setInfo(data);
                data.people.forEach((element) => {
                    fetch(element)
                        .then((res) => res.json())
                        .then((data) =>
                            setPeopleSpecies((unit) => [...unit, data])
                        );
                });
                fetch(data.homeworld)
                    .then((res) => res.json())
                    .then((data) => setHomeWorld((hw) => [...hw, data]));
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
                                    Classification:
                                </p>
                                <p className="card_info_individual__text">
                                    {info.classification[0].toUpperCase() +
                                        info.classification.slice(1)}
                                </p>
                            </li>
                            <li className="card_info_individual">
                                <p className="card_info_individual__title">
                                    Language:
                                </p>
                                <p className="card_info_individual__text">
                                    {info.language}
                                </p>
                            </li>
                            <li className="card_info_individual">
                                <p className="card_info_individual__title">
                                    Average height, cm:
                                </p>
                                <p className="card_info_individual__text">
                                    {info.average_height}
                                </p>
                            </li>
                            <li className="card_info_individual">
                                <p className="card_info_individual__title">
                                    Average lifespan:
                                </p>
                                <p className="card_info_individual__text">
                                    {info.average_lifespan}
                                </p>
                            </li>
                            <li className="card_info_individual">
                                <p className="card_info_individual__title">
                                    People:
                                </p>
                                {peopleSpecies.map((unit) => (
                                    <p
                                        className="card_info_individual__text"
                                        key={unit.url}
                                    >
                                        {unit.name}{" "}
                                    </p>
                                ))}
                            </li>
                            <li className="card_info_individual">
                                <p className="card_info_individual__title">
                                    Homeworld:
                                </p>
                                {homeWorld.map((hww) => (
                                    <p
                                        className="card_info_individual__text"
                                        key={hww.url}
                                    >
                                        {hww.name}
                                    </p>
                                ))}
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

export { SpeciesDynamic };
/*
                        <p>Classification: {info.classification}</p>
                        
                        {homeWorld.map((hww) => (
                            <p key={hww.url}>Homeworld: {hww.name} </p>
                        ))}
                        <p>Language: {info.language}</p>
                        <p>Average height, cm: {info.average_height}</p>
                        <p>Average lifespan, years: {info.average_lifespan}</p>
                        <p>People:</p>
                        {peopleSpecies.map((unit) => (
                           <p key={unit.url}>{unit.name} </p>
                        ))}
*/
