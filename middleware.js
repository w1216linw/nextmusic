import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export default async function middleware(req) {
  const { pathname } = req.nextUrl;
  const token = await getToken({ req, secret: process.env.JWT_SECRET });

  if (!token && pathname === "/") {
    return NextResponse.redirect("http://localhost:3000/login");
  }
}
