export const getAuthor = (id) => {
  const endpoint = `https://jsonplaceholder.typicode.com/users/${id}`;
  return fetch(endpoint)
    .then((res) => res.json())
    .then((res) => {
      //   console.log(res);
      return res;
    });
};
