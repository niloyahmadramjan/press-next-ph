import Link from "next/link";
import LoginForm from "../_components/loginForm";

export default function LoginPage() {
  return (
    <div className="w-full max-w-sm mx-auto">
      <div className="flex min-h-screen items-center justify-center">
        <div className="w-full max-w-md space-y-6 rounded-lg border p-8 shadow-lg">
          {/* FORM GENERIC TEXTS */}
          <div className="space-y-2 text-center">
            <h1 className="text-3xl font-bold">Welcome Back!</h1>
            <p className="text-gray-500">
              Enter your credentials to access your account
            </p>
          </div>
          {/* Login form  */}
          <LoginForm />
          <p>
            <span className=" p-1">Are you new here please</span>
            <Link className="text-red-400 underline" href="/register">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
