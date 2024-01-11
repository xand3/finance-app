"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react"

import { jwtDecode } from "jwt-decode";

import { User } from "@/types/User";

export default function ProfilePage() {
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
      <p>informações do usuario</p>
    </div>
  )
}