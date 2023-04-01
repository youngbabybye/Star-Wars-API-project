import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const People = () => {
    const [people, setPeople] = useState([]);

    useEffect(() => {
        fetch(`https://swapi.dev/api/people/14/`)
        .then((res) => res.json())
        .then((data => setPeople(data)))
        .catch((err) => {
            console.warn(err);
            alert("Ошибка при получении данных");
        })
    }, []);
    return (
        <div>
            <h1>People</h1>
            {
                people && people.map(person =>(
                    <Link key={person.id} to={`/people/${person.id}`}>
                        <li>
                            {person.name}
                        </li>
                    </Link>
                ))
            }
        </div>
    )
}


export {People}