import { useState, useEffect } from "react";
import { getUsers } from "../../services/fetchApiUsers";
import { SingleAuthor } from "../SingleAuthor/SingleAuthor";
import { Link } from "react-router-dom";

import "./Authors.css"


export const Authors = () => {
    const [authors, setAuthors] = useState([]);

    useEffect (() => {
        getUsers().then((users) => {
            setAuthors(users);
        });
    },[]);

    return ( 
        <div>
            <h3 className="post-title"> AUTHORS ({authors.length}) </h3>
            {
                authors.map((user, index) => <SingleAuthor key={index} authorData={user} />)
            }
            <div className="btn-wrapper-auth">
                <button className="btn-outline-secondary btn-lg  mt-5 ms-2"><Link className="btn-style-auth" to="/post/new">Create new post</Link></button>
            </div>
        </div>
    )
}