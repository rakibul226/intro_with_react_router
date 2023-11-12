import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";

const Error = () => {

    const error = useRouteError();
    const {status,statusText} = error;
    return (
        <div>
            <h2>Ooops</h2>
            <h3>{status} {statusText}</h3>
            <Link to={`/`}>Go home</Link>
        </div>
    );
};

export default Error;