"use client";

import Link from "next/link";
import { Home, Github, Linkedin, Twitter, FileText, Sun, Moon } from "lucide-react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { useTheme } from "@/components/ThemeProvider";

export default function BottomNavbar() {
  const pathname = usePathname();
  const { theme, toggleTheme, mounted } = useTheme();

  if (!mounted) return null;

  const navItems = [
    { name: "Home", href: "/", icon: Home },
    { name: "GitHub", href: "https://github.com/yourusername", icon: Github },
    {
      name: "LinkedIn",
      href: "https://linkedin.com/in/yourusername",
      icon: Linkedin,
    },
    {
      name: "Twitter",
      href: "https://twitter.com/yourusername",
      icon: Twitter,
    },
    { name: "CV", href: "/cv", icon: FileText },
  ];

  return (
    <nav className="fixed bottom-4 left-1/2 z-50 -translate-x-1/2">
      <div className="flex items-center gap-1 rounded-full bg-[rgb(var(--card))]/80 px-3 py-2 shadow-xl backdrop-blur-md border border-[rgb(var(--border))]">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;
          
          return (
            <Link
              key={item.name}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel={
                item.href.startsWith("http") ? "noopener noreferrer" : undefined
              }
            >
              <motion.div
                whileHover={{ scale: 1.15, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={`flex h-11 w-11 items-center justify-center rounded-full transition-colors ${
                  isActive
                    ? "bg-[rgb(var(--primary))] text-[rgb(var(--primary-foreground))]"
                    : "text-[rgb(var(--muted-foreground))] hover:bg-[rgb(var(--muted))] hover:text-[rgb(var(--foreground))]"
                }`}
                title={item.name}
              >
                <Icon className="h-5 w-5" />
              </motion.div>
            </Link>
          );
        })}

        {/* Theme Toggle */}
        <div className="ml-1 h-8 w-px bg-[rgb(var(--border))]" />
        <motion.button
          onClick={toggleTheme}
          whileHover={{ scale: 1.15, y: -2 }}
          whileTap={{ scale: 0.95 }}
          className="flex h-11 w-11 items-center justify-center rounded-full text-[rgb(var(--muted-foreground))] transition-colors hover:bg-[rgb(var(--muted))] hover:text-[rgb(var(--foreground))]"
          title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          aria-label="Toggle theme"
        >
          {theme === "dark" ? (
            <Sun className="h-5 w-5" />
          ) : (
            <Moon className="h-5 w-5" />
          )}
        </motion.button>
      </div>
    </nav>
  );
}