"use client";

import Link from "next/link";
import * as Label from "@radix-ui/react-label";

import Avatar from "./Avatar";
import CommandPaletteButton from "./CommandPalette/CommandPaletteButton";

import { CubeIcon } from "@heroicons/react/24/solid";

export default function AppBar() {
  return (
    <div className="mx-auto bg-black px-2 sm:px-6 lg:px-8">
      <div className="relative flex h-16 items-center justify-between">
        <button type="button" className="p-1 text-yellow-500 hover:text-white">
          <Link href="/hexcoin">
            <CubeIcon className="h-7 w-7" />
          </Link>
        </button>
        <div className="flex flex-1 items-center justify-center">
          <Label.Root>Explore</Label.Root>
        </div>
        <CommandPaletteButton />
        <Avatar />
      </div>
    </div>
  );
}
