"use client";

import { useEffect, useState, useMemo } from "react";
import axios from "axios";
import Cookies from "js-cookie";

import AppContainer from "@/components/AppComponents/AppContainer";
import AppHeader from "@/components/AppComponents/AppHeader";
import AppSideMenu from "@/components/AppComponents/AppSideMenu";
import AppBoxPerson from "@/components/AppComponents/AppBoxPerson";

import { Person } from "@/types/Person";

import URL from "@/api/path";

function Persons() {
  const [persons, setPersons] = useState<Person[]>([]);
  const [search, setSearch] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [open, setOpen] = useState<boolean>(false);

  const token = Cookies.get("token");
  useEffect(() => {
    fetchPersons();
  }, []);

  const handleEditPerson = (id: string) => {
    try {
      axios.put(`${URL}/v1/person${id}`, {
        description: "",
      });
    } catch (error) {
      console.log(error);
    }
  };

  const filteredPersons = useMemo(() => {
    const lowerSearch = search.toLowerCase();
    return persons.filter((person) =>
      person.description.toLowerCase().includes(lowerSearch)
    );
  }, [search, persons]);

  const handleDeletePerson = (id: string) => {
    try {
      axios
        .delete(`${URL}/v1/person/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          if (res.status === 200) {
            console.log("registro excluido");
            setPersons(persons.filter((person) => person.id !== id));
          } else {
            console.log(res.data);
          }
        });
    } catch (error) {
      console.log(error);
    }
  };

  const fetchPersons = async () => {
    try {
      const res = await axios
        .get(`${URL}/v1/persons`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          if (res.status === 200) {
            console.log(res.data);
            setPersons(res.data);
          } else {
            setError(res.data.detail);
          }
        });
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
            <button
              onClick={() => {
                setOpen(!open);
              }}
            >
              Adicionar
            </button>
          </div>
        </div>
        <div className="ml-12">
          <label>Buscar:</label>
          <input
            className="shadow appearance-none border rounded w-1/2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            name=""
            id=""
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <AppBoxPerson isOpen={open} setOpen={setOpen} />
        <div className="shadow-md ml-10 mr-10 rounded-lg">
          <table className="min-w-full text-gray-500 mb-10">
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
              {filteredPersons.map((person) => (
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
                    <button
                      onClick={() => handleDeletePerson(person.id)}
                      className="flex justify-center items-center rounded-md hover:bg-red-500 px-3 py-2"
                    >
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
