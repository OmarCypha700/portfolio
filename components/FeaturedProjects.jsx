"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ExternalLink, Github, ScrollText } from "lucide-react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function FeaturedProjects({ limit }) {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    async function fetchProjects() {
      try {
        const res = await fetch("/api/projects");
        const data = await res.json();
        setProjects(data);
      } catch (error) {
        console.error("Failed to load projects", error);
      } finally {
        setLoading(false);
      }
    }

    fetchProjects();
  }, []);

  if (loading) {
    return (
      <section className="mx-auto max-w-6xl px-4 py-16 text-center text-[rgb(var(--muted-foreground))]">
        Loading projects...
      </section>
    );
  }

  const visibleProjects = limit ? projects.slice(0, limit) : projects;

  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="mb-12 text-center"
      >
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
          {limit ? "Featured Projects" : "All Projects"}
        </h2>
        <p className="mt-2 text-sm text-[rgb(var(--muted-foreground))] sm:text-base">
          Selected work showcasing real world applications
        </p>
      </motion.div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
        {visibleProjects.map((project, index) => (
          <motion.div
            key={project.slug}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            className="flex flex-col overflow-hidden rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--card))] backdrop-blur-md hover:shadow-lg transition-shadow"
          >
            {/* Image */}
            <Link href={`/projects/${project.slug}`} className="block">
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform hover:scale-105"
                />
              </div>
            </Link>

            {/* Content */}
            <div className="flex flex-col flex-grow p-5">
              {/* Title */}
              <Link href={`/projects/${project.slug}`}>
                <h3 className="mb-2 text-lg font-medium hover:text-[rgb(var(--muted-foreground))] transition-colors">
                  {project.title}
                </h3>
              </Link>
              
              {/* Excerpt */}
              <p className="mb-4 text-sm text-[rgb(var(--muted-foreground))] line-clamp-2">
                {project.excerpt}
              </p>

              {/* Spacer to push buttons to bottom */}
              <div className="flex-grow"></div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-2 mb-3">
                {project.liveUrl && (
                  <Link
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 rounded-full bg-[rgb(var(--primary))] text-[rgb(var(--primary-foreground))] px-4 py-2 text-sm hover:opacity-90 transition-opacity"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Live <ExternalLink className="h-4 w-4" />
                  </Link>
                )}
                {project.githubUrl && (
                  <Link
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 rounded-full border border-[rgb(var(--border))] px-4 py-2 text-sm hover:bg-[rgb(var(--muted))] transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Code <Github className="h-4 w-4" />
                  </Link>
                )}
                <Link
                    href={`/projects/${project.slug}`}
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 rounded-full border border-[rgb(var(--border))] px-4 py-2 text-sm hover:bg-[rgb(var(--muted))] transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Project Details <ScrollText className="h-4 w-4" />
                  </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {limit && projects.length > limit && (
        <div className="mt-12 text-center">
          <button
            onClick={() => router.push("/projects")}
            className="rounded-full border border-[rgb(var(--border))] px-6 py-2 text-sm hover:bg-[rgb(var(--muted))] transition-colors"
          >
            View all projects
          </button>
        </div>
      )}
    </section>
  );
}