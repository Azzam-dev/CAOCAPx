"use client";

export const Cube1by1 = () => {
  return (
    <div className="bg-gray-300 text-black flex items-center justify-center mb-5 aspect-square max-w-full rounded-lg overflow-hidden">
      cube 1:1
    </div>
  );
};

export const Cube2by3 = () => {
  return (
    <div className="bg-gray-300 text-black flex items-center justify-center mb-5 aspect-square max-w-full rounded-lg overflow-hidden">
      cube 1:1
    </div>
  );
};

export const Cube3by2 = () => {
  return (
    <div className="bg-gray-300 text-black flex items-center justify-center mb-5 aspect-[2/3] max-w-full rounded-lg overflow-hidden">
      cube 2:3
    </div>
  );
};

export const Cube9by16 = () => {
  return (
    <div className="bg-gray-300 text-black flex items-center justify-center mb-5 aspect-[9/16] max-w-full rounded-lg overflow-hidden">
      cube 9:16
    </div>
  );
};

export const Cube16by9 = () => {
  return (
    <div className="bg-gray-300 text-black flex items-center justify-center mb-5 aspect-[16/9] max-w-full rounded-lg overflow-hidden">
      cube 16:9
    </div>
  );
};

export default function MasonryGrid() {
  return (
    <div className="p-4 gap-5 columns-2 md:columns-3 lg:columns-5 ">
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
