import { getAuthor } from "../../services/fetchAuthorPage";
import { useState, useEffect, Fragment } from "react";
import { Link } from "react-router-dom";
import { AuthorName } from "../AuthorName/AuthorName";
import { AuthorAddress } from "../AuthorAddress/AuthorAddress";
import { AuthorCompany } from "../AuthorCompany/AuthorCompany";

export const AuthorPage = (props) => {

    const [auth, setAuth] = useState(null);

    useEffect(() => {
        getAuthor(props.match.params.id)
            .then(single => setAuth(single));
    });

    return (
        !auth ? <h2>Loading</h2>
        :
        <Fragment>
            <div className="w-75 mx-auto mt-3">
                <p><Link to="/authors"> &#60; Back</Link></p>
                <AuthorName author={auth} />
                <AuthorAddress author={auth} />
                <AuthorCompany author={auth} />
            </div>
        </Fragment>
        
    )

}