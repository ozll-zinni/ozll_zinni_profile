"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full flex justify-between items-center p-4 z-50">
      {/* 왼쪽 로고 */}
      <Link href="/" className="text-lg">
        ozll_zinni
      </Link>

      {/* 오른쪽 메뉴 */}
      <div className="flex gap-6">
        <Link href="/about">about</Link>
        <Link href="/work">skills</Link>
        <Link href="/experience">experience</Link>
        <Link href="https://yejineeee.tistory.com/" target="_blank">
          blog
        </Link>
      </div>
    </nav>
  );
}
