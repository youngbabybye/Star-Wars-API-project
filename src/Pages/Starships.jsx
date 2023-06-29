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

const Base_URL = "https://swapi.dev/api/starships/?page=";

const Starships = () => {
    const [params] = useSearchParams();
    const [starships, setStarships] = useState([]);
    const [page, setPage] = useState(parseInt(params.get("page") ?? 1));
    const [pageQty, setPageQty] = useState(0);

    useEffect(() => {
        fetch(Base_URL + `${page}`)
            .then((res) => res.json())
            .then((data) => {
                setStarships(data.results);
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
                    {starships &&
                        starships.map((starships) => (
                            <ul className="card_box">
                                <Link
                                    key={starships.name}
                                    to={`/starships/${starships.url.slice(32)}`}
                                >
                                    <li className="card__header">
                                        <p className="card__header__text">
                                            {starships.name}
                                        </p>
                                    </li>
                                    <div className="card_info">
                                        <div className="card_info__div">
                                            <li className="info_box">
                                                <p>Starship class:</p>
                                                <p>
                                                    {starships.starship_class}
                                                </p>
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
                                        to={`/starships/?page=${item.page}`}
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

export { Starships };
