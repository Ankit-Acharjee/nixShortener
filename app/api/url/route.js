import { getShortenedUrl } from "@/actions/url.action";
import connectMongoDB from "@/db/mongoDb";
import Url from "@/models/url.model";
import User from "@/models/user.model";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { userId, originalUrl } = await req.json();
    await connectMongoDB();
    const shortenedUrl = await getShortenedUrl();
    const urlData = await Url.create({
      userId,
      originalUrl,
      shortenedUrl,
    });

    if (!urlData) {
      return NextResponse.json({ message: "Url not created" }, { status: 400 });
    }
    await User.findByIdAndUpdate(userId, {
      $push: { urls: urlData._id },
    });

    return NextResponse.json(
      { data: urlData },
      { message: "Url created" },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
