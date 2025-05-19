import axios from "axios";
import type { User, ApiResponse } from "../types/user";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});

export const signupUser = async (userData: User): Promise<ApiResponse> => {
  const response = await api.post<ApiResponse>("/signup", userData);
  return response.data;
};
