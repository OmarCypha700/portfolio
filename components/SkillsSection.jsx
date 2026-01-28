"use client";

import { motion } from "framer-motion";
import {
  Code,
  Database,
  Globe,
  Server,
  Cpu,
} from "lucide-react";

export default function SkillsSection() {
  const skills = [
    { name: "Frontend", icon: Globe, items: ["Next.js", "Tailwind CSS"] },
    { name: "Backend", icon: Server, items: ["Django", "REST APIs", "JWT Auth"] },
    { name: "Databases", icon: Database, items: ["PostgreSQL", "SQLite", "MySQL"] },
    { name: "Languages", icon: Code, items: ["Python", "JavaScript", "SQL"] },
    { name: "Tools & Platforms", icon: Cpu, items: ["Git", "GitHub", "Vercel", "PythonAnywhere"] },
  ];

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
          Tech Stack
        </h2>
        <p className="mt-2 text-sm text-[rgb(var(--muted-foreground))] sm:text-base">
          Tools and technologies I enjoy working with
        </p>
      </motion.div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((skill, index) => {
          const Icon = skill.icon;
          return (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--card))] p-5 backdrop-blur-md"
            >
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[rgb(var(--muted))]">
                  <Icon className="h-5 w-5 text-[rgb(var(--foreground))]" />
                </div>
                <h3 className="text-base font-medium">{skill.name}</h3>
              </div>

              <ul className="space-y-1 text-sm text-[rgb(var(--muted-foreground))]">
                {skill.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}