"use server";
import { cookies } from "next/headers";

export const getMe = async () => {
  const cookieStore = await cookies();

  const accessToken = cookieStore.get("accessToken")?.value;

  if (!accessToken) {
    return {
      success: false,
      message: "Your are not logged!",
    };
  }
  const res = await fetch(`${process.env.BACKEND_URL}/api/users/me`, {
    headers: {
      // Authorization: accessToken as unknown as string
      Authorization: `${accessToken}`,
      //   Authorization: `Baarer ${accessToken}`,
    },
    cache: "force-cache",
    next: {
      revalidate: 60 * 60 * 60,
      tags: ["getMe"],
    },
  });
  const result = res.json();
  return result;
};
