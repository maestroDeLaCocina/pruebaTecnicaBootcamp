import { useEffect, useState } from "react";



export const CrudAPI = () => {
    const [posts, setPost] = useState([])
    const [error, setError] = useState("")

    useEffect(() => {
        handleFetchPost();
    }, [])

    const handleFetchPost = async () => {
        try {
            const url = 'https://jsonplaceholder.typicode.com/posts'
            const response = await fetch(url)
            const data = await response.json()
            setPost(data)

        } catch (error) {
            setError(error.message)
        }

    }

    const handleDeletePost = async (postId) => {
        try {
            const url = 'https://jsonplaceholder.typicode.com/posts/${postId}'
            const response = await fetch(url,{method:"DELETE"})
            setPosts((prevPosts) => prevPosts.filter((post) => post.id !== postId));
        } catch (error) {
            setError(error.message)
        }
        
    }

    return (
        <>
            <h1>Prueba Bootcamp</h1>
            {error && <p style={{ color: "red" }}>{error}</p>}
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
        </>
    )
}