import React from "react"

import "./SinglePost.css"

export const SinglePost = (props) => {
    return (
    <div>
        <h3>
            {props.postData.title}
        </h3>
        <p>
            {props.postData.body}
        </p>
    </div>

    )
}