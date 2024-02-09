import { useRouter } from "next/navigation";
import { useEffect } from "react";

export function useAuth() {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/login");
    } else {
      router.push("/");
    }
  }, []);
}
