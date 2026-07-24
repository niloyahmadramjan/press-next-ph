"use server";

type LoginState = {
  success: boolean;
  statasCode: number;
  massage: string;
  data: {
    accessToken: string;
    refreshToken: string;
  };
};
export const loginAction = async (prevState : LoginState, formData: FormData) => {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
//   console.log(prevState)


  const res = await fetch(`${process.env.BACKEND_URL}/api/auth/login`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });
  const result = await res.json();
  console.log(result);
  return result;
};
