import UserForm from "@/components/UserForm";
import { currentUser } from "@clerk/nextjs/server";

export default async function Home() {
  const user = await currentUser();
  const userEmail = user?.emailAddresses[0].emailAddress;
  console.log(userEmail);
  const now = new Date();

  const time = now.toLocaleTimeString("en-IN", {
    hour: "2-digit",
    minute: "2-digit",
  });
  const date = now.toLocaleDateString("en-IN", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });
  return (
    <div className="flex min-h-screen items-center justify-center">
      {/* <h1 className="text-4xl font-extrabold lg:text-7xl">{time}</h1>
            <p className="text-lg font-medium text-sky-1 lg:text-2xl">{date}</p> */}
      <UserForm email={userEmail} clerkId={user?.id} />
    </div>
  );
}
