import { PrismaClient } from "@prisma/client";

// Singleton Pattern untuk menghindari koneksi berlebih
const globalForPrisma = global as unknown as { prisma: PrismaClient };

export const db =
  globalForPrisma.prisma ||
  new PrismaClient({
    log: ["query"], // Opsional: Untuk log query saat development
  });

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = db;

export default db;
