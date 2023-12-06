import { Link, useParams } from "react-router-dom"
import { useFetch } from "../../../react-useEffect/src/hooks/useFetch";

const BlogDetails = () => { 
    const params = useParams();
    console.log(params)
    const {data,loading,error}= useFetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)

    if(loading) return <p>Loading data...</p>
    if(error) return <p>error...</p>
    return( 
        <>
            <h1>{data.id}-{data.tittle}</h1>
            <p>{data.body}</p>
            <Link to="/blog">ir a blog</Link>
        </>
) }

export default BlogDetails