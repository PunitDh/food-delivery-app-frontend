import axios from "axios";

export const createNewUser = (user) => {
  return axios.post(`${process.env.REACT_APP_BACKEND_URL}/auth/register`, user);
};

export const loginUser = (user) => {
  return axios.post(`${process.env.REACT_APP_BACKEND_URL}/auth/login`, user);
};
