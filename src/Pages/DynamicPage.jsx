import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const DynamicPage = () => {
    const {id} = useParams();
    const [info, setInfo] = useState(null);
    const [veh, setVeh] = useState([]);

    useEffect(() => {
        fetch(`https://swapi.dev/api/people/${id}`)
        .then((res) => res.json())
        .then((data) => 
            {setInfo(data);
            data.vehicles.forEach((e) => {
                fetch(e).then((res) => res.json().then((data) => setVeh(q => [...q, data])))
            })
        })
    }, [id])
    return (
        <div>
            <p>DynamicPage - {id}</p>
            {
                info && (
                    <>
                        <p>{info.mass}</p>
                        <p>{info.gender}</p>
                        <p>{info.height}</p>
                        {veh.map((e) => (
                            <p key={e.url}>{e.name}</p>
                        ))}
                    </>
                )
            }
        </div>
    )
}


export {DynamicPage}
