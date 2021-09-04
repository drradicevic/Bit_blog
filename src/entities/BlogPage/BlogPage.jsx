import { Link } from "react-router-dom"
import { useState, useEffect, Fragment } from "react";
import { getBlogPage } from "../../services/fetchBlogPage"; 
import { getAuthor } from "../../services/fetchAuthorPage";
import { getPostsFromAuthor } from "../../services/getPostsFromAuthor";

import "./BlogPage.css"

export const BlogPage = (props) => {
    const [blogs, setBlogs] = useState(null)
    const [author, setAuthor] = useState(null)
    const [posts, setPosts] = useState([]);
        // console.log(blogs)
    
        useEffect (() => {
        getBlogPage(props.match.params.id).then((blogs) => {
            setBlogs(blogs);
        });
    });

    
    useEffect (() => {
        if (blogs) {
            getAuthor(blogs.id)
            .then(author => setAuthor(author))
        }
    },[blogs])
    
    useEffect(() => {
        if(author) {
            getPostsFromAuthor(author.id)
            .then(posts => setPosts(posts));
            localStorage.setItem("authorId", author.id)
        }
    },[author])


    return (
        !author
        ? <h1>Loading...</h1> :
        <Fragment>
        <div className="wrapper-blogPage">
           <p> <Link to= "/"> &#60; Back </Link></p>
            <h1 className="blogPage-title">{blogs.title}</h1>

           <p> <Link to={`/author/${author.id}`}> {author.name} </Link> </p>
            <p className="blogPage-body">{blogs.body}</p>
            </div>
            <div className="w-75 mx-auto mt-3">
                <h3>{posts.length} more posts from the same author</h3>
                <ul className="ps-0">
                    {
                        posts.map((post, index) => <li className="fs-5" key={index}> <Link to="/">{index+1}. {post.title.slice(0, 7)} - {post.body.slice(0, 15)}</Link></li>)
                    }
                </ul>
            </div>
            </Fragment>        
    )
}