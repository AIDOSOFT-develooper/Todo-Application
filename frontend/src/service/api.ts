import axios from "axios";
import type { todo } from "../types/types";

const API = "http://localhost:5000/todos";

export const getTodos = async () => {
  const response = await axios.get(`${API}`);
  return response.data;
};

export const postTodos = async (todo: todo) => {
  const response = await axios.post(`${API}/todos`, todo);
  return response.data;
};

export const deletePost = async (id: number) => {
  return await axios.delete(`${API}/${id}`);
};

export const patchTodo = async (id: number, todo: string) => {
  return await axios.patch(`${API}/${id}`, { todo: todo });
};
