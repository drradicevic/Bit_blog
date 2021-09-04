export const getPostsFromAuthor = (id) => {
  const endpoint = `https://jsonplaceholder.typicode.com/users/${id}/posts`;
  return fetch(endpoint)
    .then((response) => response.json())
    .then((posts) => posts);
};
