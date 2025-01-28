"use client";

import { Button } from "@/components/ui/button";
import { Dialog, DialogClose } from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import {
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { Banknote, Folder, HomeIcon, Settings } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";

export default function DashboardTopNav({ children }: { children: ReactNode }) {
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
                <Link href="/dashboard/blogs">
                  <Button variant="hehey">
                    <Folder className="mr-2 h-4 w-4" />
                    Manage Blogs
                  </Button>
                </Link>
              </DialogClose>
            </div>
          </SheetContent>
        </Dialog>
      </header>
      {/* Children Content */}
      <main className="flex-1">{children}</main>
    </div>
  );
}
