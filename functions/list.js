import { NextResponse } from "next/server";

export async function getUrlList({ id }) {
  try {
    const res = await fetch(`${process.env.BASE_URL}/api/list/${id}`, {
      cache: "no-store",
    });
    if (!res) {
      return NextResponse.json(
        { message: "Fetch Unsuccesful" },
        { status: 400 }
      );
    }
    return NextResponse.json(
      { data: res },
      { message: "Url List fetched" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse({ message: error.message }, { status: 500 });
  }
}
