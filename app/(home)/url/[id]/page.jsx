import UrlRedirect from "@/components/UrlRedirect";
import fetchUrlById from "@/services/url.service";

const page = async ({ params }) => {
  console.log(params);
  const { id } = params;
  console.log(id);
  let originalUrl;

  try {
    const data = await fetchUrlById(id);
    originalUrl = data?.data?.originalUrl;
  } catch (error) {
    console.log(error);
  }

  return (
    <div>
      <h1>Redirecting...</h1>
      <UrlRedirect originalUrl={originalUrl} />
    </div>
  );
};

export default Url;
