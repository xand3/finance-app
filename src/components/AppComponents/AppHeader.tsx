"use client";

import AppDropMenu from "./AppDropMenu";

export default function AppHeader() {
  return (
    <header className="fixed top-0 shadow-md bg-slate-200 w-screen border-gray-600">
      <nav
        className="flex items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex">
          <div className="flex lg:flex-1 mr-5">
            <a href="/" className="-m-1.5 p-1.5">
              <img width={30} src="/icons/small-logo.png" alt="" />
            </a>
          </div>
        </div>

        <AppDropMenu />
      </nav>
    </header>
  );
}
