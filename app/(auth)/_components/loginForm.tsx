"use client";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { loginAction } from "../_action/authAction";
import { useActionState, useEffect } from "react";
import { toast } from "sonner";
// import { useRouter } from "next/navigation";

const LoginForm = () => {
  const [state, action, pedding] = useActionState(loginAction, false);
  // const router = useRouter()
  useEffect(() => {
    if (!state) return;
    if (state.success) {
      toast.success(state.message || "Login successful");
      // router.push("/dashboard")
    }
    if (!state.success) {
      toast.error(state.message || "Login Faild");
    }
  }, [state]);

  return (
    <form action={action}>
      <Card className="p-5 space-y-4">
        <Input
          name="email"
          type="email"
          placeholder="Enter Your Email"
          required
        />
        <Input
          name="password"
          type="password"
          placeholder="Enter Your Password"
          required
        />
        <Button type="submit">{pedding ? "Submiting..." : "Login"}</Button>
      </Card>
    </form>
  );
};

export default LoginForm;
