'use client';

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
  const [isVisible, setIsVisible] = useState(false);

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

  useEffect(() => {
    const timeout = setTimeout(() => setIsVisible(true), 1000); // Delay 1 detik sebelum konten muncul
    return () => clearTimeout(timeout);
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
      <AnimatePresence>
        {isVisible && (
          <motion.div
            className="container mx-auto h-full px-6 sm:px-10 md:px-14 pt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ delay: 0.5, duration: 0.5, ease: "easeInOut" }}
          >
            {/* Daftar Blog */}
            <ul className="space-y-6">
              {blogs.map((blog) => (
                <motion.li
                  key={blog.id}
                  whileHover={{ scale: 0.99 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                  className="list-none"
                >
                  <Link href={`/blog/${blog.slug}`}>
                    <div className="p-6 rounded-xl bg-transparent backdrop-blur-md transition duration-300 ease-in-out cursor-pointer shadow-md group flex flex-col">
                      <h2 className="text-2xl font-bold text-accent mb-2 group-hover:underline">
                        {blog.title}
                      </h2>
                      <p className="text-white/80 mb-2 text-sm md:text-base">
                        {truncate(blog.description, 25)}
                      </p>
                      <span className="text-white/60 text-xs md:text-sm">
                        {new Date(blog.date).toLocaleDateString()}
                      </span>
                    </div>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
