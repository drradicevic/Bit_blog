import { Link } from "react-router-dom";


export const SingleAuthor = (props) => {

    return (
        <div className="wrapper">
        <h3>
           
            <Link to={`/authors/${props.authorData.id}`}> {props.authorData.name}</Link>
        </h3>
        
    </div>
    )
}