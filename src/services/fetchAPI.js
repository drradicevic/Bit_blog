const endPoint = "https://jsonplaceholder.typicode.com/posts";

export const getBlogs = () => {
  return fetch(endPoint)
    .then((res) => res.json())
    .then((res) => {
      // console.log(res);
      return res;
    });
};

// const endPoint = "https://jsonplaceholder.typicode.com/posts";

// export const getUsers = () => {
//   return fetch(endPoint)
//     .then((res) => res.json())
//     .then((res) => res);
// };
// console.log(getUsers());
