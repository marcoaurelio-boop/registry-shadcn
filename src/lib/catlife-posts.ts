import { z } from "zod";

const CATLIFE_API_URL =
  "https://sydle-ui-dev.sydle.one/api/1/main/exemplosJose/ExampleAPI/getCatlifeBlogContent";

const CatlifePostSchema = z.object({
  tag: z.string(),
  titulo: z.string(),
  data: z.string(),
});

export type CatlifePost = z.infer<typeof CatlifePostSchema>;

export async function getCatlifePosts(): Promise<CatlifePost[]> {
  try {
    const response = await fetch(CATLIFE_API_URL, {
      // Cache on the server for 10 minutes; allow SWR
      next: { revalidate: 600 },
      headers: {
        accept: "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch catlife posts");
    }

    const data = await response.json();

    return z.array(CatlifePostSchema).parse(data);
  } catch (error) {
    if (error instanceof z.ZodError) {
      console.error("Validation error:", error.issues);
    } else {
      console.error("Error fetching catlife posts:", error);
    }
    throw error;
  }
}

