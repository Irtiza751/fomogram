"use client";

import { SocketContext } from "@client/providers/notification";
import { useContext, useEffect } from "react";

export default function Activities() {
  const socket = useContext(SocketContext);

  useEffect(() => {
    socket.on("connect", () => {
      console.log("connected!!!");
    });
  }, []);

  return <div>Activities</div>;
}
