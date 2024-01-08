"use client";

import { signOut } from "next-auth/react";

const Logout = ({ children }: { children: React.ReactNode }) => {
  return <div onClick={() => signOut()}>{children}</div>;
};

export default Logout;
