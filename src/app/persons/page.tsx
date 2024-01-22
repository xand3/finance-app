"use client";

import { useEffect, useState } from "react";

import axios from "axios";
import Cookies from "js-cookie";

import AppContainer from "@/components/AppComponents/AppContainer";
import AppHeader from "@/components/AppComponents/AppHeader";
import AppSideMenu from "@/components/AppComponents/AppSideMenu";
import { Person } from "@/types/Person";
import URL from "@/api/path";

function Persons() {
  const [persons, setPersons] = useState<Person[]>([
    {
      description: "teste",
      id: "12312312",
    },
  ]);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchPersons();
  }, []);

  const fetchPersons = async () => {
    try {
      const token = Cookies.get("token");
      const res = await axios.get(`${URL}/v1/persons`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (res.status === 200) {
        console.log(res.data);
        setPersons(res.data);
      } else {
        setError(res.data.detail);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <AppHeader />
      <AppContainer myClasses="">
        <div className="flex justify-between mb-5 items-center">
          <h1 className="text-3xl ml-10">Credores / Devedores</h1>
          <div className="mr-10">
            <button>Adicionar</button>
          </div>
        </div>
        <div className="shadow-md sm:rounded-lg ml-10 mr-10">
          <table className="w-full text-sm text-gray-500">
            <thead className="text-xs uppercase bg-gray-400 text-black">
              <tr>
                <th scope="col" className="px-6 py-3 text-left">
                  Nome
                </th>
                <th scope="col" className="px-6 py-3">
                  editar
                </th>
                <th scope="col" className="px-6 py-3">
                  Excluir
                </th>
              </tr>
            </thead>
            <tbody>
              {persons.map((person) => (
                <tr
                  key={person.id}
                  className="border-b bg-slate-100 border-gray-700 hover:bg-gray-50"
                >
                  <td
                    scope="row"
                    className="text-left px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                  >
                    {person.description}
                  </td>
                  <td className="px-6 py-4">
                    <button>
                      <img width={20} src="/icons/editar.png" alt="" />
                    </button>
                  </td>
                  <td className="px-6 py-4">
                    <button>
                      <img width={20} src="icons/excluir.png" alt="" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </AppContainer>
      <AppSideMenu />
    </>
  );
}

export default Persons;
