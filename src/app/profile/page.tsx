"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import axios, { Axios, AxiosResponse } from "axios";
import URL from "@/api/path";
import { Profile } from "@/types/Profile";

import AppHeader from "@/components/AppComponents/AppHeader";
import AppContainer from "@/components/AppComponents/AppContainer";

export default function ProfilePage() {
  const router = useRouter();
  const [user, setUser] = useState<Profile>({
    name: "",
    email: "",
    urlPhoto: "",
  });

  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = async () => {
    try {
      const token = Cookies.get("token");
      axios.get(`${URL}/v1/profile`, {
        headers: {
          Authorization: `Bearer ${token}`,
        }
      }).then((res: AxiosResponse) => {
        if(res.status === 200) {
          console.log(res)
          setUser(res.data);
        } else {
          console.log(res);
        }
      })
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <AppHeader />
      <AppContainer myClasses="flex justify-center flex-col items-center">
        <div className="mb-5">
          <img width={200} src="/devs/dev.png" alt="" />
        </div>
        <div>
          <p>Usuário: {user.name}</p>
          <p>E-mail: {user.email}</p>
        </div>
      </AppContainer>
    </>
  );
}
