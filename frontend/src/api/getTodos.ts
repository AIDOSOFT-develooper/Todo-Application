import axios from "axios";
import type { todo } from "../types/types";

const API = "http://localhost:5000/todos";

export const getTodos = async () =>
  await axios.get(`${API}`).then((response) => response.data);

export const postTodos = async (todo: todo) => {
  return await axios.post(`${API}/todos`, todo);
};

export const deletePost = async () => {
  return await axios.delete(`${API}/${1}`);
};
