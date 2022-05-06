import axios from "axios";

const config = {
  headers: {
    "Content-type": "multipart/form-data",
  },
};

export const url = "http://localhost:5000/posts";
// export const url = "/posts";

export const fetchPosts = () => axios.get(url);

export const createPost = newPost => axios.post(url, newPost, config);

export const deletePost = _id => axios.delete(`${url}/${_id}`);

export const updatePost = (_id, updatedPost) =>
  axios.patch(`${url}/${_id}`, updatedPost);

export const likePost = _id => axios.patch(`${url}/${_id}/likePost`);
