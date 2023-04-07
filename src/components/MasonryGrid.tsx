export default function MasonryGrid() {
  return (
    <div className="p-1 grid gap-4 grid-cols-2 md:grid-cols-3">
      <div className="bg-gray-300 text-black flex items-center justify-center h-40 max-w-full">
        cube 1:1
      </div>
      <div className="bg-gray-300 text-black flex items-center justify-center h-40 max-w-full">
        cube 1:1
      </div>
      <div className="bg-gray-300 text-black flex items-center justify-center h-40 max-w-full">
        cube 1:1
      </div>

      <div className="bg-gray-300 text-black flex items-center justify-center h-40 max-w-full">
        cube 2:3
      </div>
      <div className="bg-gray-300 text-black flex items-center justify-center h-40 max-w-full">
        cube 2:3
      </div>
      <div className="bg-gray-300 text-black flex items-center justify-center h-40 max-w-full">
        cube 2:3
      </div>

      <div className="bg-gray-300 text-black flex items-center justify-center h-60 max-w-full">
        cube 3:2
      </div>
      <div className="bg-gray-300 text-black flex items-center justify-center h-60 max-w-full">
        cube 3:2
      </div>
      <div className="bg-gray-300 text-black flex items-center justify-center h-60 max-w-full">
        cube 3:2
      </div>
    </div>
  );
}
