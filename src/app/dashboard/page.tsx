"use client";

import { useRouter } from "next/navigation";

import { User } from "@/types/User";
import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react"

export default function Dashboard() {
  const router = useRouter();
  const [user, setUser] = useState("");

  useEffect(() => {
    const token = localStorage.getItem('token');
    if(token) {
      const decodedUser = jwtDecode<User>(token);
      setUser(decodedUser.email.toString()) 
    } else {
      window.alert("Usuario não autenticado");
      router.push('/login');
    }
  }, [])
  

  return (
    <div>
      <h1>exemplo</h1>
      <p>{user}</p>
    </div>
  )
}