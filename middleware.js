import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export default async function middleware(req) {
  const token = await getToken({ req, secret: process.env.JWT_SECRET });

  if (!token) {
    return NextResponse.redirect(`${process.env.NEXTAUTH_URL}/login`);
  }
}

export const config = {
  matcher: ["/", "/playlist", "/liked", "/search"],
};
