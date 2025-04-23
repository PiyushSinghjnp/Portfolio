"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { FadeIn, SlideIn, ScaleIn } from "@/components/motion"
import { Mail, ExternalLink, X } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog"
import { motion } from "framer-motion"
// No need for useState and useEffect anymore

const projects = [
  {
    title: "WalletMate",
    shortDesc: "Payment Wallet Application",
    longDesc: `A feature-rich payment wallet application enabling seamless money transfers and wallet management.

Key Features:
• Developed a feature-rich payment wallet application enabling seamless money transfers and wallet management, processing over 1000+ transactions per month.

• User App: Implemented transaction and transfer pages using PostgreSQL and Prisma ORM, reducing transaction processing time by 25% and ensuring data atomicity.

• Bank Webhook Server: Built an independent Express.js server to handle bank webhook requests and update wallet balances in real time, improving response efficiency by 20%.

• Enhanced deployment efficiency by 30% through Docker containerization and a Monorepo structure, simplifying multi-app management.

• Implemented secure user authentication and authorization using JWT tokens
• Real-time transaction updates and notifications
• Comprehensive transaction history and analytics dashboard`,
    tech: ["Next.js", "TypeScript", "Express.js", "PostgreSQL", "Prisma", "Docker", "JWT"],
    gitLink: "https://github.com/PiyushSinghjnp/wallet-mate"
  },
  {
    title: "Chat App",
    shortDesc: "Real-time Chat Application",
    longDesc: `A real-time chat application supporting over 1,000 concurrent users with minimal latency.
    Key features include:
    • Real-time messaging with Socket.io
    • User authentication and authorization
    • Message history and persistence
    • Typing indicators and online status
    • File sharing capabilities`,
    tech: ["React.js", "Node.js", "Express", "Socket.io", "MongoDB"],
    gitLink: "https://github.com/PiyushSinghjnp/chat-app"
  }
];

