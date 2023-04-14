import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const VehiclesDynamic = () => {
    const { id } = useParams();
    const [info, setInfo] = useState(null);
    const [pilots, setPilots] = useState([]);
    const navigate = useNavigate();

    const goBack = () => navigate(-1);

    useEffect(() => {
        fetch(`https://swapi.dev/api/vehicles/${id}`)
            .then((res) => res.json())
            .then((data) => {
                setInfo(data);
                data.pilots.forEach((element) => {
                    fetch(element)
                        .then((res) => res.json())
                        .then((data) => setPilots((pl) => [...pl, data]));
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
                                    Model:
                                </p>
                                <p className="card_info_individual__text">
                                    {info.model[0].toUpperCase() +
                                        info.model.slice(1)}
                                </p>
                            </li>
                            <li className="card_info_individual">
                                <p className="card_info_individual__title">
                                    Length, m:
                                </p>
                                <p className="card_info_individual__text">
                                    {info.length}
                                </p>
                            </li>
                            <li className="card_info_individual">
                                <p className="card_info_individual__title">
                                    Max Speed, kmph:
                                </p>
                                <p className="card_info_individual__text">
                                    {info.max_atmosphering_speed}
                                </p>
                            </li>
                            <li className="card_info_individual">
                                <p className="card_info_individual__title">
                                    Number of passengers:
                                </p>
                                <p className="card_info_individual__text">
                                    {info.passengers}
                                </p>
                            </li>
                            <li className="card_info_individual">
                                <p className="card_info_individual__title">
                                    Cost in credits:
                                </p>

                                <p className="card_info_individual__text">
                                    {info.cost_in_credits}
                                </p>
                            </li>

                            <li className="card_info_individual">
                                <p className="card_info_individual__title">
                                    Pilots:
                                </p>
                                {pilots.length > 0 &&
                                    pilots.map((plt) => (
                                        <p
                                            className="card_info_individual__text"
                                            key={plt.url}
                                        >
                                            {" "}
                                            {plt.name}{" "}
                                        </p>
                                    ))}
                                {pilots.length === 0 && (
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

export { VehiclesDynamic };
