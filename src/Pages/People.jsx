import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
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

const Base_URL = "https://swapi.dev/api/people/?page=";

const People = () => {
    const [params] = useSearchParams();
    const [people, setPeople] = useState([]);
    const [page, setPage] = useState(parseInt(params.get("page") ?? 1));
    const [pageQty, setPageQty] = useState(0);
    useEffect(() => {
        fetch(Base_URL + `${page}`)
            .then((res) => res.json())
            .then((data) => {
                setPeople(data.results);
                setPageQty(data.count);
            })
            .catch(() => {
                alert("Ошибка при получении данных");
            });
    }, [page]);

    return (
        <>
            <div className="container">
                <div className="main__div">
                    {people &&
                        people.map((person) => (
                            <ul key={person.name} className="card_box">
                                <Link
                                    key={person.name}
                                    to={`/people/${person.url.slice(29)}`}
                                >
                                    <li className="card__header">
                                        <p className="card__header__text">
                                            {person.name}
                                        </p>
                                    </li>
                                    <div className="card_info">
                                        <div className="card_info__div">
                                            <li className="info_box">
                                                <p>Vehicles:</p>
                                                <p>{person.vehicles.length}</p>
                                            </li>
                                            <li className="info_box">
                                                <p>Starships:</p>
                                                <p>{person.starships.length}</p>
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
                                        to={`/people/?page=${item.page}`}
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

export { People };
