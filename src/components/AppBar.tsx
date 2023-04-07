"use client";

import {
  UserCircleIcon,
  MoonIcon,
  BellIcon,
  CubeIcon,
} from "@heroicons/react/24/solid";

export default function AppBar() {
  return (
    <div className="bg-black mx-auto px-2 sm:px-6 lg:px-8">
      <div className="relative flex h-16 items-center justify-between">
        <button type="button" className="p-1 text-yellow-500 hover:text-white ">
          <CubeIcon className="h-7 w-7" />
        </button>
        <div className="flex flex-1 items-center justify-center">
          <p>Explore</p>
        </div>
        <div>
          <button type="button" className="p-1 text-gray-400 hover:text-white ">
            <MoonIcon className="h-5 w-5" />
          </button>
          <button type="button" className="p-1 text-gray-400 hover:text-white ">
            <BellIcon className="h-5 w-5" aria-hidden="true" />
          </button>
          <button
            type="button"
            className="p-1 text-purple-600 hover:text-white "
          >
            <UserCircleIcon className="h-8 w-8" />
          </button>
        </div>
      </div>
    </div>
  );
}
