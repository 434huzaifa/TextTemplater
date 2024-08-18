import { NextResponse } from "next/server"


export const config={
    matcher:"/api/:path*" // this should be url path not folder. why Next js why
}

export default function middleware(request:Request) {

    return NextResponse.next()
}