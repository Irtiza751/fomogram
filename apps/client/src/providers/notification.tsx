"use client";

import { createContext, useEffect, useState } from "react";
import io, { Socket } from "socket.io-client";

type NotificationType =
  | "comment_post"
  | "like_post"
  | "new_post"
  | "new_follower";

export type Notification = {
  type: NotificationType;
  message: string;
};

type SocketProps = { children: React.ReactNode; userId?: string };

export const SocketContext = createContext<{
  notification?: Notification;
  connect: (id: string) => void;
} | null>(null);

export function SocketProvider({ children, userId }: SocketProps) {
  const [socket, setSocket] = useState<Socket>();
  const [notification, setNotification] = useState<Notification>();

  const connect = (userId: string) => {
    if (userId) {
      setSocket(
        io(process.env.NEXT_PUBLIC_SOCKET_URL || "", {
          query: {
            userId: +window.atob(userId),
          },
        })
      );
    }
  };

  useEffect(() => {
    if (userId) {
      setSocket(
        io(process.env.NEXT_PUBLIC_SOCKET_URL || "", {
          query: {
            userId: +window.atob(userId),
          },
        })
      );
    }
  }, []);

  useEffect(() => {
    console.log("connecting....");
    if (socket) {
      socket.on("connect", () => {
        console.log("connected!");
      });

      socket.on("connect_error", (err) => {
        console.log("Connection Error: ", err);
      });

      socket.on("onNotification", (data) => {
        setNotification(data);
        console.log("Notification received:", data);
      });
    }

    return () => {
      socket?.off("connect");
      socket?.off("connect_error");
      socket?.off("onNotification");
    };
  }, [socket]);

  return (
    <SocketContext.Provider value={{ notification, connect }}>
      {children}
    </SocketContext.Provider>
  );
}
