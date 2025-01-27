"use client";

import DashboardSidebar from "./(components)/DashboardSidebar";
import DashboardNavbar from "./(components)/DashboardNavbar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="grid min-h-screen w-full lg:grid-cols-[280px_1fr]">
      <DashboardSidebar />
      <DashboardNavbar>
        <main className="flex flex-col gap-4 p-4 lg:gap-6">{children}</main>
      </DashboardNavbar>
    </div>
  );
}
