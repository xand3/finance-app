export default function LoginPage() {
  return (
    <main className="flex min-h-screen w-screen justify-center items-center">
      <div className="w-80 h-1/2 flex flex-col justify-center items-center rounded-lg border-2 bg-gray-500">
        <h1 className="text-xl">Fazer login</h1>
        <form action="">
          <div className="flex flex-col m-3">
            <label htmlFor="">E-mail:</label>
            <input type="email" name="" placeholder="Digite seu e-mail" id="" />
          </div>
          <div className="flex flex-col m-3">
            <label htmlFor="">Senha:</label>
            <input type="password" name="" placeholder="Digite sua senha" id="" />
          </div>
          <div className="flex justify-center mx-3">
            <button type="submit">ENTRAR</button>
          </div>
        </form>
      </div>
    </main>
  )
}