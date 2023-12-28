export default function LoginPage() {
  return (
    <main className="flex h-screen w-screen justify-center items-center">
      <div className="w-80 h-1/2 flex flex-col justify-center items-center bg-blue-700">
        <h1>Fazer login</h1>
        <form action="">
          <div className="flex flex-col">
            <label htmlFor="">E-mail:</label>
            <input type="email" name="" placeholder="Digite seu e-mail" id="" />
          </div>
          <div className="flex flex-col">
            <label htmlFor="">Senha:</label>
            <input type="password" name="" placeholder="Digite sua senha" id="" />
          </div>
          <div className="flex justify-center">
            <button type="submit">ENTRAR</button>
          </div>
        </form>
      </div>
    </main>
  )
}