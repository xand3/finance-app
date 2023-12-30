"use client"

import { initFirebase } from "../../../firebase/fireBaseApp";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";

export default function LoginPage() {
  const app = initFirebase();
  
  const [userEmail, setUserEmail] = useState("");
  const [userPwd, setUserPwd] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

  }

  return (
    <section className="flex min-h-screen w-screen justify-center items-center">
      <div className="w-80 h-1/2 flex flex-col justify-center items-center rounded-lg border-2 bg-gray-500 text-white">
        <h1 className="text-xl m-3">Registre-se</h1>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col m-3">
            <label htmlFor="">E-mail:</label>
            <input
              id="useremail"
              type="email"
              placeholder="Digite seu e-mail"
              onChange={(e) => setUserEmail(e.target.value)}
            />
          </div>
          <div className="flex flex-col m-3">
            <label htmlFor="">Senha:</label>
            <input
              id="userpwd"
              type="password"
              placeholder="Digite sua senha"
              onChange={(e) => setUserPwd(e.target.value)}
            />
          </div>
          <div className="flex justify-center m-5">
            <button className="border-2 rounded-md p-1">Criar conta</button>
          </div>
        </form>
      </div>
    </section>
  )
};