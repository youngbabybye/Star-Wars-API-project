import { Link, useMatch } from "react-router-dom";

const CustomLink = ({ children, to, ...props }) => {
    const match = useMatch({
        path: to,
        end: to.length === 1,
    });

    return (
        <Link
            reloadDocument
            to={to}
            style={{
                color: match ? "#00bfff" : "red",
                position: "relative",
            }}
            className={match ? "customlink" : "customlink-noactive"}
            {...props}
        >
            {children}
        </Link>
    );
};
export { CustomLink };
