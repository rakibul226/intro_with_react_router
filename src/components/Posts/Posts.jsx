import { useLoaderData } from "react-router-dom";
import Post from "./Post";
import '../../css/mycss.css'

const Posts = () => {

    const posts = useLoaderData();
    return (
        <>
        <h2>Total Posts: {posts.length}</h2>
        <div className="usersClass">
            {
                posts.map(post => <Post key={post.id} post={post}></Post>)
            }
        </div>
        </>
        
    );
};

export default Posts;