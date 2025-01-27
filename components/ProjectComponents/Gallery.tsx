"use client";

import React, { useState, useEffect } from "react";
import styles from "./page.module.scss";
import { projects } from "@/lib/dataGallery";
import Double from "@/components/ProjectComponents/double";
import { motion, AnimatePresence } from "framer-motion";

const Gallery: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsVisible(true), 1000); // Delay 1 detik
    return () => clearTimeout(timeout);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className={styles.main}
        >
          {/* <h1>Project Gallery</h1> */}
          <div className={styles.gallery}>
            <Double projects={[projects[0], projects[1]]} />
            {/* Uncomment untuk menampilkan lebih banyak proyek */}
            <Double projects={[projects[2], projects[3]]} reversed={true} />
            {/* <Double projects={[projects[4], projects[5]]} />
            <Double projects={[projects[6], projects[7]]} reversed={true} /> */}
          </div>
        </motion.main>
      )}
    </AnimatePresence>
  );
};

export default Gallery;
