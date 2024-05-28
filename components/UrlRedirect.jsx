import React from "react";
import { redirect } from "next/navigation";
const UrlRedirect = ({ originalUrl }) => {
  if (originalUrl) {
    redirect(originalUrl);
  }
  return <div></div>;
};

export default UrlRedirect;
