"use client";

import { Button } from "@/components/ui/button";
import { Dialog, DialogClose } from "@/components/ui/dialog";
import {
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { Banknote, Folder, HomeIcon, List, Pencil } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";

export default function DashboardTopNav({ children }: { children: ReactNode }) {
  const handleLogout = async () => {
    try {
      const response = await fetch("/api/auth/logout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Logout failed");
      }

      const data = await response.json();
      window.location.href = "/"; // Redirect to the homepage or login page
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return (
    <div className="flex flex-col">
      {/* Header */}
      <header className="flex h-14 lg:h-[55px] items-center justify-between border-b px-4 lg:px-6 border-accent">
        {/* Mobile Menu Trigger */}
        <Dialog>
          <SheetTrigger className="lg:hidden p-2 transition hover:bg-muted rounded-md">
            <HamburgerMenuIcon className="h-5 w-5" />
          </SheetTrigger>
          <SheetContent side="left">
            <SheetHeader>
              <Link href="/">
                <SheetTitle className="text-accent">thebugitself</SheetTitle>
              </Link>
            </SheetHeader>
            <div className="flex flex-col space-y-3 mt-16">
              <DialogClose asChild>
                <Link href="/dashboard">
                  <Button variant="hehey">
                    <HomeIcon className="mr-2 h-4 w-4" />
                    Home
                  </Button>
                </Link>
              </DialogClose>
              <DialogClose asChild>
                <Link href="/dashboard/blog-article/create">
                  <Button variant="hehey">
                    <Pencil className="mr-2 h-4 w-4" />
                    Create Blog
                  </Button>
                </Link>
              </DialogClose>
              <DialogClose asChild>
                <Link href="/dashboard/blog-article/list">
                  <Button variant="hehey">
                    <List className="mr-2 h-4 w-4" />
                    List Blogs
                  </Button>
                </Link>
              </DialogClose>
            </div>
          </SheetContent>
        </Dialog>

        {/* Logout Button */}
        <div className="flex items-center">
          <Button
            variant="ghost"
            onClick={handleLogout}
            className="ml-auto hover:bg-muted"
          >
            Logout
          </Button>
        </div>
      </header>
      {/* Children Content */}
      <main className="flex-1">{children}</main>
    </div>
  );
}
