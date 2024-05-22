import connectMongoDB from "@/db/mongoDb";
import Url from "@/models/url.model";
import { NextResponse } from "next/server";

export async function GET(_req, { params }) {
  try {
    const { id } = params;
    await connectMongoDB();
    const res = await Url.findOneAndUpdate(
      { shortenedUrl: id },
      { $push: { analytics: { time: new Date() } } },
      {new: true}
    );

    console.log(res?.originalUrl);
    if (!res) {
      return NextResponse.json({ message: "Url not found" }, { status: 400 });
    }
    return NextResponse.json(
      { data: res },
      { message: "Url fetched" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Data could not be fetched" },
      { status: 500 }
    );
  }
}
