"use client";

import Link from "next/link";

export function FixedBottomCta() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden">
      <Link
        href="https://www.doordash.com"
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full bg-[#FFDD00] text-[#FF000D] py-4 text-center font-bold uppercase tracking-wide hover:bg-[#FFE433] transition-colors shadow-xl"
        style={{ fontSize: '23px' }}
      >
        Order Ahead
      </Link>
    </div>
  );
}
