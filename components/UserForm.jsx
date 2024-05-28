"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";
import { useState } from "react";

const UserForm = ({ email, clerkId }) => {
  // console.log(email, clerkId);
  const [name, setName] = useState("");
  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`/api/user`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          clerkId,
          name,
          email,
        }),
      });
      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message);
      }
      router.push("/dashboard");
      console.log("User Created");
    } catch (error) {
      console.log(error.message);
      throw new Error("User Creation failed");
    }
  };

  return (
    <div className="flex h-screen w-full items-center justify-center bg-gray-900 bg-cover bg-no-repeat bg-[url('/background/userform.avif')]">
      <div className="rounded-xl bg-gray-800 bg-opacity-50 px-16 py-10 shadow-lg backdrop-blur-md max-sm:px-8">
        <div className="text-white">
          <div className="mb-8 flex flex-col items-center">
            <Label className="mb-2 text-2xl">Onboarding</Label>
          </div>

          <div className="mb-4 text-lg">
            <Input
              className="rounded-3xl border-none bg-yellow-400 bg-opacity-50 px-6 py-2 text-center text-inherit placeholder:text-white shadow-lg outline-none backdrop-blur-md focus-visible:ring-0 focus-visible:ring-offset-0 "
              type="text"
              name="name"
              placeholder="Enter your name"
              onChange={(e) => setName(e.target.value)}
              autoFocus
            />
          </div>

          <div className="mt-8 flex justify-center text-lg text-black">
            <Button
              onClick={handleSubmit}
              type="submit"
              className="rounded-3xl bg-yellow-400 bg-opacity-50 px-10 py-2 text-white shadow-xl backdrop-blur-md transition-colors duration-300 hover:bg-yellow-600"
            >
              Submit
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserForm;
