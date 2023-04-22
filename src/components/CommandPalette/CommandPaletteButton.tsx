"use client";

export default function CommandPaletteButton() {
  return (
    <button
      type="button"
      className="inline-flex items-center rounded-md  px-3 py-1 text-sm text-gray-100 ring-1 ring-inset ring-gray-400 hover:bg-gray-900"
    >
      <span>Command Menu .</span>
      <p className="rounded-lg  px-2 py-1 text-sm text-gray-400 shadow-sm ring-1 ring-inset ring-gray-400">
        ⌘
      </p>
      <p className="rounded-lg px-3 py-1 text-sm text-gray-400 shadow-sm ring-1 ring-inset ring-gray-400">
        K
      </p>
    </button>
  );
}
