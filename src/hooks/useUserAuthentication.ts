import { useEffect } from "react";
import { useRouter } from "next/router"


export function useUserAuthenticaion() {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      console.log("Usuario logado");
    } else {
      console.log("Usuario não autenticado");
      router.push("/login");
    }
  }, [])
}