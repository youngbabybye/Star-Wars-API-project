import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {Pagination, Stack, Container} from "@mui/material"

const Base_URL = "https://swapi.dev/api/starships/?page=";

const Starships = () => {
    const [starships, setStarships] = useState([]);
    const [page, setPage] = useState(1);
    const [pageQty, setPageQty] = useState(0);

    useEffect(() => {
        fetch(Base_URL + `${page}`)
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
            setStarships(data.results)
            setPageQty(data.count)  
        })
        .catch((err) => {
            console.warn(err);
            alert("Ошибка при получении данных");
        })
    }, [page]);
    return (
        <div>
            <h1>starships</h1>
            {
                starships && starships.map(starship =>(
                    <Link key={starship.name} to={`/starships/${starship.url.slice(32)}`}>
                        <li>
                            {starship.name}
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


export {Starships}