"use client";

import { createContext, useEffect } from "react";
import io from "socket.io-client";

type SocketProps = { children: React.ReactNode; userId?: string };

export const SocketContext = createContext({});

export function SocketProvider({ children, userId }: SocketProps) {
  useEffect(() => {
    if (userId) {
      console.log({ userId: +window.atob(userId) });
      const socket = io(process.env.NEXT_PUBLIC_SOCKET_URL || "", {
        query: {
          userId,
        },
      });

      socket.on("connect", () => {
        console.log("connected!");
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
    }
  }, [userId]);

  return <SocketContext.Provider value={{}}>{children}</SocketContext.Provider>;
}
