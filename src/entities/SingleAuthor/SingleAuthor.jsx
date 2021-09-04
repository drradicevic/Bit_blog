import { Link } from "react-router-dom";

import "./SingleAuthor.css"


export const SingleAuthor = (props) => {

    return (
        <div className="wrapper-authors">
        <h3>
           
            <Link className="title-authors" to={`/author/${props.authorData.id}`}> {props.authorData.name}</Link>
        </h3>
        
    </div>
    )
}