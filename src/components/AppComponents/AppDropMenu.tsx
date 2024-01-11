import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon, ArrowLongLeftIcon } from "@heroicons/react/20/solid";

import { useRouter } from "next/navigation";

export default function AppDropMenu() {
  const router = useRouter();

  const handleLogout = () => {
    router.push("/login");
    localStorage.removeItem("token");
  };

  return (
    <Popover className="relative">
      <Popover.Button className="inline-flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
        <div>
          <img width={25} src="/devs/dev.png" alt="" />
        </div>
        <ChevronDownIcon className="h-5 w-5" aria-hidden="true" />
      </Popover.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
      >
        <Popover.Panel className="absolute -right-24 top-2 mt-5 flex -translate-x-1/2 px-4">
          <div className="w-1/2 max-w-sm flex-auto overflow-hidden rounded-lg bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
            <div className="">
              <div className="group relative flex gap-x-6 rounded-sm p-4 hover:bg-gray-50">
                <div className="flex h-7 w-7 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                  <img width={25} src="/devs/dev.png" />
                </div>
                <div>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 rounded-md hover:bg-gray-100">Perfil</a>
                </div>
              </div>
              <div className="group relative flex gap-x-6 rounded-sm p-4 hover:bg-gray-50">
                <div className="flex h-7 w-7 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                  <ArrowLongLeftIcon/>
                </div>
                <div>
                  <button
                    onClick={handleLogout}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md"
                  >
                    Sair
                    <span className="absolute inset-0" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
