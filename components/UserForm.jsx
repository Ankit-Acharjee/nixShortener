"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

const UserForm = ({ email, clerkId }) => {
  console.log(email, clerkId);
  const [name, setName] = useState("");
  console.log(name);
  // const [email, setEmail] = useState("");
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
      router.push('/dashboard')
      console.log("User Created");
    } catch (error) {
      console.log(error.message);
      throw new Error("User Creation failed");
    }
  };

  return (
    <div className="w-full max-w-sm mx-auto mt-20 bg-white border-2 border-gray-300 p-5 rounded-md">
      <div className="md:flex md:items-center mb-6">
        <Label
          htmlFor="name"
          className="block text-gray-700 font-bold md:text-right mb-1 md:mb-0 pr-4"
        >
          Name
        </Label>

        <Input
          id="name"
          type="text"
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
          className="bg-gray-200 appearance-none border-2 border-gray-300 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
        />
      </div>
      <div className="md:flex md:items-center">
        <div className="md:w-1/3"></div>
        <div className="md:w-2/3 flex justify-center mt-3">
          <Button
            onClick={handleSubmit}
            type="submit"
            className="shadow bg-gray-500 hover:bg-gray-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
          >
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
};

export default UserForm;
