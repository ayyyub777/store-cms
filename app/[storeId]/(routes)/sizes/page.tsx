import { format } from "date-fns";

import prisma from "@/lib/prisma";

import { SizeColumn } from "./components/columns";
import { SizesClient } from "./components/client";

const SizesPage = async ({ params }: { params: { storeId: string } }) => {
  const sizes = await prisma.size.findMany({
    where: {
      storeId: params.storeId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  const formattedSizes: SizeColumn[] = sizes.map((item) => ({
    id: item.id,
    name: item.name,
    value: item.value,
    createdAt: format(item.createdAt, "MMMM do, yyyy"),
  }));

  return <SizesClient data={formattedSizes} />;
};

export default SizesPage;
