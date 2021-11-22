import axios from "axios";

const url = "http://localhost:5000/posts";

export const fetchPosts = () => axios.get(url);
export const createPost = (payload) => {
  const formData = new FormData();
  formData.append("creator", payload.creator);
  formData.append("title", payload.title);
  formData.append("message", payload.message);
  formData.append("tags", payload.tags);
  formData.append("selectedFile", payload.selectedFile);
  const config = {
    headers: {
      "content-type": "multipart/form-data",
    },
  };
  axios.post(url, formData, config);
};
