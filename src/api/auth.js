import axios from "axios";
import { API_HOST } from "../util/constant";
import jwtDecode from "jwt-decode";

export async function signUpApi(formData) {
  try {
    const response = await axios.post(`${API_HOST}/auth/register`, formData);
    const { data, status } = response;
    return { data, status }; // Puedes manejar la respuesta de tu API aquí
  } catch (error) {
    throw error instanceof Error
      ? error
      : new Error("Ocurrió un error en la llamada al API");
  }
}
export async function signInApi(data) {
  try {
    const response = await axios.post(`${API_HOST}/auth/login`, data);
    return response;
  } catch (error) {
    throw error;
  }
}

export async function logoutApi() {
  localStorage.removeItem("access_token");
}

export function isUserLoggedApi() {
  const token = localStorage.getItem("access_token");
  if (!token) {
    logoutApi();
    return null;
  }
  if (isExpire(token)) {
    logoutApi();
  }
  return jwtDecode(token);
}

function isExpire(token) {
  const { exp } = jwtDecode(token);
  const expire = exp * 1000;
  const timeout = expire - Date.now();

  if (timeout < 0) {
    return true;
  }
  return false;
}
