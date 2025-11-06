"use client";

import { useEffect, useState } from "react";

import type { CatlifePost } from "@/lib/catlife-posts";

interface UseCatlifePostsResult {
  posts: CatlifePost[];
  isLoading: boolean;
  error: Error | null;
}

export function useCatlifePosts(
  apiUrl: string = "/api/catlife-posts",
): UseCatlifePostsResult {
  const [posts, setPosts] = useState<CatlifePost[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    let isMounted = true;

    async function fetchPosts() {
      try {
        setIsLoading(true);
        setError(null);

        const response = await window.fetch(apiUrl);

        if (!response.ok) {
          throw new Error(`Failed to fetch posts: ${response.statusText}`);
        }

        const data = await response.json();

        if (isMounted) {
          setPosts(data as CatlifePost[]);
        }
      } catch (err) {
        if (isMounted) {
          setError(err instanceof Error ? err : new Error("Unknown error"));
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    }

    fetchPosts();

    return () => {
      isMounted = false;
    };
  }, [apiUrl]);

  return { posts, isLoading, error };
}

