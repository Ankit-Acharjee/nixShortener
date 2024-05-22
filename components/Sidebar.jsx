"use client";
import Image from "next/image";
import Link from "next/link";

const Sidebar = () => {
  return (
    <section className="sticky left-0 top-0 flex h-screen w-fit flex-col  justify-between  bg-dark-1 p-6 pt-28 text-black max-sm:hidden md:w-[264px] lg:w-[264px]">
        return (
        <Link
          href={"/"}
          className="flex gap-4 items-center p-4 rounded-lg justify-start bg-blue-1"
        >
          {/* <Image src={"/icons/home.svg"} alt={home} width={24} height={24} /> */}
          <p className="text-lg font-semibold max-lg:hidden">Dashboard</p>
        </Link>
        );
    </section>
  );
};

export default Sidebar;
