"use client"

import { records } from "@/data/Records";
import RegisterModal from "@/components/RegisterModal";
import { useState } from "react";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  
  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }


  const entradas: number = records.reduce((acc, record) => {
    return record.recordType === "E" ? acc + record.value : acc;
  }, 0);

  const saidas: number = records.reduce((acc, record) => {
    return record.recordType === "S" ? acc + record.value : acc;
  }, 0);

  return (
    <main className="flex flex-col justify-center">
      <header className="w-full flex justify-center text-2xl">
        <h1 className="m-3">Controle Financeiro</h1>
      </header>
      <div className="flex flex-col">
        <div className="mx-6">
          <p>Este mês:</p>
        </div>
        <div className="flex justify-between">
          <div className="grid grid-cols-3 grid-rows-1 w-1/2 my-5">
            <div className="min-h-20 bg-slate-600 flex items-center justify-center flex-col border-solid border-2 rounded-md text-white mx-5">
              <p className="font-bold">Entradas</p>
              <p className="text-green-300">{entradas.toFixed(2)}</p>
            </div>
            <div className="bg-slate-600 flex items-center justify-center flex-col border-solid border-2 rounded-md text-white mx-5">
              <p className="font-bold">Saidas</p>
              <p className="text-red-300">{saidas.toFixed(2)}</p>
            </div>
            <div className="bg-slate-600 flex items-center justify-center flex-col border-solid border-2 rounded-md text-white mx-5">
              <p className="font-bold">Total Geral</p>
              <p>{(entradas - saidas).toFixed(2)}</p>
            </div>
          </div>
          <div className="flex justify-center mx-6 my-5 border-2 border-slate-600 rounded-md w-36">
            <button onClick={openModal}>ADICIONAR</button>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <table className="w-full mx-10">
          <thead>
            <tr className="text-xl border-y-2 border-solid border-gray-600">
              <th className="text-left">Descrição</th>
              <th>Valor</th>
              <th>Data</th>
            </tr>
          </thead>
          <tbody>
            {records.map((record) => (
              <tr key={record.id}>
                <td>
                  <div className="mx-5">
                    <p className="text-center text-lg border-b border-gray-300">
                      {record.descripton}
                    </p>
                  </div>
                </td>
                <td>
                  <div className="mx-5">
                    <p className="text-center text-lg border-b border-gray-300">
                      {record.value}
                    </p>
                  </div>
                </td>
                <td>
                  <div className="mx-5">
                    <p className="text-center text-lg border-b border-gray-300">
                      {new Date(record.date).toLocaleDateString("en-GB")}
                    </p>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {isOpen && 
        <RegisterModal closeModal={closeModal}/>
      }
    </main>
  );
}
