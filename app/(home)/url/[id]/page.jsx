
import UrlRedirect from "@/components/UrlRedirect";
import fetchUrlById from "@/services/url.service";
import { redirect } from "next/navigation";

const page = async ({ params }) => {
  const { id } = params;
  console.log(id);
  let originalUrl;

  try {
    const data = await fetchUrlById(id);
     originalUrl= data?.data?.originalUrl
    console.log(data)
    console.log(originalUrl);

  } catch (error) {
    console.log(error);
  }

  return (
    <div>
      <h1>Redirecting...</h1>
      <UrlRedirect originalUrl={originalUrl}/>
    </div>
  );
};

export default page;
