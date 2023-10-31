import { NextResponse } from "next/server";
import prisma from "@/../prisma/client";

export async function GET() {
  try {
    const allIssues = await prisma.issue.findMany();
    return NextResponse.json(allIssues, { status: 200 });
  } catch (error) {
    return NextResponse.json("something went wrong " + error, { status: 500 });
  }
}
