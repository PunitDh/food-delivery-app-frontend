import JWTDecode from "jwt-decode";

export const formatCurrency = (amount) => {
  return (amount / 100).toFixed(2);
};

export const getDecodedJWT = (token) => {
  try {
    return JWTDecode(token);
  } catch (error) {
    return false;
  }
};

export const getUserNameFromJWT = () => {
  const token = localStorage.getItem(process.env.REACT_APP_TOKEN_NAME);
  const user = token && JWTDecode(token);
  // console.log(user);
  return user;
};
