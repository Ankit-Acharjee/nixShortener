import UrlGenerator from "@/components/UrlGenerator";
import { getUserByClerkId } from "@/services/user.service";
import { currentUser } from '@clerk/nextjs/server';
import Link from "next/link";
import React from "react";

const page = async () => {
   const user = await currentUser();
  // console.log(user)
  const userId = await getUserByClerkId(user?.id);
  console.log(userId?.data?._id);
  // const uuid = generateUUID();
  // console.log(uuid);
  return (
    <div>
      <h1 className="m-10">Generate shorten Url:</h1>
      <UrlGenerator userId={userId?.data?._id} />
    </div>
  );
};

export default page;
