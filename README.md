
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


#insted of a tag

<nav>
            <Link to="/">Home</Link>
            <Link to="/user">User</Link>
            <Link to="/about">About us</Link>
            <Link to="/contact">Contact us</Link>
</nav>

#outlet 
change the specific area