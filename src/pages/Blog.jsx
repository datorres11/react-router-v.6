import { Link, useParams, useSearchParams } from "react-router-dom"
import { useFetch } from "../hooks/useFetch"
import { useEffect } from "react"

const Blog =()=>{
    const [searchParams, setSearchParams] = useSearchParams()
    const {data,loading,error} = useFetch("https://jsonplaceholder.typicode.com/posts")

    if(loading) return <p>Loading data...</p>
    if(error) return <p>error...</p>

    
    /*useEffect(()=>{
        setSearchParams({filter:"ignacion"})
    },[searchParams])
    */

    const handleChange=(e)=>{
        let filter= e.target.value
        if(filter){
            setSearchParams({filter})
        }else{
            setSearchParams({})
        }
    }
    return(
        <>
            <h1>Blog</h1>
            <input type="text" name="" value={searchParams.get("filter")||""} onChange={handleChange} className="form-control"/>
            <ul className="list-group">
                {
                data.filter((item)=>{
                    let filter= searchParams.get("filter")
                    if(!filter) return true
                    let name = item.title.toLowerCase()
                    return name.startsWith(filter.toLowerCase())
                }).map((post)=>(
                    <Link className="list-group-item" to={`/blog/${post.id}`} key={post.id}>{post.id}-{post.title}</Link>
                ))
            }
            </ul>
        </>
    )
}
export default Blog