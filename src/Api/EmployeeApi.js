import axios from "axios";
const url = `/employee`;

export const getEmployees = () => axios.get(url);

export const deleteEmployee = _id => axios.delete(`${url}/${_id}`);

export const updateEmployee = employee =>
  axios.put(`${url}/${employee._id}`, employee);

export const createEmployee = newEmployee => axios.post(url, newEmployee);
