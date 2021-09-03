import { useState, useEffect } from "react";
import {SinglePost} from "../SinglePost/SinglePost.jsx";
import { getBlogs } from "../../services/fetchAPI.js";
import './HomePage.css';

export const HomePage = () => {
    const [blogs, setBlogs] = useState([])


    useEffect (() => {
        getBlogs().then((blogs) => {
            setBlogs(blogs);
        });
    },[]);

    return (
        <div >
        <h3 className="post-title">POSTS</h3>
        {
            blogs.map((blog, index) => <SinglePost key={index} postData={blog} />)
        }
        
        </div>
    )
}