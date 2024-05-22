import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-between fixed z-50 w-full bg-dark-1 px-6 py-4 lg:px-10">
      <Link href={`/`} className="flex items-center gap-1">
        <p className="text-[26px] font-extrabold text-black max-sm:hidden">
          NixShortener
        </p>
      </Link>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </nav>
  );
};

export default Navbar;
