import { NextResponse } from "next/server";
import { errorHandler } from "../(util)";
import { InsertRow } from "../(zod)/schema";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    InsertRow.parse(body);
    return NextResponse.json({body},{status:200})
  } catch (error) {
    errorHandler(error);
  }
}
