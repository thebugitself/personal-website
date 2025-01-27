"use client";

import { ListBulletIcon } from "@radix-ui/react-icons";
import clsx from "clsx";
import {
  Banknote,
  Folder,
  HomeIcon,
  List,
  Pencil,
  Settings,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function DashboardSideBar() {
  const pathname = usePathname();

  return (
    <div className="hidden lg:block w-64 border-r h-full bg-background border-accent">
      <div className="flex h-full flex-col">
        <div className="flex h-[3.45rem] items-center border-b px-4 border-accent">
          <Link
            prefetch={true}
            className="flex items-center gap-2 font-semibold hover:cursor-pointer "
            href="/"
          >
            <span>thebugitself</span>
          </Link>
        </div>

        <nav className="flex-1 space-y-1 p-4">
          <h3 className="text-white text-left">Dashboard</h3>
          <Link
            prefetch={true}
            href="/dashboard"
            className={clsx(
              "flex items-center gap-2 rounded-lg px-3 py-2 text-sm transition-colors",
              pathname === "/dashboard"
                ? "text-accent"
                : "bg-primary text-white  hover:text-accent"
            )}
          >
            <HomeIcon className="h-4 w-4" />
            Overview
          </Link>
          <h3 className="text-white text-left">Manage Blog</h3>
          <Link
            prefetch={true}
            href="/dashboard/blog-article/create"
            className={clsx(
              "flex items-center gap-2 rounded-lg px-3 py-2 text-sm transition-colors",
              pathname === "/dashboard/blog-article/create"
                ? "text-accent"
                : "bg-primary text-white  hover:text-accent"
            )}
          >
            <Pencil className="h-4 w-4" />
            Create Blog
          </Link>
          <Link
            prefetch={true}
            href="/dashboard/blog-article/list"
            className={clsx(
              "flex items-center gap-2 rounded-lg px-3 py-2 text-sm transition-colors",
              pathname === "/dashboard/blog-article/list"
                ? "text-accent"
                : "bg-primary text-white  hover:text-accent"
            )}
          >
            <List className="h-4 w-4" />
            List Blogs
          </Link>
        </nav>
      </div>
    </div>
  );
}
