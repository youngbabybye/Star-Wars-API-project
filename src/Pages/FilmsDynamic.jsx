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
            {
                info && (
                    <>
                        <p>Title: {info.title}</p>
                        <p>Opening crawl: {info.opening_crawl}</p>
                        <p>Director: {info.director}</p>
                        <p>Producer: {info.producer}</p>
                        <p>Release date: {info.release_date}</p>
                    </>
                )
            }
        </div>
    )
}


export {FilmsDynamic}
