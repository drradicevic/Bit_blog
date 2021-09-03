import { useState, useEffect } from "react";
import { getUsers } from "../../services/fetchApiUsers";
import { SingleAuthor } from "../SingleAuthor/SingleAuthor";


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
        </div>
    )
}