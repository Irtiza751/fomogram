"use client";

import { createContext, useEffect } from "react";
import { io, Socket } from "socket.io-client";

export const socket = io(process.env.NEXT_PUBLIC_SOCKET_URL || "");
export const SocketContext = createContext<Socket>(socket);
export function SocketProvider({ children }: { children: React.ReactNode }) {
  return (
    <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>
  );
}
