import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const VehiclesDynamic = () => {
    const {id} = useParams();
    const [info, setInfo] = useState(null);
    const [pilots, setPilots] = useState([]);

    useEffect(() => {
        fetch(`https://swapi.dev/api/vehicles/${id}`)
        .then((res) => res.json())
        .then((data) => 
            {setInfo(data);
            data.pilots.forEach((element) => {
                fetch(element).then((res) => res.json()).then((data) => setPilots(pl => [...pl, data]))
            })
        })
    }, [id])
    
    return (
        <div>
            <p>Vehicles Page - {id}</p>
            {
                info && (
                    <>
                        <p>{info.model}</p>
                        <p>{info.lenght}</p>
                        <p>{info.max_atmosphering_speed}</p>
                        <p>{info.passengers}</p>
                        <p>{info.cost_in_credits}</p>
                        {pilots.length > 0 && pilots.map((plt) => (
                            <p key={plt.url}> {plt.name} </p>
                        ))}
                        {pilots.length === 0 && 
                        <p> unknown </p>}
                    </>
                )
            }
        </div>
    )
}


export {VehiclesDynamic}
