import Link from "next/link"

export default function NotFoundPage() {
  return (
    <div className="global flex justify-center items-center h-screen flex-col">
      <h1 className="text-2xl">Não conseguimos encontrar o conteúdo que está procurando :/</h1>
      <Link className="border-2 border-gray-300 rounded-md p-2" href="/">Voltar para tela inicial</Link>
    </div>
  )
} 