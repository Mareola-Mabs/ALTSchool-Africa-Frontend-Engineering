// auth.js
export const getUser = () => {
  const user = localStorage.getItem("user");
  return user ? JSON.parse(user) : null;
};

export const getAccessToken = () => {
  return localStorage.getItem("accessToken");
};

export const isAuthenticated = () => {
  return !!localStorage.getItem("accessToken");
};
