const fetchUrlById = async (id) => {
  try {
    const res = await fetch(`${process.env.BASE_URL}/api/url/${id}`, {
      cache: "no-store",
    });
    if (!res.ok) {
      const error = await res.json();
      throw new Error(error.message);
    }
    return await res.json();
  } catch (error) {
    console.log(`Couldn't fetch Url`);
  }
};

export default fetchUrlById;
