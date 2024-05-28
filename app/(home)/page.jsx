import UserForm from "@/components/UserForm";
import { currentUser } from "@clerk/nextjs/server";

export default async function Home() {
  const user = await currentUser();
  const userEmail = user?.emailAddresses[0].emailAddress;
  // console.log(userEmail);

  return (
    <div className="flex  min-h-screen items-center justify-center">
      <UserForm email={userEmail} clerkId={user?.id} />
    </div>
  );
}
