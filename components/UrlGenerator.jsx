"use client";

import { useState } from "react";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import { getShortenedUrl } from "@/actions/url.action";
import { useRouter } from "next/navigation";

const UrlGenerator = ({ userId }) => {
  const [url, setUrl] = useState("");
  const router = useRouter();
  console.log(userId)

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const shortenedUrl = await getShortenedUrl();
      const response = await fetch("/api/url", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          userId,
          originalUrl:url,
          shortenedUrl,
        }),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message);
      }
      router.push('/list')
      console.log("Url Created");
    } catch (error) {
      console.log(error.message);
      throw new Error("Url Creation failed");
    }
  };
  return (
    <div>
      <Label>Url:</Label>
      <Input
        onChange={(e) => setUrl(e.target.value)}
        value={url}
        placeholder="Enter an Url"
        required
        type="text"
      />
      <div className="flex justify-center mt-3">
        <Button onClick={handleSubmit}>Submit</Button>
      </div>
    </div>
  );
};

export default UrlGenerator;
