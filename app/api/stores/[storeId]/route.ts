import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

import { options } from "../../auth/[...nextauth]/options";
import prisma from "@/lib/prisma";

export async function PATCH(
  req: Request,
  { params }: { params: { storeId: string } }
) {
  try {
    const session = await getServerSession(options);
    const body = await req.json();

    const { name } = body;

    if (!session?.user) {
      return new NextResponse("Unauthenticated", { status: 403 });
    }

    if (!name) {
      return new NextResponse("Name is required", { status: 400 });
    }

    if (!params.storeId) {
      return new NextResponse("Store id is required", { status: 400 });
    }

    const store = await prisma.store.updateMany({
      where: {
        id: params.storeId,
        userId: session.user.id,
      },
      data: {
        name,
      },
    });

    return NextResponse.json(store);
  } catch (error) {
    console.log("[STORES_PATCH]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: { storeId: string } }
) {
  try {
    const session = await getServerSession(options);

    if (!session?.user) {
      return new NextResponse("Unauthenticated", { status: 403 });
    }

    if (!params.storeId) {
      return new NextResponse("Store id is required", { status: 400 });
    }

    const store = await prisma.store.deleteMany({
      where: {
        id: params.storeId,
        userId: session.user.id,
      },
    });

    return NextResponse.json(store);
  } catch (error) {
    console.log("[STORES_DELETE]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
