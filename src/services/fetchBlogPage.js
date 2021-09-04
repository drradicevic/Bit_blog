export const getBlogPage = (id) => {
  const endpoint = `https://jsonplaceholder.typicode.com/posts/${id}`;
  return fetch(endpoint)
    .then((res) => res.json())
    .then((res) => {
      return res;
    });
};
