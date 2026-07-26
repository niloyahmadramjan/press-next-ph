"use server";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import jwt, { JwtPayload } from "jsonwebtoken";

type LoginState = {
  success: boolean;
  statasCode: number;
  massage: string;
  data: {
    accessToken: string;
    refreshToken: string;
  };
};
export const loginAction = async (
  prevState: LoginState,
  formData: FormData,
) => {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  //   console.log(prevState)

  const res = await fetch(`${process.env.BACKEND_API_URL}/api/auth/login`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });
  const result = await res.json();
  if (result.success) {
    const cookieStore = await cookies();
    cookieStore.set("accessToken", result.data.accessToken, {
      httpOnly: true,
      maxAge: 60 * 60 * 24,
      sameSite: "lax",
    });
    cookieStore.set("refreshToken", result.data.refreshToken, {
      httpOnly: true,
      maxAge: 60 * 60 * 24 * 7,
      sameSite: "lax",
    });
  }

  const decodedToken = jwt.decode(result.data.accessToken) as JwtPayload;

  if (decodedToken.role === "USER") {
    redirect("/dashboard");
  } else if (decodedToken.role === "ADMIN") {
    redirect("/admin-dashboard");
  } else if (decodedToken.role === "AUTHOR") {
    redirect("/author-dashboard");
  }
  return result;
};

type RegisterState = {
  success: boolean;
  statasCode: number;
  massage: string;
  data: {
    user: {
      id: string;
      name: string;
      email: string;
      activeStatus: string;
      role: string;
      createdAt: string;
      updatedAt: string;
      profile: {
        id: string;
        profilePhoto: string;
        bio: string | null;
        userId: string;
        createdAt: string;
        updatedAt: string;
      };
    };
  };
};

export const registerAction = async (
  prevState: RegisterState,
  formData: FormData,
) => {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const profilePhoto = formData.get("profilePhoto") as string;
  const password = formData.get("password") as string;
  //   console.log(prevState)

  const res = await fetch(`${process.env.BACKEND_API_URL}/api/users/register`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({ name, email, profilePhoto, password }),
  });
  const result = await res.json();

  return result;
};
