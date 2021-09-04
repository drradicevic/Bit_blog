export const AuthorAddress = (props) => {
    return (
        <div>
            <h2>Address</h2>
            <p>street: {props.author.address.street}</p>
            <p>city: {props.author.address.city}</p>
            <p>zipcode: {props.author.address.zipcode}</p>
        </div>
    )
}