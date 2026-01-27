"use client"

import { motion } from "framer-motion"

export default function GetInTouch() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className="py-5 text-center"
    >
      <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl mb-4">Get in touch</h2>

      <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
        Have a project, opportunity, or just want to say hello? I’m always open
        to meaningful conversations.
      </p>

      <a
        href="mailto:youremail@example.com"
        className="inline-block text-sm font-medium underline underline-offset-4 hover:opacity-80 transition"
      >
        adjeikumicaleb@gmail.com
      </a>
    </motion.section>
  )
}
