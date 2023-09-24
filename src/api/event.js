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
    return { data, status };
  } catch (error) {
    throw error instanceof Error
      ? error
      : new Error("Ocurrió un error en la llamada al API");
  }
}

export async function getEvents() {
  try {
    const response = await axios.get(`${API_HOST}/events`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("access_token")}`,
      },
    });

    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error("No se pudo obtener la lista de eventos");
    }
  } catch (error) {
    throw error instanceof Error
      ? error
      : new Error("Ocurrió un error en la llamada al API");
  }
}

export async function getListEventUsur(id) {
  try {
    const response = await axios.get(`${API_HOST}/events/${id}/registrations`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("access_token")}`,
      },
    });
    if (response.status === 200) {
      const eventList = response.data;
      const eventCount = eventList.length;
      return eventCount;
    } else {
      throw new Error("No se pudo obtener la lista de eventos");
    }
  } catch (error) {
    throw error;
  }
}

export async function deleteEvent(eventId) {
  try {
    const response = await axios.delete(`${API_HOST}/events/${eventId}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("access_token")}`,
      },
    });
    return response;
  } catch (error) {
    throw error;
  }
}
