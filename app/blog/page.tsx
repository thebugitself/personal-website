"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

type Blog = {
  id: string;
  title: string;
  slug: string;
  description: string;
  date: string;
};

function truncate(text: string, wordLimit: number) {
  const words = text.split(" ");
  if (words.length > wordLimit) {
    return words.slice(0, wordLimit).join(" ") + "...";
  }
  return text;
}

export default function BlogList() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch("/api/blog");
        if (!response.ok) {
          throw new Error("Failed to fetch blogs");
        }
        const data: Blog[] = await response.json();

        if (!data || data.length === 0) {
          throw new Error("No blogs available.");
        }

        setBlogs(data);
      } catch (err) {
        setError((err as Error).message || "Unknown error");
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) {
    return (
      <main className="h-full flex items-center justify-center">
        <p className="text-accent text-lg font-medium animate-pulse">
          Loading blogs...
        </p>
      </main>
    );
  }

  if (error) {
    return (
      <main className="h-full flex items-center justify-center">
        <p className="text-red-500 text-lg font-medium">{`Error: ${error}`}</p>
      </main>
    );
  }

  return (
    <main className="h-full">
      <div className="container mx-auto h-full px-6 sm:px-10 md:px-14 pt-8">
        {/* Deskripsi Halaman */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-accent mb-6 hover:scale-105 transition duration-300">
            Welcome to my personal blog!
          </h1>
          <p className="text-white/80 text-lg md:text-xl">
            I&apos;m excited to share my thoughts about the world! Click on a
            blog to read more!
          </p>
        </div>

        {/* Daftar Blog */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog) => (
            <motion.div
              key={blog.id}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
            >
              <Link href={`/blog/${blog.slug}`}>
                <div className="p-6 border border-white/10 rounded-xl bg-black/40 backdrop-blur-md hover:bg-black/60 hover:shadow-xl transition duration-300 ease-in-out cursor-pointer shadow-md group min-h-[200px] flex flex-col justify-between">
                  <div>
                    <h2 className="text-2xl font-bold text-accent mb-2 group-hover:underline">
                      {blog.title}
                    </h2>
                    <p className="text-white/80 mb-4 text-sm md:text-base">
                      {truncate(blog.description, 25)}
                    </p>
                  </div>
                  <span className="text-white/60 text-xs md:text-sm">
                    {new Date(blog.date).toLocaleDateString()}
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
