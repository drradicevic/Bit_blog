import { useState, useEffect } from "react";
import {SinglePost} from "../SinglePost/SinglePost.jsx";
import { getBlogs } from "../../services/fetchAPI.js";


export const HomePage = () => {
    const [blogs, setBlogs] = useState([])


    useEffect (() => {
        getBlogs().then((blogs) => {
            setBlogs(blogs);
        });
    },[]);

    return (
        <div>
        <h3>POSTS</h3>
        {
            blogs.map((blog) => <SinglePost postData={blog} />)
        }
        
        </div>
    )
}