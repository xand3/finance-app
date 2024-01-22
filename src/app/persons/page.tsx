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
  const [persons, setPersons] = useState<Person[]>([]);
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
      <AppContainer myClasses="pt-3">
        <div className="flex justify-between mb-5 items-center">
          <h1 className="text-3xl ml-12">Credores / Devedores</h1>
          <div className="mr-12 bg-slate-200 p-3 rounded-md hover:bg-slate-100 border">
            <button>Adicionar</button>
          </div>
        </div>
        <div className="shadow-md ml-10 mr-10 rounded-lg">
          <table className="min-w-full text-gray-500">
            <thead className="uppercase bg-gray-400 text-black">
              <tr className="text-sm">
                <th scope="col" className="py-3 pl-3 text-left w-auto">
                  Nome
                </th>
                <th scope="col" className="w-20">
                  editar
                </th>
                <th scope="col" className="w-20">
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
                    className="pl-3 py-3 text-left font-medium text-gray-900 whitespace-nowrap"
                  >
                    {person.description}
                  </td>
                  <td className="pl-5">
                    <button className="flex justify-center items-center rounded-md hover:bg-slate-300 px-3 py-2">
                      <img width={20} src="/icons/editar.png" alt="" />
                    </button>
                  </td>
                  <td className="pl-5">
                    <button className="flex justify-center items-center rounded-md hover:bg-slate-300 px-3 py-2">
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
