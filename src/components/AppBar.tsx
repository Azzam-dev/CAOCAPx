"use client";

import Link from "next/link";
import Image from "next/image";

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
        <button type="button" className="p-1 text-yellow-500 hover:text-white">
          <Link href="/hexcoin">
            <CubeIcon className="h-7 w-7" />
          </Link>
        </button>
        <div className="flex flex-1 items-center justify-center">
          <p>Explore</p>
        </div>
        <div>
          <button type="button" className="p-1 text-gray-400 hover:text-white">
            <MoonIcon className="h-5 w-5" />
          </button>
          <button type="button" className="p-1 text-gray-400 hover:text-white">
            <Link href="/notifications">
              <BellIcon className="h-5 w-5" aria-hidden="true" />
            </Link>
          </button>

          <button
            type="button"
            className="p-1 text-purple-600 hover:text-white"
          >
            <Link href="/profile">
              <Image
                className="rounded-full"
                src="/avatar.jpg"
                width={30}
                height={30}
                alt="Rounded avatar"
              />
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}
