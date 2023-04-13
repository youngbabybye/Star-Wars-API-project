import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Pagination, Stack, Container } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
    palette: {
        primary: {
            main: "#FFD700",

            contrastText: "#000",
        },
        text: {
            primary: "#FFD700",
        },
    },
    typography: {
        fontFamily: "'DM Sans', sans-serif",
        fontSize: 16,
    },
});

const Base_URL = "https://swapi.dev/api/planets/?page=";

const Planets = () => {
    const [planets, setPlanets] = useState([]);
    const [page, setPage] = useState(1);
    const [pageQty, setPageQty] = useState(0);

    useEffect(() => {
        fetch(Base_URL + `${page}`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setPlanets(data.results);
                setPageQty(data.count);
            })
            .catch((err) => {
                console.warn(err);
                alert("Ошибка при получении данных");
            });
    }, [page]);
    return (
        <>
            <div className="planets_container">
                <ul className="planets_main_content__ul">
                    {planets &&
                        planets.map((planet) => (
                            <Link
                                className="planets_main_content__link"
                                key={planet.name}
                                to={`/planets/${planet.url.slice(30)}`}
                            >
                                <li className="planets_main_content__list">
                                    <h3 className="planets_main_content__text">
                                        {planet.name}
                                    </h3>
                                </li>
                            </Link>
                        ))}
                </ul>
            </div>
            <Container className="planets_container">
                <Stack className="planets_pagination_container" spacing={2}>
                    <ThemeProvider theme={theme}>
                        {!!pageQty && (
                            <Pagination
                                count={
                                    pageQty % 10 === 0
                                        ? pageQty / 10
                                        : Math.ceil(pageQty / 10)
                                }
                                page={page}
                                onChange={(_, num) => setPage(num)}
                                color="primary"
                                variant="outlined"
                                size="large"
                            />
                        )}
                    </ThemeProvider>
                </Stack>
            </Container>
        </>
    );
};

export { Planets };
