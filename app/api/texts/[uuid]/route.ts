import { db } from "@/db/database";
import { texts } from "@/db/schema";
import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";

export async function PATCH(request: Request, context: { params: any }) {
  const uuid = context.params.uuid;
  const body = await request.json();
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  return new NextResponse(
    JSON.stringify({ body: body, params: id, uuid: uuid }),
    { status: 200 }
  );
}

export async function GET(request: Request, context: { params: any }) {
  const uuid = context.params.uuid;
  const res = (await db.select().from(texts).where(eq(texts.uuid, uuid))).at(0);
  return new NextResponse(JSON.stringify(res), { status: 200 });
}
