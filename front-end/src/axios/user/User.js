import request from "../axios";

export const getUsers = async () => {
  return request.get(`users`);
};

export const createUser = (data) => {
  return request.post(`user`, data);
};
