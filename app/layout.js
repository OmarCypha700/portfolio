// import BottomNavbar from "@/components/BottomNavbar";
// import { ThemeProvider } from "@/components/ThemeProvider";
// import "./globals.css";

// export const metadata = {
//   title: "Cypha - Software Developer Portfolio",
//   description: "Portfolio showcasing web development projects and skills",
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en" suppressHydrationWarning>
//       <body className="bg-white dark:bg-black text-black dark:text-white transition-colors duration-300">
//         <ThemeProvider>
//           <main className="min-h-screen pb-24">{children}</main>
//           <BottomNavbar />
//         </ThemeProvider>
//       </body>
//     </html>
//   );
// }

import BottomNavbar from "@/components/BottomNavbar";
import { ThemeProvider } from "@/components/ThemeProvider";
import themeScript from "@/lib/theme-script";
import "./globals.css";

export const metadata = {
  title: "Cypha - Software Developer Portfolio",
  description: "Portfolio showcasing web development projects and skills",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="antialiased">
        <ThemeProvider>
          <main className="min-h-screen pb-24">{children}</main>
          <BottomNavbar />
        </ThemeProvider>
      </body>
    </html>
  );
}
