import { NextResponse } from "next/server";
import { errorHandler } from "../(util)";
import { InsertRow } from "../(zod)/schema";
import { db } from "@/db/database";
import { texts } from "@/db/schema";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    InsertRow.parse(body);
    await db.insert(texts).values(body);
    return NextResponse.json({ msg: "Success" }, { status: 200 });
  } catch (error) {
    return errorHandler(error);
  }
}

export async function GET(request: Request) {
  try {
    const result = await db.select({
      id:texts.uuid,
      title:texts.title,
    }).from(texts);
    return NextResponse.json( result, { status: 200 });
  } catch (error) {
    return errorHandler(error);
  }
}
