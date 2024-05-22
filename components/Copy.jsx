'use client'
import { CheckCheck, Clipboard } from "lucide-react";
import React, { useState } from "react";

const Copy = ({ url }) => {
  const [isCopied, setIsCopied] = useState(false);
  const copyToClipboard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      setIsCopied(true);
      console.log("Copied to clipboard");
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };
  console.log(url)
  return (
    <div>
      {!isCopied ? (
        <Clipboard className="cursor-pointer w-5 h-5" onClick={() => copyToClipboard(url)}/>
      ) : (
        <CheckCheck
          className="text-green-500 w-4 h-4 "
          
        />
      )}
    </div>
  );
};

export default Copy;
