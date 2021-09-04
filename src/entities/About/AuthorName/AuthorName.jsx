export const AuthorName = (props) => {
  return (
    <div>
      <h3>{props.author.name}</h3>
      <p>username: {props.author.username}</p>
      <p>email: {props.author.email.toLowerCase()}</p>
      <p>phone: {props.author.phone}</p>
    </div>
  );
};
