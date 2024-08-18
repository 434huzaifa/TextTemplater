import { NextResponse } from "next/server";

export async function PATCH(request:Request,context:{params:any}) {
    const uuid=context.params.uuid
    const body=await request.json()
    const {searchParams}=new URL(request.url)
    const id=searchParams.get('id')
    return new NextResponse(JSON.stringify({body:body,params:id,uuid:uuid}),{status:200})
}