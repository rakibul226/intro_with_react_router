import { Link } from 'react-router-dom';
import '../../css/mycss.css'
const Header = () => {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/user">User</Link>
            <Link to="/post">Post</Link>
            <Link to="/about">About us</Link>
            <Link to="/contact">Contact us</Link>
        </nav>
    );
};

export default Header;