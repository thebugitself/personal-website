import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { jwtVerify } from "jose"; // Menggunakan jose untuk validasi JWT

export async function middleware(req: NextRequest) {
  const token = req.cookies.get("auth_token")?.value;

  // Debugging: Log token dari cookie
  console.log("Middleware token:", token);

  if (!token) {
    console.error("No token provided");
    return NextResponse.redirect(new URL("/login", req.url));
  }

  try {
    // Gunakan kunci rahasia yang sama dengan saat membuat token
    const secret = new TextEncoder().encode(process.env.JWT_SECRET);

    // Verifikasi token menggunakan jose
    const { payload } = await jwtVerify(token, secret);

    // Debugging decoded token
    console.log("Decoded JWT:", payload);

    // Jika token valid, lanjutkan request
    return NextResponse.next();
  } catch (error) {
    console.error("Invalid token:", error);
    return NextResponse.redirect(new URL("/login", req.url));
  }
}

export const config = {
  matcher: ["/admin/:path*"], // Middleware hanya untuk halaman admin
};
