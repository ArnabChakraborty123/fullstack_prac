import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
export async function POST(request) {
  try {
    const res = await request.json();
    const { title, content } = res;
    console.log({ res });

    const result = await prisma.post.create({
      data: {
        title,
        content,
        published: true,
        author: {
          create: { name: "arnab" },
        },
      },
    });
    return NextResponse.json({ result });
  } catch (error) {
    console.error("Error saving post:", error);
  }
}
