import { format } from "date-fns";

import prisma from "@/lib/prisma";

import { BillboardColumn } from "./components/columns";
import { BillboardClient } from "./components/client";

const BillboardsPage = async ({ params }: { params: { storeId: string } }) => {
  const billboards = await prisma.billboard.findMany({
    where: {
      storeId: params.storeId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  const formattedBillboards: BillboardColumn[] = billboards.map((item) => ({
    id: item.id,
    label: item.label,
    createdAt: format(item.createdAt, "MMMM do, yyyy"),
  }));

  return <BillboardClient data={formattedBillboards} />;
};

export default BillboardsPage;
