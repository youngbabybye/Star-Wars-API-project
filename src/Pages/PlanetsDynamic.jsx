import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const PlanetsDynamic = () => {
    const {id} = useParams();
    const [info, setInfo] = useState(null);
    const [resident, setResident] = useState([]);
    

    useEffect(() => {
        fetch(`https://swapi.dev/api/planets/${id}`)
        .then((res) => res.json())
        .then((data) => 
            {setInfo(data);
            data.residents.forEach((element) => {
                fetch(element).then((res) => res.json()).then((data) => setResident(rs => [...rs, data]))
            })
            
        })
    }, [id])
    
    return (
        <div>
            <p>PlanetsPage - {id}</p>
            {
                info && (
                    <>
                        <p>{info.climate}</p>
                        <p>{info.terrain}</p>
                        <p>{info.population}</p>
                        <p>{info.diameter}</p>
                        {resident.map((rsdnt) => (
                            <p key={rsdnt.url}> {rsdnt.name} </p>
                        ))}
                    </>
                )
            }
        </div>
    )
}


export {PlanetsDynamic}
