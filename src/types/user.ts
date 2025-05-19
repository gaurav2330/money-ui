export interface User {
  name: string;
  username: string;
  password: string;
}

export interface ApiResponse {
  status: string;
  message: string;
  token?: string;
}
