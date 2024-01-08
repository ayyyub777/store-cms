import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

import { options } from "../auth/[...nextauth]/options";
import prisma from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const session = await getServerSession(options);

    const body = await req.json();
    const { name } = body;

    if (!session?.user) {
      return NextResponse.json({ message: "Unauthenticated" }, { status: 403 });
    }

    if (!name) {
      return NextResponse.json(
        { message: "store name is required" },
        { status: 400 }
      );
    }

    const store = await prisma.store.create({
      data: {
        name,
        userId: session.user.id,
      },
    });

    return NextResponse.json(store, { status: 201 });
  } catch (error) {
    console.log("[STORES_POST]", error);
  }
}
