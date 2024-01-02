"use client";

import { useState } from "react";

import PageHeader from "@/components/PageHeader";
import PageFooter from "@/components/PageFooter";

export default function LoginPage() {


  const [userEmail, setUserEmail] = useState("");
  const [userPwd, setUserPwd] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
   
  };

  return (
    <>
      <PageHeader />
      <section className="flex justify-center items-center my-20">
        <div className="bg-white sm:shadow-lg shadow-none rounded px-16 pt-6 pb-8 mb-4 max-w-1/3 h-1/5">
          <h1 className="text-xl m-3 text-center">Acesse o sistema</h1>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col m-3">
              <label htmlFor="useremail">E-mail:</label>
              <input
                required
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="useremail"
                type="email"
                placeholder="E-mail"
                onChange={(e) => setUserEmail(e.target.value)}
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
              <button className="bg-transparent hover:bg-gray-200 text-black hover:text-white py-2 px-4 border border-gray-600 rounded">
                Fazer Login
              </button>
            </div>
          </form>
          <div className="flex justify-center">
            <p className="">
              Não possui conta? <a href="/register">registre-se aqui.</a>
            </p>
          </div>
        </div>
      </section>
      <PageFooter />
    </>
  );
}
