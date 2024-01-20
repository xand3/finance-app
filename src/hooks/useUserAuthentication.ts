import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import axios, { AxiosResponse } from "axios";
import URL from "@/api/path";

export function useUserAuthenticaion() {
  const router = useRouter();

  try {
    const token = Cookies.get("token");
    if (token) {
      axios
        .get(`${URL}/v1/check-token`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res: AxiosResponse) => {
          console.log(res);
          if(res.status === 200) {
            return true
          }
        });
    } else {
      router.push("/login");
      Cookies.remove("token");
      return false
    }
  } catch (error) {
    console.log(error);
  }
}
