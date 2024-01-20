"use client"

import AppHeader from "@/components/AppComponents/AppHeader"
import AppContainer from "@/components/AppComponents/AppContainer"
import AppSideMenu from "@/components/AppComponents/AppSideMenu"

import { useUserAuthenticaion } from "@/hooks/useUserAuthentication"

export default function IncomesPage() {

  if (useUserAuthenticaion() === true) {
    return (
      <>
        <AppHeader/>
        <AppSideMenu/>
        <AppContainer myClasses="">
  
        </AppContainer>
      </>
    )
  }
}