import { Box, Button, Card, Flex, Text } from "@radix-ui/themes";
import Link from "next/link";
import React from "react";

type AllIssues = {
  title: string;
  description: string;
}[];

async function getAllIssues() {
  const res = await fetch(`${process.env.BASE_URL}/api/issues`);
  if (!res.ok) throw new Error("No issues found!");
  const data: AllIssues = await res.json();
  return data;
}

async function IssuesPage() {
  const issues = await getAllIssues();

  return (
    <div className="w-full h-screen">
      <div className="w-full pt-20 flex flex-col justify-center items-center">
        <div className="flex p-5 space-x-6 items-center">
          <h1 className="font-bold text-xl">All Issues</h1>
          <p className="text-xl">--OR--</p>
          <Link
            href="/issues/new"
            className="bg-fuchsia-700 text-black font-bold p-1 md:p-2 cursor-pointer rounded-md flex justify-center items-center hover:bg-fuchsia-500 hover:transition-colors"
          >
            <span className="text-center">New Issue</span>
          </Link>
        </div>
        <div className="space-y-8 w-full flex flex-col justify-items-center items-center">
          {issues.map((issue) => (
            <Card style={{ maxWidth: 350, maxHeight: 233 }} key={issue.title}>
              <Flex gap="3" align="center">
                <Box className="flex flex-col w-[250px] md:w-[350px] h-full">
                  <Text as="div" size="3" weight="bold">
                    {issue.title}
                  </Text>
                  <Text as="p" size="3" color="gray">
                    {issue.description}
                  </Text>
                </Box>
              </Flex>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

export default IssuesPage;
