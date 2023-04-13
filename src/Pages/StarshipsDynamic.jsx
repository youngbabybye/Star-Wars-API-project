import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const StarshipsDynamic = () => {
    const {id} = useParams();
    const [info, setInfo] = useState(null);
    const [pilots, setPilots] = useState([]);

    useEffect(() => {
        fetch(`https://swapi.dev/api/starships/${id}`)
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
            {
                info && (
                    <>
                        <p>Model: {info.model}</p>
                        <p>Model length, m: {info.length}</p>
                        <p>Max speed, kmph: {info.max_atmosphering_speed}</p>
                        <p>Number of passengers: {info.passengers}</p>
                        <p>Cost in credits: {info.cost_in_credits}</p>
                        <p>Pilots:</p>
                        {pilots.length > 0 && pilots.map((plt) => (
                            <p key={plt.url}> {plt.name} </p>
                        ))}
                        {pilots.length === 0 &&
                            <p>Unknown </p>}
                    </>
                )
            }
        </div>
    )
}


export {StarshipsDynamic}
