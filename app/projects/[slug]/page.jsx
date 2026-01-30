"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ExternalLink, Github, ArrowLeft } from "lucide-react";
import { projects } from "@/lib/projects";
import { motion } from "framer-motion";
import { useState } from "react";

export default function ProjectDetailsPage({ params }) {
const { slug } = React.use(params);  
  const project = projects.find((p) => p.slug === slug);
  const [selectedImage, setSelectedImage] = useState(0);

  if (!project) notFound();

  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 md:py-24">
      {/* Back Button */}
      <Link
        href="/projects"
        className="inline-flex items-center gap-2 text-sm text-[rgb(var(--muted-foreground))] hover:text-[rgb(var(--foreground))] transition-colors mb-8"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to projects
      </Link>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="mb-10"
      >
        <h1 className="mb-3 text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
          {project.title}
        </h1>
        <p className="max-w-2xl text-lg text-[rgb(var(--muted-foreground))]">
          {project.excerpt}
        </p>
      </motion.div>

      {/* Actions */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="mb-12 flex flex-wrap gap-3"
      >
        {project.liveUrl && (
          <Link
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[rgb(var(--primary))] text-[rgb(var(--primary-foreground))] px-6 py-3 text-sm font-medium hover:opacity-90 transition-opacity"
          >
            Visit Live Site <ExternalLink className="h-4 w-4" />
          </Link>
        )}
        {project.githubUrl && (
          <Link
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-[rgb(var(--border))] px-6 py-3 text-sm font-medium hover:bg-[rgb(var(--muted))] transition-colors"
          >
            View Source Code <Github className="h-4 w-4" />
          </Link>
        )}
      </motion.div>

      {/* Hero Image */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
        className="relative mb-12 h-64 w-full overflow-hidden rounded-2xl border border-[rgb(var(--border))] shadow-xl sm:h-80 md:h-96"
      >
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
          priority
        />
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-12">
          {/* Overview */}
          <motion.section
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            <h2 className="mb-4 text-2xl font-semibold">Overview</h2>
            <div className="prose prose-gray max-w-none">
              <p className="leading-relaxed text-[rgb(var(--muted-foreground))] whitespace-pre-line">
                {project.fullDescription || project.description}
              </p>
            </div>
          </motion.section>

          {/* Key Features */}
          {project.features && project.features.length > 0 && (
            <motion.section
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.4 }}
            >
              <h2 className="mb-4 text-2xl font-semibold">Key Features</h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.features.map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-2 text-[rgb(var(--muted-foreground))]"
                  >
                    <span className="text-[rgb(var(--foreground))] mt-1">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.section>
          )}

          {/* Demo Video */}
          {project.demoVideo && (
            <motion.section
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.5 }}
            >
              <h2 className="mb-4 text-2xl font-semibold">Demo Video</h2>
              <div className="relative w-full overflow-hidden rounded-2xl border border-[rgb(var(--border))] shadow-lg" style={{ paddingBottom: "56.25%" }}>
                <iframe
                  src={project.demoVideo}
                  title={`${project.title} Demo`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute top-0 left-0 w-full h-full"
                />
              </div>
            </motion.section>
          )}

          {/* Gallery */}
          {project.gallery && project.gallery.length > 0 && (
            <motion.section
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.6 }}
            >
              <h2 className="mb-4 text-2xl font-semibold">Gallery</h2>
              
              {/* Main Image */}
              <div className="relative mb-4 h-80 w-full overflow-hidden rounded-2xl border border-[rgb(var(--border))] shadow-lg">
                <Image
                  src={project.gallery[selectedImage].url}
                  alt={project.gallery[selectedImage].caption}
                  fill
                  className="object-cover"
                />
              </div>
              
              {/* Caption */}
              <p className="mb-6 text-center text-sm text-[rgb(var(--muted-foreground))]">
                {project.gallery[selectedImage].caption}
              </p>

              {/* Thumbnails */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {project.gallery.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`relative h-24 w-full overflow-hidden rounded-lg border-2 transition-all ${
                      selectedImage === index
                        ? "border-[rgb(var(--primary))] scale-95"
                        : "border-[rgb(var(--border))] hover:border-[rgb(var(--muted-foreground))]"
                    }`}
                  >
                    <Image
                      src={image.url}
                      alt={image.caption}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            </motion.section>
          )}
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="sticky top-8 space-y-8"
          >
            {/* Tech Stack */}
            <section>
              <h2 className="mb-4 text-xl font-semibold">Tech Stack</h2>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-[rgb(var(--muted))] px-4 py-2 text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </section>

            {/* Project Links */}
            <section className="rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--card))] p-6">
              <h3 className="mb-4 text-lg font-semibold">Project Links</h3>
              <div className="space-y-3">
                {project.liveUrl && (
                  <Link
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-[rgb(var(--muted-foreground))] hover:text-[rgb(var(--foreground))] transition-colors"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Live Demo
                  </Link>
                )}
                {project.githubUrl && (
                  <Link
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-[rgb(var(--muted-foreground))] hover:text-[rgb(var(--foreground))] transition-colors"
                  >
                    <Github className="h-4 w-4" />
                    Source Code
                  </Link>
                )}
              </div>
            </section>
          </motion.div>
        </div>
      </div>
    </div>
  );
}