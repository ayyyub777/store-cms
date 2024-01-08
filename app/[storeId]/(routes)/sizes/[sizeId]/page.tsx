import prisma from "@/lib/prisma";

import { SizeForm } from "./components/size-form";

const SizePage = async ({ params }: { params: { sizeId: string } }) => {
  const size = await prisma.size.findUnique({
    where: {
      id: params.sizeId,
    },
  });

  return <SizeForm initialData={size} />;
};

export default SizePage;
