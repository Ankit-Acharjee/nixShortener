import UrlList from "@/components/UrlList";
import { getUserByClerkId } from "@/services/user.service";
import { currentUser } from "@clerk/nextjs/server";
import React from "react";

const List = async () => {
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

export default List;
