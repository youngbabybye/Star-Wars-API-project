import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const PeopleDynamic = () => {
    const {id} = useParams();
    const [info, setInfo] = useState(null);
    const [peopleVehicles, setPeopleVehicles] = useState([]);
    const [peopleStarships, setPeopleStarships] = useState([]);
    const [homeWorld, setHomeWorld] = useState([]);

    useEffect(() => {
        fetch(`https://swapi.dev/api/people/${id}`)
        .then((res) => res.json())
        .then((data) => 
            {setInfo(data);
            data.vehicles.forEach((element) => {
                fetch(element).then((res) => res.json()).then((data) => setPeopleVehicles(vh => [...vh, data]))
            })
            data.starships.forEach((element) => {
                fetch(element).then((res) => res.json()).then((data) => setPeopleStarships(ss =>[...ss, data]))
            })
            fetch(data.homeworld).then((res) => res.json()).then((data) => setHomeWorld(hw => [...hw, data]))
        })
    }, [id])
    
    return (
        <div>
            <p>DynamicPage - {id}</p>
            {
                info && (
                    <>
                        <p>{info.gender}</p>
                        <p>{info.height}</p>
                        <p>{info.mass}</p>
                        {homeWorld.map((hww) => (
                            <p key={hww.url}> {hww.name} </p>
                        ))}
                        {peopleStarships.map((pplss) => (
                            <p key={pplss.url}> {pplss.name} </p>
                        ))}
                        {peopleVehicles.map((pplvhcl) => (
                            <p key={pplvhcl.url}> {pplvhcl.name} </p>
                        ))}
                    </>
                )
            }
        </div>
    )
}


export {PeopleDynamic}
