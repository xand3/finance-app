"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

import AppHeader from "@/components/AppComponents/AppHeader";
import AppSideMenu from "@/components/AppComponents/AppSideMenu";
import AppContainer from "@/components/AppComponents/AppContainer";

function Dashboard() {
  const router = useRouter();
  const [user, setUser] = useState("");

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