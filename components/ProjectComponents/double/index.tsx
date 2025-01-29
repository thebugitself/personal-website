'use client';

import React, { useRef } from 'react';
import Image, { StaticImageData } from 'next/image';
import styles from './style.module.scss';

interface Project {
  name: string;
  client: string;
  description: string;
  src: string | StaticImageData;
  year: number;
  link: string;
}

interface IndexProps {
  projects: [Project, Project];
  reversed?: boolean;
}

const Index: React.FC<IndexProps> = ({ projects, reversed = false }) => {
  const firstImage = useRef<HTMLDivElement>(null);
  const secondImage = useRef<HTMLDivElement>(null);
  let requestAnimationFrameId: number | null = null;
  let xPercent = reversed ? 100 : 0;
  let currentXPercent = reversed ? 100 : 0;
  const speed = 0.15;

  const manageMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX } = e;
    xPercent = (clientX / window.innerWidth) * 100;

    if (!requestAnimationFrameId) {
      requestAnimationFrameId = window.requestAnimationFrame(animate);
    }
  };

  const animate = () => {
    const xPercentDelta = xPercent - currentXPercent;
    currentXPercent = currentXPercent + xPercentDelta * speed;

    const firstImagePercent = 66.66 - currentXPercent * 0.33;
    const secondImagePercent = 33.33 + currentXPercent * 0.33;

    if (firstImage.current) {
      firstImage.current.style.width = `${firstImagePercent}%`;
    }
    if (secondImage.current) {
      secondImage.current.style.width = `${secondImagePercent}%`;
    }

    if (Math.round(xPercent) === Math.round(currentXPercent)) {
      if (requestAnimationFrameId) {
        window.cancelAnimationFrame(requestAnimationFrameId);
        requestAnimationFrameId = null;
      }
    } else {
      window.requestAnimationFrame(animate);
    }
  };

  return (
    <div onMouseMove={manageMouseMove} className={styles.double}>
      <div  ref={firstImage} className={styles.imageContainer}>
        <div className={styles.stretchyWrapper}>
          <a href={projects[0].link} target="_blank" rel="noreferrer">
            <Image
              src={projects[0].src}
              fill={true}
              alt={projects[0].name}
              priority={true}
              sizes="1980px"
            />
          </a>
        </div>
        <div className={styles.body}>
          <h3>{projects[0].name}</h3>
          <p>{projects[0].description}</p>
          <p>{projects[0].year}</p>
        </div>
      </div>

      <div ref={secondImage} className={styles.imageContainer}>
        <div className={styles.stretchyWrapper}>
          <a href={projects[1].link} target="_blank" rel="noreferrer">
            <Image
              src={projects[1].src}
              fill={true}
              alt={projects[1].name}
              sizes="1980px"
            />
          </a>
        </div>
        <div className={styles.body}>
          <h3>{projects[1].name}</h3>
          <p>{projects[1].description}</p>
          <p>{projects[1].year}</p>
        </div>
      </div>
    </div>
  );
};

export default Index;
