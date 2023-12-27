import axios from "axios";
import { UserResultInterface, formLogin } from "../interfaces/user.interface";
const HOST = "https://fakestoreapi.com";

export const login = (form: formLogin) => {
  const URL = `${HOST}/auth/login`;
  return axios.post(URL, form, {
    headers: {
      "Content-Type": "application/json", // Set header Content-Type ke application/json
    },
  });
};

export const addUser = (form: UserResultInterface) => {
  const URL = `${HOST}/users`;
  return axios.post(URL, form, {
    headers: {
      "Content-Type": "application/json", // Set header Content-Type ke application/json
    },
  });
};

export const totalUser = () => {
  const URL = `${HOST}/users`;
  return axios.get(URL, {
    headers: {
      "Content-Type": "application/json", // Set header Content-Type ke application/json
    },
  });
};
export const allUser = (limit: number) => {
  const URL = `${HOST}/users?limit=${limit}`;
  return axios.get(URL, {
    headers: {
      "Content-Type": "application/json", // Set header Content-Type ke application/json
    },
  });
};
export const detailUser = (id: string) => {
  const URL = `${HOST}/users/${id}`;
  return axios.get(URL, {
    headers: {
      "Content-Type": "application/json", // Set header Content-Type ke application/json
    },
  });
};
export const EditUser = (id: any, form: UserResultInterface) => {
  console.log(id);
  const URL = `${HOST}/users/${id}`;
  return axios.put(URL, form, {
    headers: {
      "Content-Type": "application/json", // Set header Content-Type ke application/json
    },
  });
};
export const deleteUser = (id: string) => {
  const URL = `${HOST}/users/${id}`;
  return axios.delete(URL, {
    headers: {
      "Content-Type": "application/json", // Set header Content-Type ke application/json
    },
  });
};
