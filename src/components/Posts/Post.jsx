import '../../css/mycss.css';
import { Link, useNavigate } from 'react-router-dom';

const Post = ({post}) => {
    const {id,title} = post;

    const navigate = useNavigate();

    const handleShowDetails= () =>{
        navigate(`/post/${id}`);
    }

    return (
        <div className='postsClass'>
            <h2>Post of id: {id}</h2>
            <p>{title}</p>
            {/* <Link to={`/post/${id}`}>Show Post</Link> */}
            <button onClick={handleShowDetails}>ShowDetails</button>
            
        </div>
    );
};
export default Post;