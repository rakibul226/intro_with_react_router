import { useLoaderData, useNavigate } from "react-router-dom";
const PostDetails = () => {

    const PostDetails = useLoaderData();
    const navigate = useNavigate();

    const handleNavigate = () => {
            navigate(-1);
    }

    const {id,body} = PostDetails;
    return (
        <div>
            <h2>Post details of id: {id}</h2>
            <p>{body}</p>
            <button onClick={handleNavigate}>Go back</button>
        </div>
    );
};

export default PostDetails;