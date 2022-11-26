import axios from "./axios";

export const registerHandler = async (data) => {
  const response = await axios.post(`auth/register`, data);
  return response.data;
};

export const loginHandler = async (data) => {
  const response = await axios.post(`auth/login`, data);
  return response.data;
};

export const getTodosHandler = async (data) => {
  const response = await axios.get(`todos/listTodos`, data);
  return response.data;
};

export const createTodoHandler = async (data) => {
  const response = await axios.post(`todos/createTodo`, data);
  return response.data;
};

export const deleteTodoHandler = async (id) => {
  const response = await axios.delete(`todos/deleteTodo/${id}`);
  return response.data;
};

export const markTodoCompleteHandler = async (id) => {
  const response = await axios.patch(`todos/markTodoCompleted/${id}`);
  return response.data;
};

export const markTodoUncompleteHandler = async (id) => {
  const response = await axios.patch(`todos/markTodoUncompleted/${id}`);
  return response.data;
};
