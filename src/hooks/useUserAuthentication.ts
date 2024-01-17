import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

export function useUserAuthenticaion() {
  const router = useRouter();

  try {
    const token = Cookies.get("token");
    if (token) {
      return true;
    }
    router.push("/login");
    return false;
  } catch (error) {
    console.log(error);
  }
}
