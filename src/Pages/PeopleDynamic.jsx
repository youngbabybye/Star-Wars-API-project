import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const PeopleDynamic = () => {
    const { id } = useParams();
    const [info, setInfo] = useState(null);
    const [peopleVehicles, setPeopleVehicles] = useState([]);
    const [peopleStarships, setPeopleStarships] = useState([]);
    const [homeWorld, setHomeWorld] = useState([]);
    const navigate = useNavigate();

    const goBack = () => navigate(-1);

    useEffect(() => {
        fetch(`https://swapi.dev/api/people/${id}`)
            .then((res) => res.json())
            .then((data) => {
                setInfo(data);
                data.vehicles.forEach((element) => {
                    fetch(element)
                        .then((res) => res.json())
                        .then((data) =>
                            setPeopleVehicles((vh) => [...vh, data])
                        );
                });
                data.starships.forEach((element) => {
                    fetch(element)
                        .then((res) => res.json())
                        .then((data) =>
                            setPeopleStarships((ss) => [...ss, data])
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
                                    Gender:
                                </p>
                                <p className="card_info_individual__text">
                                    {info.gender[0].toUpperCase() +
                                        info.gender.slice(1)}
                                </p>
                            </li>
                            <li className="card_info_individual">
                                <p className="card_info_individual__title">
                                    Height, cm:
                                </p>
                                <p className="card_info_individual__text">
                                    {info.height}
                                </p>
                            </li>
                            <li className="card_info_individual">
                                <p className="card_info_individual__title">
                                    Mass, kg:
                                </p>
                                <p className="card_info_individual__text">
                                    {info.mass}
                                </p>
                            </li>
                            <li className="card_info_individual">
                                <p className="card_info_individual__title">
                                    Birth Year:
                                </p>
                                <p className="card_info_individual__text">
                                    {info.birth_year[0].toUpperCase() +
                                        info.birth_year.slice(1)}
                                </p>
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
                                        {hww.name[0].toUpperCase() +
                                            hww.name.slice(1)}{" "}
                                    </p>
                                ))}
                            </li>
                            <li className="card_info_individual">
                                <p className="card_info_individual__title">
                                    Vehicles:
                                </p>
                                {peopleVehicles.length > 0 &&
                                    peopleVehicles.map((vhl) => (
                                        <p
                                            className="card_info_individual__text"
                                            key={vhl.url}
                                        >
                                            {" "}
                                            {vhl.name}{" "}
                                        </p>
                                    ))}
                                {peopleVehicles.length === 0 && (
                                    <p className="card_info_individual__text">
                                        Unknown{" "}
                                    </p>
                                )}
                            </li>
                            <li className="card_info_individual">
                                <p className="card_info_individual__title">
                                    Starships:
                                </p>
                                {peopleStarships.length > 0 &&
                                    peopleStarships.map((ss) => (
                                        <p
                                            className="card_info_individual__text"
                                            key={ss.url}
                                        >
                                            {" "}
                                            {ss.name}{" "}
                                        </p>
                                    ))}
                                {peopleStarships.length === 0 && (
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

export { PeopleDynamic };
