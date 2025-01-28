"use client"

import clsx from 'clsx'
import {
  Banknote,
  Folder,
  HomeIcon,
  Settings
} from "lucide-react"
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function DashboardSideBar() {
  const pathname = usePathname();

  return (
    <div className="hidden lg:block w-64 border-r h-full bg-background border-accent">
      <div className="flex h-full flex-col">
        <div className="flex h-[3.45rem] items-center border-b px-4 border-accent">
          <Link prefetch={true} className="flex items-center gap-2 font-semibold hover:cursor-pointer " href="/">
            <span>thebugitself</span>
          </Link>
        </div>

        <nav className="flex-1 space-y-1 p-4">
          <Link prefetch={true}
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

          <Link prefetch={true}
            href="/dashboard/blogs"
            className={clsx(
              "flex items-center gap-2 rounded-lg px-3 py-2 text-sm transition-colors",
              pathname === "/dashboard/blogs"
                ? "text-accent"
                : "bg-primary text-white  hover:text-accent"
            )}
          >
            <Folder className="h-4 w-4" />
            Manage Blogs
          </Link>
        </nav>
      </div>
    </div>
  )
}