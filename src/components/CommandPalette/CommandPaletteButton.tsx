"use client";

import { useAppDispatch } from "@/redux/hooks";
import { presentCommandPalette } from "@/redux/features/CommandPaletteSlice";

export default function CommandPaletteButton() {
  const dispatch = useAppDispatch();
  return (
    <button
      type="button"
      onClick={() => dispatch(presentCommandPalette())}
      className="inline-flex items-center rounded-lg  bg-gray-900 px-2 py-1 text-xs text-gray-100 ring-1 ring-inset ring-gray-500 hover:bg-gray-800"
    >
      <span>Command Menu</span>
      <p className="mx-2 my-[2px] rounded-md px-2 py-[2px] text-gray-400 shadow-sm ring-1 ring-inset ring-gray-400">
        ⌘
      </p>
      <p className="rounded-md px-2 py-[2px] text-gray-400 shadow-sm ring-1 ring-inset ring-gray-400">
        K
      </p>
    </button>
  );
}
