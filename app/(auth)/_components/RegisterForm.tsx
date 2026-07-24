"use client";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useActionState, useEffect } from "react";
import { toast } from "sonner";
import { registerAction } from "../_action/authAction";
import { useRouter } from "next/dist/client/components/navigation";

const RegisterForm = () => {
  const [state, action, pending] = useActionState(registerAction, false);
  const router = useRouter();
  useEffect(() => {
    if (!state) return;
    if (state.success) {
      toast.success(state.message || "Registration successful");
      router.push("/login");
    }
    if (!state.success) {
      toast.error(state.message || "Registration failed");
    }
  }, [state]);
  return (
    <form action={action}>
      <Card className="p-5 space-y-4">
        <Input name="name" type="text" placeholder="Enter Your Name" required />
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
        <Input
          name="profilePhoto"
          type="text"
          placeholder="Enter Profile Photo URL"
          required
        />
        <Button type="submit">
          {pending ? "Submitting..." : "Register"}
        </Button>
      </Card>
    </form>
  );
};

export default RegisterForm;
