"use server"
import { cookies } from "next/headers";

const getPremiumNews = async ({
  query,
}: {
  query?: { [key: string]: string | string[] | undefined };
}) => {
  const params = new URLSearchParams();
  if (query && query.searchTerm) {
    params.set("searchTerm", query.searchTerm as string);
  }

  const cookieStore = await cookies();
  const accessToken = cookieStore.get("accessToken")?.value || null;

  if (!accessToken) {
    //   throw new Error("Access token not found");
    return {
      success: false,
      data: [],
      message: "You are not authorized to access premium news. Please log in.",
    };
  }

  const res = await fetch(
    `${process.env.BACKEND_API_URL}/api/news/premium?${params.toString()}`,
    {
      headers: {
        //   "Content-Type": "application/json",
        //   "Authorization": `Bearer ${accessToken}`
        cookie: `accessToken=${accessToken}`,
      },
      cache: "no-store",
      next: {
        revalidate: 60 * 60 * 6,
        tags: ["premium-news"],
      },
    },
  );

  if (!res.ok) {
    return {
      success: false,
      data: [],
      message: "Failed to fetch premium news.",
    };
  }

  const result = await res.json();
  return result;
};

export default getPremiumNews;
