import axios from "axios";

export const createNewUser = (user) => {
  return axios.post(`${process.env.REACT_APP_BACKEND_URL}/auth/register`, user);
};
