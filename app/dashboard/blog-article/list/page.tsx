"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { DataTable } from "./data-table-components/data-table";
import { columns } from "./data-table-components/columns";

export default function BlogListPage() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch("/api/blog", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch blogs");
        }

        const result = await response.json();
        setData(result); // Fill state with API data
      } catch (err) {
        setError(err instanceof Error ? err.message : "Unknown error occurred");
      } finally {
        setIsLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div className="h-full flex-1 flex-col space-y-2 mx-2 md:flex">
      <h1>List Data Blog</h1>
      <div className="flex items-center justify-between">
        <p className="text-muted-foreground">
          Cari lah sendiri apa yang mo di delete/edit yeah
        </p>
      </div>

      <div className="relative">
        <AnimatePresence>
          {!isLoading && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { delay: 1, duration: 0.5, ease: "easeOut" },
              }}
              exit={{
                opacity: 0,
                y: 20,
                transition: { duration: 0.3, ease: "easeIn" },
              }}
            >
              <DataTable
                data={data}
                columns={columns}
                isLoading={isLoading}
                error={error}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
