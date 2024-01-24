"use client";

import AppDropMenu from "./AppDropMenu";

const options = [
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
];

export default function AppHeader() {
  return (
    <header className="max-h-16 fixed top-0 shadow-md bg-slate-200 w-screen border-gray-600 flex items-center">
      <nav
        className="w-full flex items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex">
          <div className="flex lg:flex-1 mr-5">
            <a href="/" className="-m-1.5 p-1.5 flex justify-center items-center">
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
                  width={25}
                  src={option.icon}
                  alt=""
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
