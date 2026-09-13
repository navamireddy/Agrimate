import axios from 'axios';

const BASE_URL = '/api/auth';

/** Register a new user */
export const register = async (data) => {
  const response = await axios.post(`${BASE_URL}/register`, data);
  return response.data;
};

/** Log in — backend now returns { token, user } */
export const login = async (data) => {
  const response = await axios.post(`${BASE_URL}/login`, data);
  return response.data; // { token, user: { name, email } }
};

/** Store the JWT token */
export const saveToken = (token) => {
  localStorage.setItem('agrimate_token', token);
};

/** Retrieve the stored JWT token */
export const getToken = () => localStorage.getItem('agrimate_token');

/** Remove the JWT token (logout) */
export const logout = () => {
  localStorage.removeItem('agrimate_token');
  localStorage.removeItem('agrimate_user');
};

/** Save user info */
export const saveUser = (user) => {
  localStorage.setItem('agrimate_user', JSON.stringify(user));
};

/** Retrieve saved user info */
export const getUser = () => {
  const user = localStorage.getItem('agrimate_user');
  return user ? JSON.parse(user) : null;
};

/** Check if user is authenticated */
export const isAuthenticated = () => !!getToken();
