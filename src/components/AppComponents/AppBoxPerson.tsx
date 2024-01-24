import URL from "@/api/path";

import axios from "axios";
import Cookies from "js-cookie";
import { useState } from "react";

type Props = {
  isOpen: boolean;
  setOpen: (isOpen: boolean) => void;
};

export default function AppBoxPerson({ isOpen, setOpen }: Props) {
  const [person, setPerson] = useState<string>("");

  const handleAddPerson =  (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const token = Cookies.get("token");
        axios
        .post(
          `${URL}/v1/person`,
          {
            description: `${person}`
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            }
          }
        )
        .then((res) => {
          if (res.status === 201) {
            console.log("registro adicionado com sucesso");
            setOpen(!open);
          } else {
            console.log(res);
          }
        });
    } catch (error) {
      console.log(error);
    }
  };

  if (isOpen) {
    return (
      <div className="fixed top-0 left-0 right-0 bottom-0 m-auto w-2/3 h-2/3 bg-slate-300 opacity-80 rounded-lg">
        <form onSubmit={handleAddPerson}>
          <div className="flex flex-col">
            <label htmlFor="person">Nome:</label>
            <input
              required
              className="shadow appearance-none border rounded w-1/2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="person"
              type="text"
              placeholder=""
              onChange={(e) => {
                setPerson(e.target.value);
              }}
            />
          </div>

          <div className="pt-10">
            <button
              className="bg-red-400 p-3 mr-3"
              onClick={() => setOpen(!isOpen)}
            >
              FECHAR
            </button>
            <button type="submit" className="bg-green-200 p-3 ml-3">
              ADICIONAR
            </button>
          </div>
        </form>
      </div>
    );
  } else {
  }
}
