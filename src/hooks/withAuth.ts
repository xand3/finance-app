import { useRouter } from "next/navigation";

import { useUserAuthenticaion } from "./useUserAuthentication";
import { useState } from "react";

export default function withAuth(Component){
  return function withAuth(props) {
    const router = useRouter()

    if(!useUserAuthenticaion) {
      router.push('/login');
      return null
    }
    return <Component {...props}/>
  }
}