export default function Home() {
  // Remove the loading state and directly render content
  return (
    <div className="container py-8 space-y-16">
        <>
          {/* Hero Section */}
          <section className="relative flex items-center justify-between min-h-[60vh] overflow-hidden px-4 md:px-8 lg:px-16">
            <div className="absolute inset-0 -z-10">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-primary/5" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,0,0.05),transparent)] dark:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.05),transparent)]" />
              <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
            </div>

            {/* Left Content */}
            <div className="max-w-2xl space-y-6 ml-4 md:ml-8 lg:ml-16">
              <FadeIn>
                <div className="relative">
                  <h1 className="text-4xl font-bold tracking-tight lg:text-6xl bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent leading-tight py-1">
                    Piyush Singh
                  </h1>
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 blur-xl -z-10" />
                </div>
              </FadeIn>
              <SlideIn>
                <p className="text-lg text-muted-foreground leading-normal">
                  Full-Stack Developer specializing in Node.js, React, and modern web technologies
                </p>
              </SlideIn>
              <ScaleIn>
                <div className="flex gap-4">
                  <Button asChild className="group">
                    <a href="#projects" className="flex items-center gap-2">
                      View Projects
                      <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </a>
                  </Button>
                  <Button variant="outline" asChild className="group">
                    <a
                      href="#contact"
                      className="flex items-center gap-2"
                    >
                      Contact Me
                      <Mail className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </a>
                  </Button>
                </div>
              </ScaleIn>
            </div>

            {/* Right Animated Element */}
            <div className="relative w-[500px] h-[400px] hidden lg:block">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl blur-3xl" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-full max-w-[400px] bg-background/50 backdrop-blur-sm border border-primary/20 rounded-lg shadow-2xl">
                  {/* Editor Header */}
                  <div className="flex items-center gap-2 px-4 py-2 border-b border-primary/20">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-500" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500" />
                      <div className="w-3 h-3 rounded-full bg-green-500" />
                    </div>
                    <div className="text-xs text-muted-foreground ml-2">portfolio.tsx</div>
                  </div>

                  {/* Editor Content */}
                  <div className="p-4 space-y-2 font-mono text-sm animate-typing overflow-hidden">
                    <div className="flex items-center gap-2 text-primary">
                      <span className="text-primary/50">1</span>
                      <span>const</span>
                      <span className="text-blue-500">developer</span>
                      <span>=</span>
                      <span className="text-green-500">&apos;Piyush Singh&apos;</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-primary/50">2</span>
                      <span className="text-primary">const</span>
                      <span className="text-blue-500">skills</span>
                      <span className="text-primary">=</span>
                      <span className="text-yellow-500">[</span>
                    </div>
                    <div className="flex items-center gap-2 pl-8">
                      <span className="text-green-500">&apos;React&apos;</span>
                      <span className="text-yellow-500">,</span>
                    </div>
                    <div className="flex items-center gap-2 pl-8">
                      <span className="text-green-500">&apos;Node.js&apos;</span>
                      <span className="text-yellow-500">,</span>
                    </div>
                    <div className="flex items-center gap-2 pl-8">
                      <span className="text-green-500">&apos;TypeScript&apos;</span>
                      <span className="text-yellow-500">,</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-primary/50">6</span>
                      <span className="text-yellow-500">]</span>
                    </div>
                    <div className="flex items-center gap-2 animate-pulse">
                      <span className="text-primary/50">7</span>
                      <span className="w-2 h-4 bg-primary/50" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Skills Section */}
          <section id="skills" className="scroll-mt-16 mx-4 md:mx-8 lg:mx-16">
            <FadeIn>
              <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-gray-100 dark:to-gray-400 bg-clip-text text-transparent">
                Skills & Technologies
              </h2>
            </FadeIn>
            <ScaleIn>
              <Tabs defaultValue="programming" className="w-full">
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="programming">Programming Languages</TabsTrigger>
                  <TabsTrigger value="frameworks">Frameworks</TabsTrigger>
                  <TabsTrigger value="libraries">Libraries</TabsTrigger>
                  <TabsTrigger value="tools">Tools</TabsTrigger>
                </TabsList>
                <TabsContent value="programming" className="mt-6">
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {["Java", "JavaScript", "TypeScript", "Python", "C++", "PHP", "SQL"].map((skill) => (
                      <SlideIn key={skill}>
                        <Card className="group hover:border-primary/50 transition-colors">
                          <CardHeader>
                            <CardTitle className="text-lg group-hover:text-primary transition-colors">{skill}</CardTitle>
                          </CardHeader>
                        </Card>
                      </SlideIn>
                    ))}
                  </div>
                </TabsContent>
                <TabsContent value="frameworks" className="mt-6">
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {[
                      { name: "Node.js", desc: "Backend Runtime" },
                      { name: "Next.js", desc: "React Framework" },
                      { name: "Express.js", desc: "Web Framework" },
                      { name: "React.js", desc: "UI Framework" },
                      { name: "MongoDB", desc: "NoSQL Database" },
                      { name: "PostgreSQL", desc: "SQL Database" },
                      { name: "Prisma", desc: "ORM" },
                      { name: "Redis", desc: "In-Memory DB" }
                    ].map((framework) => (
                      <SlideIn key={framework.name}>
                        <Card className="group hover:border-primary/50 transition-colors">
                          <CardHeader>
                            <CardTitle className="text-lg group-hover:text-primary transition-colors">{framework.name}</CardTitle>
                            <CardDescription>{framework.desc}</CardDescription>
                          </CardHeader>
                        </Card>
                      </SlideIn>
                    ))}
                  </div>
                </TabsContent>
                <TabsContent value="libraries" className="mt-6">
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {[
                      { name: "Tailwind CSS", desc: "Styling" },
                      { name: "Socket.io", desc: "Real-time" },
                      { name: "REST API", desc: "API Architecture" },
                      { name: "ChakraUI", desc: "UI Components" },
                      { name: "Flask", desc: "Python Web" },
                      { name: "shadcn/ui", desc: "UI Components" },
                      { name: "Framer Motion", desc: "Animations" },
                      { name: "JWT", desc: "Authentication" }
                    ].map((lib) => (
                      <SlideIn key={lib.name}>
                        <Card className="group hover:border-primary/50 transition-colors">
                          <CardHeader>
                            <CardTitle className="text-lg group-hover:text-primary transition-colors">{lib.name}</CardTitle>
                            <CardDescription>{lib.desc}</CardDescription>
                          </CardHeader>
                        </Card>
                      </SlideIn>
                    ))}
                  </div>
                </TabsContent>
                <TabsContent value="tools" className="mt-6">
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {[
                      { name: "Docker", desc: "Containerization" },
                      { name: "AWS", desc: "Cloud Platform" },
                      { name: "Git", desc: "Version Control" },
                      { name: "GitHub Actions", desc: "CI/CD" },
                      { name: "Serverless", desc: "Architecture" },
                      { name: "Cloudflare", desc: "CDN/Security" }
                    ].map((tool) => (
                      <SlideIn key={tool.name}>
                        <Card className="group hover:border-primary/50 transition-colors">
                          <CardHeader>
                            <CardTitle className="text-lg group-hover:text-primary transition-colors">{tool.name}</CardTitle>
                            <CardDescription>{tool.desc}</CardDescription>
                          </CardHeader>
                        </Card>
                      </SlideIn>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </ScaleIn>
          </section>

          {/* Projects Section */}
          <section id="projects" className="scroll-mt-16 mx-4 md:mx-8 lg:mx-16">
            <FadeIn>
              <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-gray-100 dark:to-gray-400 bg-clip-text text-transparent">
                Featured Projects
              </h2>
              <p className="text-muted-foreground max-w-3xl mb-6">
                Here are some of my recent projects showcasing my skills in full-stack development.
                Each project demonstrates different technologies and problem-solving approaches.
              </p>
            </FadeIn>
            <div className="grid md:grid-cols-2 gap-6">
              {projects.map((project) => (
                <SlideIn key={project.title}>
                  <Dialog>
                    <DialogTrigger asChild>
                      <motion.div
                        whileHover={{ scale: 1.03 }}
                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                        className="h-full"
                      >
                        <Card className="group hover:border-primary/50 transition-all hover:shadow-lg cursor-pointer h-[250px] flex flex-col">
                          <CardHeader className="pb-2">
                            <CardTitle className="group-hover:text-primary transition-colors">{project.title}</CardTitle>
                            <CardDescription>{project.shortDesc}</CardDescription>
                          </CardHeader>
                          <CardContent className="flex-1 flex flex-col justify-between">
                            <p className="text-sm text-muted-foreground line-clamp-3">
                              {project.title === "WalletMate"
                                ? "A feature-rich payment wallet application enabling seamless money transfers and wallet management, processing over 1000+ transactions per month."
                                : "A real-time chat application supporting over 1,000 concurrent users with minimal latency, featuring Socket.io for real-time messaging."}
                            </p>
                            <div className="flex flex-wrap gap-2 mt-4">
                              {project.tech.slice(0, 4).map((tech) => (
                                <span key={tech} className="px-2 py-1 bg-secondary rounded-md text-sm">
                                  {tech}
                                </span>
                              ))}
                              {project.tech.length > 4 && (
                                <span className="px-2 py-1 bg-secondary rounded-md text-sm">
                                  +{project.tech.length - 4} more
                                </span>
                              )}
                            </div>
                          </CardContent>
                        </Card>
                      </motion.div>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[625px] max-h-[80vh] overflow-y-auto [&>button]:hidden">
                      <DialogHeader className="flex flex-col sticky top-0 bg-background/80 backdrop-blur-sm pb-4 border-b z-10">
                        <DialogTitle className="text-2xl">{project.title}</DialogTitle>
                        <DialogDescription className="text-lg">{project.shortDesc}</DialogDescription>
                      </DialogHeader>
                      <div className="py-4 space-y-4">
                        <div className="space-y-4">
                          {project.longDesc.split('\n').map((paragraph) => (
                            <p key={paragraph.trim()} className="text-muted-foreground">
                              {paragraph.trim()}
                            </p>
                          ))}
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((tech) => (
                            <span key={tech} className="px-2 py-1 bg-secondary rounded-md text-sm">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="sticky bottom-0 pt-4 flex justify-end gap-3 bg-background/80 backdrop-blur-sm border-t z-10">
                        <DialogClose asChild>
                          <Button variant="outline" className="gap-2">
                            <X className="w-4 h-4" />
                            Close
                          </Button>
                        </DialogClose>
                        <Button asChild>
                          <a
                            href={project.gitLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
                            View on GitHub
                            <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                          </a>
                        </Button>
                      </div>
                    </DialogContent>
                  </Dialog>
                </SlideIn>
              ))}
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="scroll-mt-16 mx-4 md:mx-8 lg:mx-16">
            <FadeIn>
              <div className="max-w-2xl mx-auto">
                <Card className="overflow-hidden">
                  <CardHeader>
                    <CardTitle className="text-3xl bg-gradient-to-r from-gray-900 to-gray-600 dark:from-gray-100 dark:to-gray-400 bg-clip-text text-transparent">
                      Get in Touch
                    </CardTitle>
                    <CardDescription>
                      I&apos;m always open to new opportunities and collaborations
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form
                      action="https://formspree.io/f/mwpljjlq"
                      method="POST"
                      className="space-y-4"
                    >
                      <div className="grid w-full gap-1.5">
                        <label htmlFor="name" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                          Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          placeholder="Your name"
                        />
                      </div>
                      <div className="grid w-full gap-1.5">
                        <label htmlFor="email" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          placeholder="Your email address"
                        />
                      </div>
                      <div className="grid w-full gap-1.5">
                        <label htmlFor="message" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                          Message
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          required
                          className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          placeholder="Your message"
                        />
                      </div>
                      <Button type="submit" className="w-full">
                        Send Message
                      </Button>
                    </form>
                    <div className="mt-6 flex gap-4 justify-center">
                      <Button variant="outline" asChild className="group">
                        <a
                          href="https://www.linkedin.com/in/piyush-singh-211313357/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                          LinkedIn
                          <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </a>
                      </Button>
                      <Button variant="outline" asChild className="group">
                        <a
                          href="https://github.com/PiyushSinghjnp"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
                          GitHub
                          <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </FadeIn>
          </section>
        </>
    </div>
  )
}







