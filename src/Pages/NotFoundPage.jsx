const NotFoundPage = () => {
    return (
        <div className="container">
            <div
                className="error_div"
                style={{
                    margin: "70px auto auto",

                    minHeight: "70px",
                    display: `flex`,
                    flexDirection: `column`,
                    alignItems: `center`,
                    justifyContent: "center",
                }}
            >
                <h1 className="error404">404: Not Found</h1>
            </div>
        </div>
    );
};

export { NotFoundPage };
