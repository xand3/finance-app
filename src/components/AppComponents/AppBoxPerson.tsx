import URL from "@/api/path";
import { Person } from "@/types/Person";

import axios from "axios";
import Cookies from "js-cookie";
import { useState } from "react";

type Props = {
  isOpen: boolean;
  setOpen: (isOpen: boolean) => void;
  setPersons: (persons: Person[]) => void;
  prevPersons: Person[];
};

export default function AppBoxPerson({
  isOpen,
  setOpen,
  setPersons,
  prevPersons,
}: Props) {
  const [person, setPerson] = useState<string>("");

  const handleAddPerson = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const token = Cookies.get("token");
      axios
        .post(
          `${URL}/v1/person`,
          {
            description: `${person}`,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((res) => {
          if (res.status === 201) {
            setOpen(!open);
            setPersons([...prevPersons, res.data.detail[0]]);
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
      <div className="fixed top-0 left-0 right-0 bottom-0 m-auto w-1/3 h-1/4 bg-slate-300 opacity-90 rounded-lg flex justify-center items-center">
        <form onSubmit={handleAddPerson}>
          <div className="flex flex-col">
            <label htmlFor="person">Nome:</label>
            <input
              required
              className="w-full shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
              className="mr-12 bg-slate-200 p-3 rounded-md hover:bg-slate-100 border"
              onClick={() => setOpen(!isOpen)}
            >
              FECHAR
            </button>
            <button
              type="submit"
              className=" bg-slate-200 p-3 rounded-md hover:bg-slate-100 border"
            >
              ADICIONAR
            </button>
          </div>
        </form>
      </div>
    );
  } else {
  }
}
