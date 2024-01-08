import prisma from "@/lib/prisma";

import { BillboardForm } from "./components/billboard-form";

const BillboardPage = async ({
  params,
}: {
  params: { billboardId: string };
}) => {
  const billboard = await prisma.billboard.findUnique({
    where: {
      id: params.billboardId,
    },
  });

  return <BillboardForm initialData={billboard} />;
};

export default BillboardPage;
