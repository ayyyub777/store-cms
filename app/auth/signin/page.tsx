import Link from "next/link";

import { SignInForm } from "./components/signin-form";

const SignInPage = () => {
  return (
    <>
      <div className="flex flex-col space-y-2">
        <h1 className="text-2xl font-semibold tracking-tight">Welcome Back!</h1>
        <p className="text-md text-muted-foreground">
          Enter your credentials to access your account
        </p>
      </div>
      <SignInForm />
      <p className="text-sm text-muted-foreground">
        Not registered yet?{" "}
        <Link href="/auth/register" className="text-white underline">
          Create an account
        </Link>
      </p>
    </>
  );
};

export default SignInPage;
