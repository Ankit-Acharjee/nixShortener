import { SignedIn, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className=" sticky top-0 rounded-t-lg  bg-slate-800 px-8 py-3">
      <div className="flex justify-between items-center py-2">
        <Link href={`/`} className="flex items-center gap-1">
          <p className="text-[26px] font-extrabold text-white max-sm:hidden">
            NixUrl
          </p>
        </Link>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  );
};

export default Navbar;
