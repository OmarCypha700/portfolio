"use client";

import Link from "next/link";
import { Home, Github, Linkedin, Twitter, FileText } from "lucide-react";
import { motion } from "framer-motion";

export default function BottomNavbar() {
  const navItems = [
    { name: "Home", href: "/", icon: Home },
    { name: "GitHub", href: "https://github.com/yourusername", icon: Github },
    { name: "LinkedIn", href: "https://linkedin.com/in/yourusername", icon: Linkedin },
    { name: "Twitter", href: "https://twitter.com/yourusername", icon: Twitter },
    { name: "CV", href: "/cv", icon: FileText },
  ];

  return (
    <nav className="fixed bottom-4 left-1/2 z-50 -translate-x-1/2">
      <div className="flex items-center gap-2 rounded-full bg-white/90 px-3 py-2 shadow-lg backdrop-blur-md">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.name}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
            >
              <motion.div
                whileHover={{ scale: 1.15, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="flex h-11 w-11 items-center justify-center rounded-full text-gray-600 transition-colors hover:bg-gray-100 hover:text-black"
                title={item.name}
              >
                <Icon className="h-5 w-5" />
              </motion.div>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
