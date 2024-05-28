import UrlGenerator from "@/components/UrlGenerator";
import { getUserByClerkId } from "@/services/user.service";
import { currentUser } from "@clerk/nextjs/server";
import React from "react";

const Dashboard = async () => {
  const user = await currentUser();
  const userId = await getUserByClerkId(user?.id);
  return (
    <div>
      <UrlGenerator userId={userId?.data?._id} />
    </div>
  );
};

export default Dashboard;
