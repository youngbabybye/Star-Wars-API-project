import { Stack, Pagination, PaginationItem } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link } from "react-router-dom";

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

const MyPagination = (pageQty, setPage, page) => {
    return (
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
    );
};
export { MyPagination };
