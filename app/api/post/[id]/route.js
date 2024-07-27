import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export const DELETE = async(request, { params }) => {
      const { id } = params;
      console.log({id})
      try {
      const deletedPost = await prisma.post.delete({
        where: { id },
    });
      return NextResponse.json(deletedPost)
  } catch (error) {
      console.error("Error deleting post:", error);
      return NextResponse.json({error: "error: error deleting post"}, {status: 500})
  }
};
