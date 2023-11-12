import { useLoaderData, useNavigate } from "react-router-dom";


const UserDetails = () => {
    const user = useLoaderData();

    const navigate = useNavigate();

    const handleBackBtn =() =>{
        navigate(-1)
    }


    const {name,website} = user;
    return (
        <div>
            <h1>Details about user: {name}</h1>
            <h3>Visit us on: {website}</h3>
            <button onClick={handleBackBtn}>Go back</button>
        </div>
    );
};

export default UserDetails;