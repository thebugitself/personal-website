import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  // Set cookie `auth_token` dengan Max-Age 0 untuk menghapusnya
  res.setHeader(
    "Set-Cookie",
    "auth_token=; Path=/; Max-Age=0; HttpOnly; SameSite=Strict"
  );
  res.status(200).json({ message: "Logout successful" });
}
