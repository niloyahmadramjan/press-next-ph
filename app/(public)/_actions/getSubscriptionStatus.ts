"use server"
import { cookies } from "next/headers";

export default async function getSubscriptionStatus() {


    const cookieStore = await cookies();
    const accessToken = cookieStore.get("accessToken")?.value || null;

    if (!accessToken) {
      return { success: false, message: "You are not logged in" };
    }

    const res = await fetch(`${process.env.BACKEND_API_URL}/api/subscription/status`, {
        headers: {
            cookie: `accessToken=${accessToken}`,
        },
    });

 

  const result = await res.json();
  return result;
}