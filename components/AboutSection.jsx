"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 md:py-24">
      <div className="flex flex-col items-center gap-6 text-center sm:gap-8 md:flex-row md:items-center md:gap-12 md:text-left">
        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="relative h-28 w-28 shrink-0 overflow-hidden rounded-full border border-[rgb(var(--border))] shadow-lg sm:h-36 sm:w-36 md:h-44 md:w-44"
        >
          <Image
            src="/profile.webp"
            alt="profile photo"
            fill
            sizes="(max-width: 640px) 112px, (max-width: 768px) 144px, 176px"
            className="object-cover"
            priority
          />
        </motion.div>

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="flex flex-col items-center md:items-start"
        >
          <h1 className="mb-3 text-2xl font-semibold tracking-tight sm:text-3xl md:text-4xl">
            Hi, I&apos;m Caleb
          </h1>

          <h1 className="mb-3 tracking-tight">
           aka Cypha
          </h1>

          <div className="mt-4">
            <h2 className="mb-2 text-lg font-medium sm:text-xl">
              About
            </h2>
            <p className="max-w-xl text-sm leading-relaxed text-[rgb(var(--muted-foreground))] sm:text-base">
              I&apos;m a full stack web developer with a strong interest in building
              clean, scalable web applications and data driven systems. I enjoy
              working across the stack, learning continuously, and turning ideas
              into practical, well crafted digital experiences.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
