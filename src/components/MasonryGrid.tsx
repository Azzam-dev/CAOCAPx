"use client";

export const Cube1by1 = () => {
  return (
    <div className="mb-5 flex aspect-square max-w-full items-center justify-center overflow-hidden rounded-lg bg-gray-300 text-black">
      cube 1:1
    </div>
  );
};

export const Cube2by3 = () => {
  return (
    <div className="mb-5 flex aspect-square max-w-full items-center justify-center overflow-hidden rounded-lg bg-gray-300 text-black">
      cube 1:1
    </div>
  );
};

export const Cube3by2 = () => {
  return (
    <div className="mb-5 flex aspect-[2/3] max-w-full items-center justify-center overflow-hidden rounded-lg bg-gray-300 text-black">
      cube 2:3
    </div>
  );
};

export const Cube9by16 = () => {
  return (
    <div className="mb-5 flex aspect-[9/16] max-w-full items-center justify-center overflow-hidden rounded-lg bg-gray-300 text-black">
      cube 9:16
    </div>
  );
};

export const Cube16by9 = () => {
  return (
    <div className="mb-5 flex aspect-[16/9] max-w-full items-center justify-center overflow-hidden rounded-lg bg-gray-300 text-black">
      cube 16:9
    </div>
  );
};

export default function MasonryGrid() {
  return (
    <div className="columns-2 gap-5 p-4 md:columns-3 lg:columns-5 ">
      <Cube1by1 />
      <Cube1by1 />
      <Cube1by1 />

      <Cube2by3 />
      <Cube2by3 />
      <Cube2by3 />

      <Cube3by2 />
      <Cube3by2 />
      <Cube3by2 />

      <Cube9by16 />
      <Cube9by16 />
      <Cube9by16 />

      <Cube16by9 />
      <Cube16by9 />
      <Cube16by9 />
    </div>
  );
}
