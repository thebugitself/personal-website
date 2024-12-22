import { NextResponse } from "next/server";

export async function POST() {
  const response = NextResponse.json({ message: "Logout successful" });

  // Clear the `auth_token` cookie
  response.cookies.set("auth_token", "", {
    path: "/",
    expires: new Date(0), // Expire immediately
  });

  return response;
}
