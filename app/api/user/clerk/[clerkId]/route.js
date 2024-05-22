import connectMongoDB from "@/db/mongoDb";
import Url from "@/models/url.model";
import User from "@/models/user.model";
import { NextResponse } from "next/server";

export async function GET(_req, { params }) {
  const { clerkId } = params;
  try {
    await connectMongoDB();
    const userData = await User.findOne({ clerkId: clerkId });
    if (!userData)
      return NextResponse.json({ message: "No user found" }, { status: 400 });

    userData.urls = await Url.find({ _id: { $in: userData.urls } });
    return NextResponse.json(
      { data: userData },
      { message: "User details fetched" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
