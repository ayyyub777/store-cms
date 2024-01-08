import Link from "next/link";
import { RegisterForm } from "./components/register-form";

export default function RegisterPage() {
  return (
    <>
      <div className="flex flex-col space-y-2">
        <h1 className="text-2xl font-semibold tracking-tight">
          Create an account
        </h1>
        <p className="text-md text-muted-foreground">
          Enter your email below to create your account
        </p>
      </div>
      <RegisterForm />
      <p className="text-sm text-muted-foreground">
        Already have an account?{" "}
        <Link href="/auth/signin" className="text-white underline">
          Sign In
        </Link>
      </p>
    </>
  );
}
