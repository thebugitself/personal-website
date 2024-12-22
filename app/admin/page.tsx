"use client";

import { useState } from "react";
import ManageBlog from "@/components/Admin/ManageBlog";

const AdminPanel = () => {
  const [activeMenu, setActiveMenu] = useState("edit-blog");

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-64 text-white p-4">
        <h1 className="text-2xl font-bold mb-6">Admin Panel</h1>
        <ul className="space-y-4">
          <li>
            <button
              onClick={() => setActiveMenu("edit-blog")}
              className={`w-full text-left px-4 py-2 rounded-2xl ${
                activeMenu === "edit-blog" ? "bg-accent text-primary" : ""
              }`}
            >
              Edit Blogs
            </button>
          </li>
          <li>
            <button
              onClick={() => setActiveMenu("edit-project")}
              className={`w-full text-left px-4 py-2 rounded-2xl ${
                activeMenu === "edit-project" ? "bg-accent text-primary" : ""
              }`}
            >
              Edit Projects
            </button>
          </li>
          <li>
            <button
              onClick={async () => {
                await fetch("/api/auth/logout", { method: "POST" });
                window.location.href = "/login";
              }}
              className="w-full text-left px-4 py-2 rounded-2xl hover:bg-red-700"
            >
              Logout
            </button>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        {activeMenu === "edit-blog" && <ManageBlog />}
        {activeMenu === "edit-project" && (
          <div>
            <h2 className="text-2xl font-bold">Manage Projects</h2>
            <p className="text-gray-600">Coming soon...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminPanel;
