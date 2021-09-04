import { Link } from "react-router-dom"
import { useState, useEffect } from "react";
import { getBlogPage } from "../../services/fetchBlogPage"; 
import { getAuthor } from "../../services/fetchAuthorPage";

import "./BlogPage.css"

export const BlogPage = (props) => {
    const [blogs, setBlogs] = useState(null)
    const [author, setAuthor] = useState(null)
    const [posts, setPosts] = useState([]);
        console.log(blogs)
        useEffect (() => {
        getBlogPage(props.match.params.id).then((blogs) => {
            setBlogs(blogs);
        });
    },[]);

    
    useEffect (() => {
        if (blogs) {
            getAuthor(blogs.id).
            then(author => setAuthor(author))
        }
    },[blogs])
    

    // useEffect (() => {
    //     getAuthor(blogs.userId).then((author) => {
    //         setAuthor(author);
    //     });
    // },[blogs]);

    return (
        !author
        ? <h1>Loading...</h1> :
        <div className="wrapper-blogPage">
           <p> <Link to= "/"> &#60; Back </Link></p>
            <h1 className="blogPage-title">{blogs.title}</h1>

           <p> <Link> {author.name} </Link> </p>
            <p className="blogPage-body">{blogs.body}</p>
        </div>
    )
}