import { useState } from "react";

import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/20/solid";
import { Caveat } from "next/font/google";

const caveat = Caveat({
  style: "normal",
  weight: "400",
  subsets: ["latin"],
});

export default function AppSideMenu() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="flex h-screen">
      <aside
        className={`${
          isOpen ? "w-64" : "w-20"
        } mt-[79px] fixed z-10 top-0 bg-slate-200 h-full text-black`}
      >
        <div className="flex fle-col justify-around">
          <h2 className={`text-3xl p-4 ${isOpen ? "block" : "hidden"} ${caveat.className}`}>
            Finance App
          </h2>
          <button
            className="m-2 py-2 px-5"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <ChevronLeftIcon className="text-black h-5 w-5" aria-hidden="true" /> : <ChevronRightIcon className="text-black h-5 w-5" aria-hidden="true" />}
          </button>
        </div>
        
        <div className={`pl-8 text-lg flex flex-col ${isOpen ? "block": "hidden"}`}>
          <a href="#">Dashboard</a>
        </div>
      </aside>
    </div>
  );
}
