import { Link } from "react-router-dom"

import "./NotFoundPage.css"

export const NotFoundPage = () => {
    return <div className="wrapper-not-found-page">
        <h2 className="title-not-found-page"> ERROR 404: Page Not Found</h2>
        <p className="p-not-found-page"><Link to="/">Back to home</Link></p>
    </div>
}