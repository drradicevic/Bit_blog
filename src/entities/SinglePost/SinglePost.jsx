import React from "react"
import { Link } from "react-router-dom";

import "./SinglePost.css"

export const SinglePost = (props) => {
    return (
    <div className="wrapper">
        <h3>
           
            <Link className="title" to={`/blog/${props.postData.id}`}> {props.postData.title}</Link>
        </h3>
        <p>
            {props.postData.body}
        </p>
    </div>

    )
}