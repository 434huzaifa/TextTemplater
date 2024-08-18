import { NextResponse } from "next/server";
import { ZodError } from "zod";
import { fromZodError } from "zod-validation-error";

export function errorHandler(err:any) {
  console.log(err);
  if (err instanceof ZodError) {
    const formattedError = fromZodError(err);
    return NextResponse.json({ msg: formattedError.message }, { status: 400 });
  } else {
    return NextResponse.json(
      { msg: `Something went south! here: ${String(err.message)}` },
      { status: 500 }
    );
  }
}
