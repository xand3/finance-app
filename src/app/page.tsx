export default function Home() {
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
          <div>
            <p>Entradas</p>
          </div>
          <div>
            <p>Saidas</p>
          </div>
          <div>
            Total Geral
          </div>
        </div>
      </div>
    </main>
  )
}
