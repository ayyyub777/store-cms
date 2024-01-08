import { format } from "date-fns";

import prisma from "@/lib/prisma";

import { ColorColumn } from "./components/columns";
import { ColorClient } from "./components/client";

const ColorsPage = async ({ params }: { params: { storeId: string } }) => {
  const colors = await prisma.color.findMany({
    where: {
      storeId: params.storeId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  const formattedColors: ColorColumn[] = colors.map((item) => ({
    id: item.id,
    name: item.name,
    value: item.value,
    createdAt: format(item.createdAt, "MMMM do, yyyy"),
  }));

  return <ColorClient data={formattedColors} />;
};

export default ColorsPage;
