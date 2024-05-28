"use client";

import { useState } from "react";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import { getShortenedUrl } from "@/actions/url.action";
import { useRouter } from "next/navigation";
import Link from "next/link";

const UrlGenerator = ({ userId }) => {
  const [url, setUrl] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const shortenedUrl = await getShortenedUrl();
      const response = await fetch("/api/url", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          userId,
          originalUrl: url,
          shortenedUrl,
        }),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message);
      }
      router.push("/list");
      console.log("Url Created");
    } catch (error) {
      console.log(error.message);
      throw new Error("Url Creation failed");
    } finally {
      router.refresh();
    }
  };
  return (
    <div>
      <div>
        <div className="mb-9">
          <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
            Generate{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
              Short URL
            </span>
          </h1>
          <p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
            Effortless Navigation: Transforming Complex URLs into Short,
            Memorable Links
          </p>
        </div>
        <div className="flex items-center mx-auto">
          <div className="relative w-full">
            <Input
              onChange={(e) => setUrl(e.target.value)}
              value={url}
              type="text"
              id="voice-search"
              className="focus-visible:ring-0 focus-visible:ring-offset-0 bg-gray-50 border py-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full  px-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Paste your original link here..."
              required
            />
          </div>
          <Button
            onClick={handleSubmit}
            type="submit"
            className="inline-flex items-center py-4 px-3 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Generate
          </Button>
        </div>
      </div>

      <div className=" mt-9 p-2 rounded-md w-full border-1 shadow-lg shadow-slate-200  bg-slate-50">
        <div className="flex flex-col ps-6 px-4 py-5 rounded-md bg-slate-100">
          <div className="m-2 ">
            <div className="mb-1 font-semibold text-slate-700 font-sans text-[19px]">
              Details:
            </div>
            <div className="ms-4 font-medium font-sans text-slate-600">
              <ul className="">
                <li>Original URL: <Link className="ms-5" href={`${url}`}>{url}</Link> </li>
                <li>Short URL: </li>
                <li>Created at: </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UrlGenerator;
