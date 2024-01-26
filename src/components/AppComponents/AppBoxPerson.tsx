import URL from "@/api/path";
import { Person } from "@/types/Person";

import axios from "axios";
import Cookies from "js-cookie";
import { useState } from "react";

type Props = {
  handlePersons: (person: Person) => void;
  setOpenAdd: (isOpen: boolean) => void;
};

export default function AppBoxPerson({
  setOpenAdd,
  handlePersons,
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
            handlePersons(res.data.detail[0]);
            setOpenAdd(false);
          } else {
            console.log(res);
          }
        });
    } catch (error) {
      console.log(error);
    }
  };

  {
    return (
      <div className="fixed top-0 left-0 right-0 bottom-0 m-auto max-w-md h-1/4 bg-slate-300 opacity-90 rounded-lg flex justify-center items-center ">
        <form onSubmit={handleAddPerson}>
          <div className="flex flex-col">
            <label htmlFor="person">Nome:</label>
            <input
              required
              className="w-full shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="person"
              type="text"
              placeholder=""
              value={person}
              onChange={(e) => {
                setPerson(e.target.value);
              }}
            />
          </div>

          <div className="pt-5">
            <button
              className="mr-12 bg-slate-200 p-3 rounded-md hover:bg-slate-100 border"
              onClick={() => setOpenAdd(false)}
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
  }
}
