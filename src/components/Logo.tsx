"use client";

import Image from "next/image";

export default function Logo() {
  return (
    <Image
      className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70]"
      src="images/cube.svg"
      alt="cube Logo"
      width={120}
      height={120}
      priority
    />
  );
}
