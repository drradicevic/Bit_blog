export const AuthorCompany = (props) => {
    return (
        <div>
            <h2>Company</h2>
            <p>{props.author.company.name}</p>
            <p>{props.author.company.catchPhrase}</p>
        </div>
    )
}