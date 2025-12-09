import { foodTruck } from "@/config/foodTruck.config";
import Link from "next/link";

export function Footer() {
  const { name } = foodTruck;
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#0a0a0a] border-t border-[#2a2a2a] py-8">
      <div className="max-w-[1200px] mx-auto px-6 text-center">
        <p className="text-white/40 text-sm">
          © {year} {name}. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

