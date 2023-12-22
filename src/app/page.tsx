import { registros } from "@/data/registros";

export default function Home() {
  const entradas: number = registros.reduce((acc, registro) => {
    return registro.recordType === 1 ? acc + registro.value : acc;
  }, 0);

  const saidas: number = registros.reduce((acc, registro) => {
    return registro.recordType === 0 ? acc + registro.value : acc;
  }, 0);

  return (
    <main className="flex flex-col justify-center">
      <header className="w-full flex justify-center text-2xl">
        <h1 className="m-3">Controle Financeiro</h1>
      </header>
      <div className="flex flex-col">
        <div className="m-3">
          <p>Este mês:</p>
        </div>
        <div className="grid grid-cols-3 grid-rows-1">
          <div className="flex items-center flex-col">
            <p>Entradas</p>
            <p>{entradas.toFixed(2)}</p>
          </div>
          <div className="flex items-center flex-col">
            <p>Saidas</p>
            <p>{saidas.toFixed(2)}</p>
          </div>
          <div className="flex items-center flex-col">
            <p>Total Geral</p>
            <p>{(entradas - saidas).toFixed(2)}</p>
          </div>
        </div>
      </div>
      <div>
        <table className="w-full m-3">
          <thead>
            <tr>
              <th>Descrição</th>
              <th>Valor</th>
              <th>Data</th>
            </tr>
          </thead>
          <tbody>
            {registros.map((registro) => (
              <tr key={registro.id}>
                <td>{registro.descripton}</td>
                <td>{registro.value}</td>
                <td>{new Date(registro.date).toLocaleDateString('en-GB')}</td>
                
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}
