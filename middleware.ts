import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import jwt from "jsonwebtoken";

export async function middleware(req: NextRequest) {
  const token = req.cookies.get("auth_token")?.value;

  // Debugging: Log token dari cookie
  console.log("Middleware token:", token);

  if (!token) {
    console.error("No token provided");
    return NextResponse.redirect(new URL("/login", req.url));
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!);
    console.log("Decoded JWT:", decoded); // Debugging decoded token
    return NextResponse.next();
  } catch (error) {
    console.error("Invalid token:", error);
    return NextResponse.redirect(new URL("/login", req.url));
  }
}

export const config = {
  matcher: ["/admin/:path*"], // Middleware hanya untuk halaman admin
};
