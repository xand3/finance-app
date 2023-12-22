import { registros } from "@/data/registros";

export default function Home() {
  const entradas: number = registros.reduce((acc, registro) => {
    return registro.recordType === "E" ? acc + registro.value : acc;
  }, 0);

  const saidas: number = registros.reduce((acc, registro) => {
    return registro.recordType === "S" ? acc + registro.value : acc;
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
        <div className="grid grid-cols-3 grid-rows-1 w-1/2 my-5">
          <div className="bg-slate-600 flex items-center flex-col border-solid border-2 rounded-md text-white mx-5">
            <p className="font-bold">Entradas</p>
            <p>{entradas.toFixed(2)}</p>
          </div>
          <div className="bg-slate-600 flex items-center flex-col border-solid border-2 rounded-md text-white mx-5">
            <p className="font-bold">Saidas</p>
            <p>{saidas.toFixed(2)}</p>
          </div>
          <div className="bg-slate-600 flex items-center flex-col border-solid border-2 rounded-md text-white mx-5">
            <p className="font-bold">Total Geral</p>
            <p>{(entradas - saidas).toFixed(2)}</p>
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
            {registros.map((registro) => (
              <tr key={registro.id}>
                <td>
                  <div className="mx-5">
                    <p className="text-center text-lg border-b border-gray-300">
                      {registro.descripton}
                    </p>
                  </div>
                </td>
                <td>
                  <div className="mx-5">
                    <p className="text-center text-lg border-b border-gray-300">
                      {registro.value}
                    </p>
                  </div>
                </td>
                <td>
                  <div className="mx-5">
                    <p className="text-center text-lg border-b border-gray-300">
                      {new Date(registro.date).toLocaleDateString("en-GB")}
                    </p>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}
