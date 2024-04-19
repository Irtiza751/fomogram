export interface ApiError {
  message: string;
  statusCode: number;
}

export interface User {
  id: number;
  email: string;
  image: string;
  username: string;
}
