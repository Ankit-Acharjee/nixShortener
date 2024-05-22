'use server'
import { generateUUID } from "@/functions/uuid";
import User from "@/models/user.model";

export async function getShortenedUrl() {
  let uuid;
  let urlCheck;

  do {
    uuid = generateUUID().substring(0,8);
    urlCheck = await User.findOne({ shortenedUrl: uuid }); // Replace 'uuid' with your actual field name
  } while (urlCheck);

  const url = uuid.toString();

  return url;
}


