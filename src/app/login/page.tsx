"use client";

import Link from "next/link";
import { useState } from "react";
import axios, { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

import PageHeader from "@/components/PageHeader";
import PageFooter from "@/components/PageFooter";
import DialogBox from "@/components/DialogBox";

import URL from "@/api/path";

export default function LoginPage() {
  const router = useRouter();
  const [userEmail, setUserEmail] = useState("");
  const [userPwd, setUserPwd] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const res = await axios
        .post(`${URL}/v1/signin`, {
          email: userEmail,
          password: userPwd,
        })
        .then((res) => {
          if (res.status === 200) {
            const token: string = res.data.token;
            Cookies.set("token", token);
            router.push("/dashboard");
          } else {
            setError(
              "Ocorreu um erro ao fazer login, por favor tente novamente"
            );
          }
        });
    } catch (error) {
      setError(error.response.data.detail);
    }
  };

  return (
    <>
      <PageHeader />
      <section className="flex justify-center items-center my-20">
        <div className="bg-white sm:shadow-lg shadow-none rounded px-16 pt-6 pb-8 mb-4 max-w-1/3 h-1/5">
          <h1 className="text-xl m-3 text-center">Acesse o sistema</h1>
          {error && <DialogBox Boxtext={error} />}
          <form onSubmit={handleLogin}>
            <div className="flex flex-col m-3">
              <label htmlFor="useremail">E-mail:</label>
              <input
                required
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="useremail"
                type="email"
                placeholder="E-mail"
                onChange={(e) => {
                  setUserEmail(e.target.value);
                  setError("");
                }}
              />
            </div>
            <div className="flex flex-col m-3">
              <label htmlFor="userpwd">Senha:</label>
              <input
                required
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="userpwd"
                type="password"
                placeholder="*******"
                onChange={(e) => setUserPwd(e.target.value)}
              />
            </div>
            <div className="flex justify-around m-5">
              <button type="submit" className="bg-transparent hover:bg-gray-200 text-black hover:text-white py-2 px-4 border border-gray-600 rounded">
                Fazer Login
              </button>
            </div>
          </form>
          <div className="flex justify-center">
            <p className="">
              Não possui conta?{" "}
              <Link className="hover:text-gray-200" href="/register">
                registre-se aqui.
              </Link>
            </p>
          </div>
        </div>
      </section>
      <PageFooter />
    </>
  );
}
