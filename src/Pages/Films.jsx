import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {Pagination, Stack, Container} from "@mui/material"

const Base_URL = "https://swapi.dev/api/films?page=";

const Films = () => {
    const [films, setFilms] = useState([]);
    const [page, setPage] = useState(1);
    const [pageQty, setPageQty] = useState(0);

    useEffect(() => {
        fetch(Base_URL + `${page}`)
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
            setFilms(data.results)
            setPageQty(data.count)  
        })
        .catch((err) => {
            console.warn(err);
            alert("Ошибка при получении данных");
        })
    }, [page]);
    return (
        <div>
            <h1>Films</h1>
            {
                films && films.map(movie =>(
                    <Link key={movie.episode_id} to={`/films/${movie.url.slice(28)}`}>
                        <li>
                            {movie.title}
                        </li>
                    </Link>
                
                ))
            }
            <Container>
                <Stack spacing={2}>
                    {
                        !!pageQty && (
                            <Pagination count={(pageQty % 10 === 0) ? pageQty / 10 : Math.ceil((pageQty / 10)) } page={page} onChange={(_, num) => setPage(num)}/>
                        )
                    }
                </Stack>
            </Container>
        </div>
    )
}


export {Films}