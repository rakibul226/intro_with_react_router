import { useLoaderData } from "react-router-dom";
import User from "./User";
import '../css/mycss.css'

const Users = () => {

    const users = useLoaderData();


    return (
        <>
         <h2>Total Users {users.length}</h2> 
        <div className="usersClass">  
            {
                users.map(user => <User user={user} key={user.id}></User>)
            }         
        </div>
        
        </>
       
    );
};

export default Users;