import { getAuthor } from "../../services/fetchAuthorPage";
import { useState, useEffect, Fragment } from "react";


export const AuthorPage = () => {

    const [auth, setAuth] = useState(null);

    useEffect(() => {
        getAuthor(props.location.state.author.id)
            .then(single => setAuth(single));
    }, []);

    return (
        !singleAuthor ? <h2>Loading</h2>
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