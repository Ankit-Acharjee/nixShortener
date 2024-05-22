import Link from "next/link";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import React from "react";
import Copy from "./Copy";

const UrlList = ({ urls }) => {
  return (
    <div className="p-4 shadow-lg rounded-md border border-slate-300 my-3 flex justify-between gap-5 items-start">
      <Table className="">
        <TableHeader>
          <TableRow>
            <TableHead>Original Url</TableHead>
            <TableHead>Shortened Url</TableHead>
            <TableHead>Analytics</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {urls &&
            urls.map((url) => {
              return (
                <React.Fragment key={url?._id}>
                  <TableRow>
                    <TableCell className="pr-7 ">
                      {url?.originalUrl.slice(0, 50)}
                      {url?.originalUrl.length > 50 ? "..." : ""}
                    </TableCell>
                    <TableCell>
                      <div className="flex gap-5 pr-7">
                        <Link
                          target="_blank"
                          href={`/url/${url?.shortenedUrl}`}
                        >
                          {`${process.env.BASE_URL}/${url?.shortenedUrl}`}
                        </Link>
                        <Copy
                          url={`${process.env.BASE_URL}/url/${url?.shortenedUrl}`}
                        />
                      </div>
                    </TableCell>
                    <TableCell>{url?.analytics.length}</TableCell>
                  </TableRow>
                </React.Fragment>
              );
            })}
        </TableBody>
      </Table>
    </div>
  );
};

export default UrlList;
