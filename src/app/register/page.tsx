"use client";

import { useState } from "react";
import { initFirebase } from "../../../firebase/fireBaseApp";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

import PageHeader from "@/components/PageHeader";
import PageFooter from "@/components/PageFooter";

export default function RegisterPage() {
  const app = initFirebase();

  const [userName, serUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPwd, setUserPwd] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, userEmail, userPwd)
      .then((userCredential) => {
        const user = userCredential.user;
        window.alert(`${user.uid} criado com sucesso`);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error(`Error code: ${errorCode}, message: ${errorMessage}`);
      });
  };

  return (
    <>
      <PageHeader />
      <section className="flex justify-center items-center my-16">
        <div className="bg-white shadow-lg rounded px-16 pt-6 pb-8 mb-4 w-1/3">
          <h1 className="text-xl m-3 text-center">Faça seu cadastro</h1>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col m-3">
              <label htmlFor="">Nome:</label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="useremail"
                type="text"
                placeholder="Nome"
                onChange={(e) => serUserName(e.target.value)}
              />
            </div>
            <div className="flex flex-col m-3">
              <label htmlFor="">E-mail:</label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="useremail"
                type="email"
                placeholder="E-mail"
                onChange={(e) => setUserEmail(e.target.value)}
              />
            </div>
            <div className="flex flex-col m-3">
              <label htmlFor="">Senha:</label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="userpwd"
                type="password"
                placeholder="*******"
                onChange={(e) => setUserPwd(e.target.value)}
              />
            </div>
            <div className="flex justify-center m-5">
              <button className="bg-transparent hover:bg-gray-200 text-black hover:text-white py-2 px-4 border border-gray-600 rounded">
                Criar conta
              </button>
            </div>
          </form>
        </div>
      </section>
      <PageFooter />
    </>
  );
}
