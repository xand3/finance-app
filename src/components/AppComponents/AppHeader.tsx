"use client";

import { useState } from "react";
import AppDropMenu from "./AppDropMenu";

type option = {
  name: string;
  icon: string;
  href: string;
};

const options: option[] = [
  {
    name: "Dashboard",
    icon: "/icons/dashboard.svg",
    href: "/dashboard",
  },
  {
    name: "Dividas",
    icon: "/icons/divida.svg",
    href: "/debts",
  },
  {
    name: "Receitas",
    icon: "/icons/receita.svg",
    href: "/incomes",
  },
  {
    name: "Credores / Devedores",
    icon: "/icons/pessoa.svg",
    href: "/persons",
  },
];

export default function AppHeader() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  }

  return (
    <header className="max-h-[80px] fixed top-0 shadow-md bg-slate-200 w-screen border-gray-600 flex items-center">
      <nav
        className="w-full flex items-center justify-between p-6 lg:px-8 uppercase text-sm"
        aria-label="Global"
      >
        <div className="flex">
          <div className="flex lg:flex-1 mr-5">
            <a
              href="/dashboard"
              className="-m-1.5 p-1.5 flex justify-center items-center"
            >
              <img className={`max-w-8 hidden md:block ${isOpen ? "" : ""}`} src="/icons/small-logo.png" alt="" />
            </a>
          </div>
          <button onClick={handleToggle} className="md:hidden">
            <img className="max-w-5" src="/icons/menu.svg" alt=""/>
          </button>
          <div className={`md:flex ${isOpen ? "block absolute top-16 overflow-hidden rounded-lg bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5 pr-6" : "hidden"}`}>
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
        </div>
        <AppDropMenu />
      </nav>
    </header>
  );
}
