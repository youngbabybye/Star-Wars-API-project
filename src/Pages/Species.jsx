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

const Base_URL = "https://swapi.dev/api/species?page=";

const Species = () => {
    const [species, setSpecies] = useState([]);
    const [page, setPage] = useState(1);
    const [pageQty, setPageQty] = useState(0);

    useEffect(() => {
        fetch(Base_URL + `${page}`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setSpecies(data.results);
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
                    {species &&
                        species.map((spc) => (
                            <ul className="card_box">
                                <Link
                                    key={spc.name}
                                    to={`/species/${spc.url.slice(30)}`}
                                >
                                    <li className="card__header">
                                        <p className="card__header__text">
                                            {spc.name}
                                        </p>
                                    </li>
                                    <div className="card_info">
                                        <div className="card_info__div">
                                            <li className="info_box">
                                                <p>People:</p>
                                                <p>{spc.people.length}</p>
                                            </li>
                                            <li className="info_box">
                                                <p>Designation:</p>
                                                <p>
                                                    {spc.language[0].toUpperCase() +
                                                        spc.designation.slice(
                                                            1
                                                        )}
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
                                        to={`/species/?page=${item.page}`}
                                        {...item}
                                    />
                                )}
                            />
                        )}
                    </ThemeProvider>
                </Stack>
            </div>
            =
        </>
    );
};

export { Species };
