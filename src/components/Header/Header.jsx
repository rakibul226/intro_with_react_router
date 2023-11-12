import { Link, NavLink } from 'react-router-dom';
import '../../css/mycss.css'
const Header = () => {
    return (
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/user">User</NavLink>
            <NavLink to="/post">Post</NavLink>
            <NavLink to="/about">About us</NavLink>
            <NavLink to="/contact">Contact us</NavLink>
            
        </nav>
    );
};

export default Header;