"use client";

import { AnimatePresence, motion } from "framer-motion";
import BlogForm from "../_components/blog-form";

export default function BlogCreatePage() {
  return (
    <div>
      <AnimatePresence>
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
          <BlogForm initialData={null} pageTitle="Tambah Blog Artikel" />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
