import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/layout/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Piyush Singh - Full Stack Developer",
  description: "Full Stack Developer specializing in Node.js, React, and modern web technologies",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="min-h-screen">
            <section id="hero" /* ...props... */ >
              {/* ... hero content ... */}
            </section>

            <section id="about" className="py-16 text-center max-w-3xl mx-auto">
              {/* ... about content ... */}
            </section>

            <section id="skills" className="py-16">
              {/* ... skills content (bento grid) ... */}
            </section>

            <section id="projects" className="py-16">
              {/* ... projects content ... */}
            </section>

            <section id="contact" className="py-16">
              {/* ... contact content ... */}
            </section>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
