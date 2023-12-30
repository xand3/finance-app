"use client";

import { useState } from "react";
import { initFirebase } from "../../../firebase/fireBaseApp";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export default function LoginPage() {
  const [userEmail, setUserEmail] = useState("");
  const [userPwd, setUserPwd] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, userEmail, userPwd)
      .then((userCredential) => {
        const user = userCredential.user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  const app = initFirebase();
  console.log(app);

  return (
    <main className="flex min-h-screen w-screen justify-center items-center">
      <div className="w-80 h-1/2 flex flex-col justify-center items-center rounded-lg border-2 bg-gray-500">
        <h1 className="text-xl">Fazer login</h1>
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
          <div className="flex justify-center mx-3">
            <button>Criar conta</button>
          </div>
        </form>
      </div>
    </main>
  );
}
