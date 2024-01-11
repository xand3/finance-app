"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react"

import { jwtDecode } from "jwt-decode";

import { User } from "@/types/User";
import AppHeader from "@/components/AppComponents/AppHeader";


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
    <main>
      <AppHeader/>
    </main>
  )
}