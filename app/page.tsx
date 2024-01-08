import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

import { options } from "./api/auth/[...nextauth]/options";
import prisma from "@/lib/prisma";

const Root = async () => {
  const session = await getServerSession(options);

  if (!session?.user) {
    redirect("/auth/signin");
  }

  const store = await prisma.store.findFirst({
    where: {
      userId: session.user.id,
    },
  });

  if (store) {
    redirect(`/${store.id}`);
  }

  redirect("/auth/setup");
};

export default Root;
