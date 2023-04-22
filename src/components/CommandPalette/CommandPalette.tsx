"use client";

/* 
  NOTE: this component was built with the help of this tutorial
  https://www.youtube.com/watch?v=-jix4KyxLuQ
  more work needs to be done, please follow the instructions in this video 
*/

import { useState, useEffect, Fragment } from "react";
import { useRouter } from "next/navigation";
import { Dialog, Combobox, Transition } from "@headlessui/react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

interface CommandPaletteProps {
  // isOpen: boolean;
  paths?: string[];
}

export default function CommandPalette({
  paths = [],
}: // isOpen,
CommandPaletteProps) {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const filteredPaths = query
    ? paths?.filter((path) =>
        path.toLocaleLowerCase().includes(query.toLocaleLowerCase())
      )
    : [];

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key == "k" && (event.metaKey || event.ctrlKey)) {
        setIsOpen(!isOpen);
      }
    }
    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen]);

  return (
    <Transition.Root
      show={isOpen}
      as={Fragment}
      afterLeave={() => setQuery("")}
    >
      <Dialog
        onClose={setIsOpen}
        className="fixed inset-0 overflow-y-auto p-4 pt-[25vh]"
      >
        <Transition.Child
          enter="duration-300 ease-out"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="duration-300 ease-in"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Dialog.Overlay className="fixed inset-0 bg-gray-500/50" />
        </Transition.Child>
        <Transition.Child
          enter="duration-300 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-300 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Combobox
            value=""
            onChange={(path) => {
              // TODO: Navigate user to selected option
              setIsOpen(false);
              path == "home" ? router.push(`/`) : router.push(`/${path}`);
            }}
            as="div"
            className="relative mx-auto max-w-xl divide-y divide-gray-100 overflow-hidden rounded-xl bg-white shadow-2xl ring-1 ring-black/5"
          >
            <div className="flex items-center px-4">
              <MagnifyingGlassIcon className="h-6 w-6 text-gray-500" />
              <Combobox.Input
                onChange={(event) => {
                  setQuery(event.target.value);
                }}
                className="h-12 w-full border-0 bg-transparent text-sm text-gray-800 placeholder-gray-400 focus:ring-0"
                placeholder="Search..."
              />
            </div>
            {filteredPaths.length > 0 && (
              <Combobox.Options
                static
                className="max-h-60 overflow-y-auto py-4 text-sm"
              >
                {filteredPaths.map((path) => (
                  <Combobox.Option key={path} value={path}>
                    {({ active }) => (
                      <div
                        className={`px-4 py-2 
                    ${active ? "bg-indigo-600" : "bg-transparent"}`}
                      >
                        <p
                          className={`font-medium ${
                            active ? "text-white" : "text-gray-900"
                          }`}
                        >
                          {path}
                        </p>
                      </div>
                    )}
                  </Combobox.Option>
                ))}
              </Combobox.Options>
            )}

            {query && filteredPaths.length == 0 && (
              <p className="px-4 py-2 text-sm text-gray-500">no results</p>
            )}
          </Combobox>
        </Transition.Child>
      </Dialog>
    </Transition.Root>
  );
}
