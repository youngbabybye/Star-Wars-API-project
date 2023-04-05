import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const SpeciesDynamic = () => {
    const {id} = useParams();
    const [info, setInfo] = useState(null);
    const [peopleSpecies, setPeopleSpecies] = useState([]);
    const [homeWorld, setHomeWorld] = useState([]);


    useEffect(() => {
        fetch(`https://swapi.dev/api/species/${id}`)
        .then((res) => res.json())
        .then((data) => 
            {setInfo(data);
            data.people.forEach((element) => {
                fetch(element).then((res) => res.json()).then((data) => setPeopleSpecies(unit => [...unit, data]))
            })
            fetch(data.homeworld).then((res) => res.json()).then((data) => setHomeWorld(hw => [...hw, data]))

        })
    }, [id])
    
    return (
        <div>
            <p>Species Page - {id}</p>
            {
                info && (
                    <>
                        <p>{info.classification}</p>
                        <p>{info.designation}</p>
                        {homeWorld.map((hww) => (
                            <p key={hww.url}> {hww.name} </p>
                        ))}
                        <p>{info.language}</p>
                        <p>{info.average_height}</p>
                        <p>{info.average_lifespan}</p>
                        {peopleSpecies.map((unit) => (
                            <p key={unit.url}> {unit.name} </p>
                        ))}
                    </>
                )
            }
        </div>
    )
}


export {SpeciesDynamic}
