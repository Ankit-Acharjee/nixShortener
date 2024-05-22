import UrlList from "@/components/UrlList";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { getUserByClerkId } from "@/services/user.service";
import { currentUser } from "@clerk/nextjs/server";
import Link from "next/link";
import React from "react";

const page = async () => {
  const user = await currentUser();
  const userData = await getUserByClerkId(user?.id);
  const urls = userData?.data?.urls;
  

  return (
    <div>
      <h1>URL List</h1>
      <UrlList urls={urls}/>
    </div>
  );
};

export default page;
