import React from "react";
import RegisterForm from "../_components/RegisterForm";
import Link from "next/link";

const RegisterPage = () => {
  return (
    <div className="w-full max-w-sm mx-auto">
      <div className="flex min-h-screen items-center justify-center">
        <div className="w-full max-w-md space-y-6 rounded-lg border p-8 shadow-lg">
          {/* FORM GENERIC TEXTS */}
          <div className="space-y-2 text-center">
            <h1 className="text-3xl font-bold">Welcome</h1>
            <p className="text-gray-500">
              Register your account
            </p>
          </div>
          {/* Login form  */}
          <RegisterForm />
          <p>
            <span className=" p-1">Your have an account please</span>
            <Link className="text-red-400 underline" href="/login">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
