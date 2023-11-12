#-----------------------------------------------------------------------------<br>
Import at main.jsx
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)

#-----------------------------_Link_-----------------------------------------------<br>
#insted of a tag

<nav>
            <Link to="/">Home</Link>
            <Link to="/user">User</Link>
            <Link to="/about">About us</Link>
            <Link to="/contact">Contact us</Link>
</nav>

#outlet 
change the specific area


#--------------------------------_fetch data_---------------------------------------------<br>
fetch data from json
      {
        path: '/user',
        loader: ()=> fetch('https://jsonplaceholder.typicode.com/users'),
        element: <User></User>
      }

    const users = useLoaderData(); // receiving function



#--------------------------------_dynamic routing_--------------------------------------------- <br>

      <Link to={`/user/${id}`}>Show Details</Link>

      {
        path: '/user/:userId',
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        element: <UserDetails></UserDetails>
      }

      const user = useLoaderData();


#---------------------------------------------_Navigate_------------------------------------
    const navigate = useNavigate();

    const handleShowDetails= () =>{
        navigate(`/post/${id}`);
    }

    <button onClick={handleShowDetails}>ShowDetails</button>