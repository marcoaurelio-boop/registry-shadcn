import { NextResponse } from "next/server";

import { getCatlifePosts } from "@/lib/catlife-posts";

export async function GET() {
  try {
    const posts = await getCatlifePosts();

    return NextResponse.json(posts, {
      headers: {
        "Cache-Control": "s-maxage=600, stale-while-revalidate=300",
      },
    });
  } catch (error) {
    console.error("Error in API route:", error);
    return NextResponse.json(
      { error: "Failed to fetch catlife posts" },
      { status: 500 },
    );
  }
}

