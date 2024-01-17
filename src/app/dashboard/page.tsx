"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Cookies from "js-cookie"
import { jwtDecode } from "jwt-decode";

import { User } from "@/types/User";
import AppHeader from "@/components/AppComponents/AppHeader";
import AppSideMenu from "@/components/AppComponents/AppSideMenu";

export default function Dashboard() {
  const router = useRouter();
  const [user, setUser] = useState("");

  useEffect(() => {
    const token = Cookies.get('token')
    if (token) {
      const decodedUser = jwtDecode<User>(token);
      setUser(decodedUser.email.toString());
    } else {
      window.alert("Usuario não autenticado");
      router.push("/login");
    }
  }, []);

  return (
    <>
      <AppHeader/>
      <AppSideMenu/>
    </>
  );
}
