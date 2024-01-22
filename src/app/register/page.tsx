"use client";

import Link from "next/link";
import axios, { AxiosResponse } from "axios";
import { useState } from "react";

import PageHeader from "@/components/PageHeader";
import PageFooter from "@/components/PageFooter";
import DialogBox from "@/components/DialogBox";

import URL from "@/api/path";

export default function RegisterPage() {
  const [userName, serUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPwd, setUserPwd] = useState("");
  const [pwdConfirm, setPwdConfirm] = useState("");
  const [pwdFocus, setPwdFocus] = useState(false);
  const [message, setMessage] = useState("");

  const handlePwd = () => {
    return userPwd === pwdConfirm ? true : false;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (handlePwd() === true) {
      try {
        axios
          .post(`${URL}/v1/signup`, {
            name: userName,
            email: userEmail,
            password: userPwd,
          })
          .then((res: AxiosResponse) => {
            if (res.status === 200) {
              console.log(res.data);
            } else {
              console.log(res);
            }
          });
      } catch (error) {
        console.log(error)
        setMessage(error.response.data.detail);
      }
    }
  };

  return (
    <>
      <PageHeader />
      <section className="flex justify-center items-center my-16">
        <div className="bg-white shadow-none rounded px-16 pt-6 pb-8 mb-4 max-w-1/3 sm:shadow-lg">
          <h1 className="text-xl m-3 text-center">Faça seu cadastro</h1>
          {message && <DialogBox Boxtext={message}/>}
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col m-3">
              <label htmlFor="username">Nome:</label>
              <input
                required
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Nome"
                onChange={(e) => {
                  serUserName(e.target.value);
                  setMessage("");
                }}
              />
            </div>
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
                onFocus={() => setPwdFocus(true)}
                onChange={(e) => setUserPwd(e.target.value)}
              />
            </div>
            {pwdFocus && (
              <>
                <div className="flex flex-col m-3">
                  <label htmlFor="pwdconfirm">Confirmar Senha:</label>
                  <input
                    required
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="pwdconfirm"
                    type="password"
                    placeholder="*******"
                    onChange={(e) => setPwdConfirm(e.target.value)}
                  />
                </div>
                <p className="text-center">
                  {userPwd === pwdConfirm ? "" : "As senhas não coincidem"}
                </p>
                <div className="flex flex-col">
                  <p className="text-sm">A senha deve conter ao menos:</p>
                  <ol className="mx-3 font-light text-sm">
                    <li>um número.</li>
                    <li>uma letra maiúscula.</li>
                    <li>um caractere especial.[!@#%&]</li>
                  </ol>
                </div>
              </>
            )}
            <div>
              <p>Já tem uma conta? Faça login <Link className="hover:text-gray-200" href="/login">aqui.</Link></p>
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
