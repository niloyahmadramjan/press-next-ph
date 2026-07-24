"use client";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

const RegisterForm = () => {
  return (
    <form >
     <Card className="p-5 space-y-4">
            <Input name="name" type="test" placeholder="Enter Your Name" required />
            <Input name="email" type="email" placeholder="Enter Your Email" required />
            <Input name="password" type="password" placeholder="Enter Your Password" required />
            <Button type="submit">
               submit
            </Button>
        </Card>
    </form>
  );
};

export default RegisterForm;
