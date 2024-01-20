"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

import AppHeader from "@/components/AppComponents/AppHeader";
import AppSideMenu from "@/components/AppComponents/AppSideMenu";

function Dashboard() {
  const router = useRouter();
  const [user, setUser] = useState("");

  return (
    <>
      <AppHeader />
      <AppSideMenu />
    </>
  );
}

export default Dashboard;