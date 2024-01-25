"use client";

import AppDropMenu from "./AppDropMenu";

type option = {
  name: string
  icon: string
  href: string
}

const options: option[] = [
  {
    name: "Dashboard",
    icon: "/icons/dashboard.png",
    href: "/dashboard",
  },
  {
    name: "Dividas",
    icon: "/icons/divida.png",
    href: "/debts",
  },
  {
    name: "Receitas",
    icon: "/icons/receita.png",
    href: "/incomes",
  },
  {
    name: "Credores/Devedores",
    icon: "/icons/pessoa.png",
    href: "/persons",
  }
];

export default function AppHeader() {
  return (
    <header className="max-h-16 fixed top-0 shadow-md bg-slate-200 w-screen border-gray-600 flex items-center">
      <nav
        className="w-full flex items-center justify-between p-6 lg:px-8 uppercase text-sm"
        aria-label="Global"
      >
        <div className="flex">
          <div className="flex lg:flex-1 mr-5">
            <a href="/dashboard" className="-m-1.5 p-1.5 flex justify-center items-center">
              <img width={30} src="/icons/small-logo.png" alt="" />
            </a>
          </div>
          {options.map((option) => (
            <a
              key={option.name}
              className="hover:bg-gray-100 rounded p-2"
              href={option.href}
            >
              <div className="flex flex-start items-center ">
                <img
                  className="ml-6 mr-5"
                  width={20}
                  src={option.icon}
                  alt={option.name}
                />

                {option.name}
              </div>
            </a>
          ))}
        </div>

        <AppDropMenu />
      </nav>
    </header>
  );
}
