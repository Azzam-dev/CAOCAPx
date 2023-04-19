"use client";

import Image from "next/image";
import Link from "next/link";

export default function Avatar() {
  return (
    <button type="button" className="p-1 text-purple-600 hover:text-white">
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
  );
}
