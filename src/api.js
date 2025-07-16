import axios from "axios";

const API_URL = "http://localhost:3001/users";

export const getUsers = () => axios.get(API_URL);
export const addUser = (data) => axios.post(API_URL, data);
export const updateUser = (id, data) => axios.patch(`${API_URL}/${id}`, data);
export const deleteUser = (id) => axios.delete(`${API_URL}/${id}`);
