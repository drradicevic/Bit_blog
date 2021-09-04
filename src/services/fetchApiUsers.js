const endpoint = "https://jsonplaceholder.typicode.com/users";

export const getUsers = () => {
  return fetch(endpoint)
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
      return res;
    });
};
