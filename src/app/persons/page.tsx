"use client";

import { useEffect, useState, useMemo } from "react";
import axios from "axios";
import Cookies from "js-cookie";

import AppContainer from "@/components/AppComponents/AppContainer";
import AppHeader from "@/components/AppComponents/AppHeader";
import AppBoxPerson from "@/components/AppComponents/AppBoxPerson";
import AppEditPerson from "@/components/AppComponents/AppEditPerson";

import { Person } from "@/types/Person";

import URL from "@/api/path";

function Persons() {
  const [persons, setPersons] = useState<Person[]>([]);
  const [search, setSearch] = useState<string>("");
  const [description, setNewDescription] = useState<string>("");
  const [editingPersonId, setEditingPersonId] = useState<string>("");

  const [error, setError] = useState<string>("");

  const [openAdd, setOpenAdd] = useState<boolean>(false);
  const [openEdit, setOpenEdit] = useState<boolean>(false);

  const token = Cookies.get("token");

  useEffect(() => {
    fetchPersons();
  }, []);

  const handleEditPerson = (
    e: React.FormEvent<HTMLFormElement>,
    id: string,
    newDescription: string
  ) => {
    e.preventDefault();
    console.log(persons);
    console.log(id);
    console.log(newDescription);
    axios
      .put(
        `${URL}/v1/person/${id}`,
        {
          description: newDescription,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        if (res.status === 200) {
          console.log(res.data);
          setPersons((persons) =>
            persons.map((person) =>
              person.id === id
                ? { ...person, description: newDescription }
                : person
            )
          );
          setOpenEdit(false);
          console.log("registro atualizado com sucesso");
        }
      });
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
            setPersons(persons.filter((person) => person.id !== id));
          } else {
            console.log(res.data);
          }
        });
    } catch (error) {
      console.log(error);
    }
  };

  const fetchPersons = () => {
    axios
      .get(`${URL}/v1/persons`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        if (res.status === 200) {
          setPersons(res.data);
        }
      })
      .catch((error) => {
        if (error.response.status === 404) {
          setError(error.response.data.detail);
        } else {
          setError("Um erro inesperado aconteceu, por favor tente novamente.");
        }
      });
  };

  const handlePersons = (person: Person) => {
    setPersons([...persons, person]);
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
                setOpenAdd(!openAdd);
              }}
            >
              Adicionar
            </button>
          </div>
        </div>
        <div className="ml-12">
          <label>Buscar:</label>
          <input
            className="shadow appearance-none border rounded w-1/2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-5 ml-2 max-w-[200px]"
            type="text"
            name=""
            id=""
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        {openAdd && (
          <AppBoxPerson handlePersons={handlePersons} setOpenAdd={setOpenAdd} />
        )}

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
                    {openEdit && editingPersonId === person.id && (
                      <AppEditPerson>
                        <div>
                          <form
                            onSubmit={(e) =>
                              handleEditPerson(e, person.id, description)
                            }
                          >
                            <label htmlFor="description">Nome:</label>
                            <input
                              required
                              className="shadow appearance-none border rounded w-1/2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-5 ml-2"
                              type="text"
                              name="description"
                              id="description"
                              value={description}
                              onChange={(e) =>
                                setNewDescription(e.target.value)
                              }
                            />
                            <div>
                              <button
                                className="mr-12 bg-slate-200 p-3 rounded-md hover:bg-slate-100 border"
                                onClick={() => {
                                  setOpenEdit(false);
                                  setEditingPersonId("");
                                  setNewDescription("");
                                }}
                              >
                                FECHAR
                              </button>
                              <button
                                type="submit"
                                className=" bg-slate-200 p-3 rounded-md hover:bg-slate-100 border"
                              >
                                ATUALIZAR
                              </button>
                            </div>
                          </form>
                        </div>
                      </AppEditPerson>
                    )}
                    {person.description}
                  </td>
                  <td className="pl-5">
                    <button
                      onClick={() => {
                        setOpenEdit(!openEdit);
                        setEditingPersonId(person.id);
                        setNewDescription(person.description);
                      }}
                      className="flex justify-center items-center rounded-md hover:bg-slate-300 px-3 py-2"
                    >
                      <img
                        className="min-w-4 w-5"
                        src="/icons/lapis.svg"
                        alt=""
                      />
                    </button>
                  </td>
                  <td className="pl-5">
                    <button
                      onClick={() => handleDeletePerson(person.id)}
                      className="flex justify-center items-center rounded-md hover:bg-red-500 px-3 py-2"
                    >
                      <img
                        className="min-w-4 w-5"
                        src="icons/lixeira.svg"
                        alt=""
                      />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {error && filteredPersons.length === 0 && (
            <div className="flex justify-center items-center w-full pb-10">
              {error}
            </div>
          )}
        </div>
      </AppContainer>
    </>
  );
}

export default Persons;
