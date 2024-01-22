"use client";

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import  Axios from "axios";

import AppHeader from "@/components/AppComponents/AppHeader";
import AppSideMenu from "@/components/AppComponents/AppSideMenu";
import AppContainer from "@/components/AppComponents/AppContainer";
import URL from "@/api/path";

function Dashboard() {
  const router = useRouter();
  const [user, setUser] = useState("");

  useEffect(() => {
    fetchRecords();
  })

  const fetchRecords = async () => {
    try {
      const token = Cookies.get('token');
      const res = await Axios.get(`${URL}/v1/records`, {
        headers: {
          Authorization: `Bearer ${token}`,
        }
      });
      if(res.status === 200) {
        console.log(res.data);
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <AppHeader />
      <AppContainer myClasses="">

      </AppContainer>
      <AppSideMenu />
    </>
  );
}

export default Dashboard;