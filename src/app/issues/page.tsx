import { Button } from "@radix-ui/themes";
import Link from "next/link";
import React from "react";

const IssuesPage = () => {
  return (
    <div className="w-full h-screen">
      <div className="w-full pt-20">
        <div className="p-5">
          <Link href="/issues/new">
            <Button>New Issue</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default IssuesPage;
