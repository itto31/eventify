import axios from "axios";
import { API_HOST } from "../util/constant";

export async function addEvent(formData) {
  const newdata = {
    ...formData,
    categoryId: 1,
    creatorId: 1,
  };

  try {
    const response = await axios.post(`${API_HOST}/events`, newdata, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("access_token")}`,
      },
    });
    const { data, status } = response;
    return { data, status }; // Puedes manejar la respuesta de tu API aquí
  } catch (error) {
    throw error instanceof Error
      ? error
      : new Error("Ocurrió un error en la llamada al API");
  }
}
