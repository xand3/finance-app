"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import axios, { AxiosResponse } from "axios";
import URL from "@/api/path";
import { Profile } from "@/types/Profile";

import AppHeader from "@/components/AppComponents/AppHeader";
import AppSideMenu from "@/components/AppComponents/AppSideMenu";
import AppContainer from "@/components/AppComponents/AppContainer";


export default function ProfilePage() {
  const router = useRouter();
  const [user, setUser] = useState<Profile>({
    name: "",
    email: "",
    urlPhoto: "",
  });

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

  const fetchUser = async () => {
    try {
      const token = localStorage.getItem("token");
      const res: AxiosResponse = await axios.get(`${URL}/v1/profile`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setUser(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <AppHeader />
      <AppContainer myClasses="flex justify-center flex-col items-center">
        <div>
          <img width={200} src="/devs/dev.png" alt="" />
        </div>
        <div>
          <p>Usuário: {user.name}</p>
          <p>E-mail: {user.email}</p>
        </div>
      </AppContainer>
      <AppSideMenu />
    </>
  );
}
