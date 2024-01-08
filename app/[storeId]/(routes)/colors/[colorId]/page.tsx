import prisma from "@/lib/prisma";

import { ColorForm } from "./components/color-form";

const ColorPage = async ({ params }: { params: { colorId: string } }) => {
  const color = await prisma.color.findUnique({
    where: {
      id: params.colorId,
    },
  });

  return <ColorForm initialData={color} />;
};

export default ColorPage;
