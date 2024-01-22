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
        <div className="flex justify-between mb-5">
          <h1 className="text-3xl ml-10">Credores / Devedores</h1>
          <div className="mr-10">
            <button>Adicionar</button>
          </div>
        </div>
        <div className="flex justify-center">
          <table className="w-screen mr-10 ml-10 bg-slate-300">
            <thead className="">
              <tr className="">
                <th className="p-2 text-left">Nome</th>
                <th className="p-2">Editar</th>
                <th className="p-2">Excluir</th>
              </tr>
            </thead>
            <tbody>
              {persons.map((person) => (
                <tr
                  key={person.id}
                  className="border-solid border-2 border-slate-600 bg-zinc-100"
                >
                  <td className="flex m-1">
                    <div className="flex mr-12 flex-col">
                      <div className="font-bold">{person.description}</div>
                    </div>
                  </td>

                  <td className="">
                    <div>
                      <img width={20} src="/icons/editar.png" alt="" />
                    </div>
                  </td>
                  <td className="text-center">excluir</td>
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
