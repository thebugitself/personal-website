"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

function truncate(text: string, wordLimit: number) {
  const words = text.split(" ");
  if (words.length > wordLimit) {
    return words.slice(0, wordLimit).join(" ") + "...";
  }
  return text;
}

export default function BlogList() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null); // Define type as string | null

  // Fetch data dari API
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch("/api/blog");
        if (!response.ok) {
          throw new Error("Failed to fetch blogs");
        }
        const data = await response.json();
        setBlogs(data);
      } catch (err) {
        setError((err as Error).message || "Unknown error");
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  // Handling loading state
  if (loading) {
    return (
      <main className="h-full flex items-center justify-center">
        <p className="text-white text-lg">Loading blogs...</p>
      </main>
    );
  }

  // Handling error state
  if (error) {
    return (
      <main className="h-full flex items-center justify-center">
        <p className="text-red-500 text-lg">Error: {error}</p>
      </main>
    );
  }

  // Rendering blog list
  return (
    <main className="h-full">
      <div className="container mx-auto h-full px-14 pt-8">
        <div className="flex flex-col gap-8">
          {blogs.map((blog: any) => (
            <Link href={`/blog/${blog.slug}`} key={blog.id}>
              <div className="p-6 border border-white/10 rounded-xl bg-black/30 hover:bg-black/50 transition duration-300 cursor-pointer">
                <h2 className="text-2xl font-semibold text-accent mb-2">
                  {blog.title}
                </h2>
                <p className="text-white/80 mb-4">
                  {truncate(blog.description, 20)}
                </p>
                <span className="text-white/60 text-sm">
                  {new Date(blog.date).toLocaleDateString()}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
