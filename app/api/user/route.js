import connectMongoDB from "@/db/mongoDb";
import User from "@/models/user.model";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { clerkId, name, email } = await req.json();
    await connectMongoDB();

    const userData = await User.create({ clerkId, name, email });

    if (!userData) {
      return NextResponse.json(
        { message: "User creation failed" },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { data: userData },
      { message: "User created." },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
