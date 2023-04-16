import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Pagination, Stack, PaginationItem } from "@mui/material";
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
            <div className="container">
                <div className="main__div">
                    {planets &&
                        planets.map((planet) => (
                            <ul key={planet.name} className="card_box">
                                <Link
                                    key={planet.name}
                                    to={`/planets/${planet.url.slice(30)}`}
                                >
                                    <li className="card__header">
                                        <p className="card__header__text">
                                            {planet.name}
                                        </p>
                                    </li>
                                    <div className="card_info">
                                        <div className="card_info__div">
                                            <li className="info_box">
                                                <p>Rotation period:</p>
                                                <p>{planet.rotation_period}</p>
                                            </li>
                                            <li className="info_box">
                                                <p>Orbital period:</p>
                                                <p>{planet.orbital_period}</p>
                                            </li>
                                        </div>
                                    </div>
                                </Link>
                            </ul>
                        ))}
                </div>

                <Stack className="pagination_container" spacing={2}>
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
                                renderItem={(item) => (
                                    <PaginationItem
                                        className="pag_item"
                                        component={Link}
                                        to={`/planets/?page=${item.page}`}
                                        {...item}
                                    />
                                )}
                            />
                        )}
                    </ThemeProvider>
                </Stack>
            </div>
        </>
    );
};

export { Planets };
