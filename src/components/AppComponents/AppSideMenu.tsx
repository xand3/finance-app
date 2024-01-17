import { useState } from "react";

import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/20/solid";
import { Caveat } from "next/font/google";

const caveat = Caveat({
  style: "normal",
  weight: "400",
  subsets: ["latin"],
});

const options = [
  {
    name: "Dashboard",
    icon: "/icons/dashboard.png",
    href: "/dashboard"
  },
  {
    name: "Dividas",
    icon: "/icons/divida.png",
    href: "/debts"
  },
  {
    name: "Receitas",
    icon: "/icons/receita.png",
    href: "/incomes"
  }
]

export default function AppSideMenu() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="flex h-auto">
      <aside
        className={`${
          isOpen ? "min-w-1/4" : "w-20"
        } mt-[79px] fixed z-10 top-0 bg-slate-200 h-screen text-black`}
      >
        <div className="ml-3 flex fle-col justify-around">
          <h2
            className={`text-3xl p-4 ${isOpen ? "block" : "hidden"} ${
              caveat.className
            }`}
          >
            Finance App
          </h2>
          <button className="m-2 py-2 px-5" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <ChevronLeftIcon
                className="text-black h-5 w-5"
                aria-hidden="true"
              />
            ) : (
              <ChevronRightIcon
                className="text-black h-5 w-5"
                aria-hidden="true"
              />
            )}
          </button>
        </div>

        <div
          className={`text-md grid grid-cols-1 gap-6 ${
            isOpen ? "block" : "hidden"
          }`}
        >
          {options.map((option) => (
            <div key={option.name}  className="flex flex-start items-center ">
              <img className="ml-6 mr-5" width={30} src={option.icon} alt="" />
              <a className="hover:bg-gray-100 rounded p-2" href={option.href}>{option.name}</a>
            </div>
          ))}
        </div>
      </aside>
    </div>
  );
}
