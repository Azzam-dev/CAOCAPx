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
  projects?: string[];
}

export default function CommandPalette({ projects = [] }: CommandPaletteProps) {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const filteredProjects = query
    ? projects?.filter((project) =>
        project.toLocaleLowerCase().includes(query.toLocaleLowerCase())
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
        className="fixed inset-0 p-4 pt-[25vh] overflow-y-auto"
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
            onChange={(project) => {
              // TODO: Navigate user to selected option
              setIsOpen(false);
              router.push(`/`); // router.push(`/projects/${project}`);
            }}
            as="div"
            className="relative max-w-xl mx-auto rounded-xl overflow-hidden shadow-2xl ring-1 ring-black/5 divide-y divide-gray-100 bg-white"
          >
            <div className="flex items-center px-4">
              <MagnifyingGlassIcon className="h-6 w-6 text-gray-500" />
              <Combobox.Input
                onChange={(event) => {
                  setQuery(event.target.value);
                  // TODO: handle search logic
                }}
                className="w-full h-12 text-sm text-gray-800 placeholder-gray-400 border-0 focus:ring-0 bg-transparent"
                placeholder="Search..."
              />
            </div>
            {filteredProjects.length > 0 && (
              <Combobox.Options
                static
                className="py-4 text-sm max-h-60 overflow-y-auto"
              >
                {filteredProjects.map((project) => (
                  <Combobox.Option key={project} value={project}>
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
                          {project}
                        </p>
                      </div>
                    )}
                  </Combobox.Option>
                ))}
              </Combobox.Options>
            )}

            {query && filteredProjects.length == 0 && (
              <p className="px-4 py-2 text-sm text-gray-500">no results</p>
            )}
          </Combobox>
        </Transition.Child>
      </Dialog>
    </Transition.Root>
  );
}
