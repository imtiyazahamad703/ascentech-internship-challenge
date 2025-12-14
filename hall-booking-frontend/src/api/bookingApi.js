import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

export const getBookings = () => {
  return axios.get(`${API_URL}/bookings`);
};

export const deleteBooking = (id) => {
  return axios.delete(`${API_URL}/bookings/${id}`);
};
