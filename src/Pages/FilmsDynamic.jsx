import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const FilmsDynamic = () => {
    const {id} = useParams();
    const [info, setInfo] = useState(null);

    useEffect(() => {
        fetch(`https://swapi.dev/api/films/${id}`)
        .then((res) => res.json())
        .then((data) => 
            {setInfo(data);
        })
    }, [id])
    
    return (
        <div>
            <p>Films Page - {id}</p>
            {
                info && (
                    <>
                        <p>{info.title}</p>
                        <p>{info.opening_crawl}</p>
                        <p>{info.director}</p>
                        <p>{info.producer}</p>
                        <p>{info.release_date}</p>
                    </>
                )
            }
        </div>
    )
}


export {FilmsDynamic}
