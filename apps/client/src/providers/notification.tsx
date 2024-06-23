"use client";

import { createContext, useEffect } from "react";
import { io, Socket } from "socket.io-client";

export const socket = io(process.env.NEXT_PUBLIC_SOCKET_URL || "");
export const SocketContext = createContext<Socket>(socket);
export function SocketProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    socket.on("connect", () => {
      console.log("Socket connected!");
      // socket.emit("message", "hi, there?");
    });

    socket.on("connect_error", (err) => {
      console.log("Connection Error: ", err);
    });

    socket.on("onNotification", (data) => {
      console.log("Notification received:", data);
    });

    return () => {
      socket.off("connect");
      socket.off("connect_error");
      socket.off("onNotification");
    };
  }, [socket]);

  return (
    <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>
  );
}
