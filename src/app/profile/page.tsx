"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import axios, { AxiosResponse } from "axios";
import URL from "@/api/path";
import { Profile } from "@/types/Profile";

import AppHeader from "@/components/AppComponents/AppHeader";

export default function ProfilePage() {
  const router = useRouter();
  const [user, setUser] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      console.log("Usuario logado");
      fetchUser();
    } else {
      window.alert("Usuario não autenticado");
      router.push("/login");
    }
  }, []);

  const fetchUser = async() => {
    try {
      const token = localStorage.getItem("token");
      const res: AxiosResponse = await axios.get(`${URL}/v1/profile`, {
        headers: {
          Authorization: `Bearer ${token}`
        },
      });
      console.log(res);
      setUser(res.data.name);
    } catch(error) {
      console.log(error)
    }
  };

  return (
    <>
      <AppHeader/>
    </>
  );
}
