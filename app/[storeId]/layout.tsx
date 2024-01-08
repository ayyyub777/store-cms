import { getServerSession } from "next-auth";
import { options } from "../api/auth/[...nextauth]/options";
import { redirect } from "next/navigation";

import prisma from "@/lib/prisma";
import { Search } from "./components/search";
import { Sidebar } from "./components/sidebar";
import { UserNav } from "./components/user-nav";

export default async function DashboardLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { storeId: string };
}) {
  const session = await getServerSession(options);

  if (!session?.user) {
    redirect("/auth/signin");
  }

  const store = await prisma.store.findFirst({
    where: {
      id: params.storeId,
      userId: session.user.id,
    },
  });

  if (!store) {
    redirect("/");
  }

  return (
    <>
      <Sidebar />
      <div className="lg:ml-64">
        <div className="h-full px-4 py-8 lg:px-8 max-w-7xl m-auto">
          <div className="flex justify-between items-center mb-8">
            <Search />
            <UserNav />
          </div>

          {children}
        </div>
      </div>
    </>
  );
}
