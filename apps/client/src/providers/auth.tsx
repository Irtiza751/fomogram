"use client";

import { createContext, useState } from "react";

export interface LoginResponse {
  token: string;
  res: string;
  userId: string;
  username: string;
  email: string;
  image: string;
}

export interface AuthContextType {
  auth: LoginResponse | null;
  setAuth(auth: LoginResponse | null): void;
}

export const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [auth, setAuth] = useState<LoginResponse | null>(null);

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
}
