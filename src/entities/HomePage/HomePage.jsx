import { useState, useEffect } from "react";
import {SinglePost} from "../SinglePost/SinglePost.jsx";
import { getBlogs } from "../../services/fetchAPI.js";
import { Link } from "react-router-dom";
import './HomePage.css';

export const HomePage = () => {
    const [blogs, setBlogs] = useState([])


    useEffect (() => {
        getBlogs().then((blogs) => {
            setBlogs(blogs);
        });
    },[]);

    return (
        <div>
        <h3 className="post-title">POSTS</h3>
        {
            blogs.map((blog, index) => <SinglePost key={index} postData={blog} />)
        }
            <div className="btn-wrapper">
                <button className="btn-outline-secondary btn-lg  mt-5 ms-2 button-sticky"><Link className="btn-style" to="/post/new">Create new post</Link></button>
            </div>
        </div>
    )
}