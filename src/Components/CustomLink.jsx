import {Link, useMatch} from "react-router-dom"

const CustomLink = ({children, to, ...props}) => {
    const match = useMatch(to);

    return (
        <Link 
        to={to}
        style={{
            color: match ? "#00bfff" : "red",
        }}
        {...props}
        >
            {children}
        </Link>
    )
}
export {CustomLink}