import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { options } from "@/app/api/auth/[...nextauth]/options";
import { redirect } from "next/navigation";

import { Button } from "@/components/ui/button";
import StoreSwitcher from "./store-switcher";
import { Routes } from "./routes";

export const Sidebar = async () => {
  const session = await getServerSession(options);

  if (!session?.user) {
    redirect("/auth/signin");
  }

  const stores = await prisma.store.findMany({
    where: {
      userId: session.user.id,
    },
  });
  return (
    <aside
      id="default-sidebar"
      className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full lg:translate-x-0 border-r"
      aria-label="Sidebar"
    >
      <div className="h-full px-3 py-4 overflow-y-auto">
        <div className="space-y-4 py-4">
          <StoreSwitcher items={stores} />
          <div className="space-y-1">
            <Routes />
          </div>
        </div>
      </div>
    </aside>
  );
};
