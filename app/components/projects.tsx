import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github } from "lucide-react"
import Image from "next/image"

export function Projects() {
  const projects = [
    {
      title: "DevConnect – Real-Time Chat for Developers & Tech Enthusiasts",
      description:
        "DevConnect is a real-time chat platform for developers to collaborate, share knowledge, debug, explore tech trends, and connect with seamless performance and topic-based channels.",
      image: "/Chat_App.png",
      technologies: ["Node.js", "TypeScript", "Express.js", "PostgreSQL", "PrismORM","Socket.io","React","Tailwindcss"],
      liveUrl: "#",
      githubUrl: "https://github.com/sruthin21/Dev_connect",
    },
    {
      title: "CodeShare",
      description: "A blogging platform for developers to post issues, fixes, and experiences with the tech community.",
      image: "/Tech_Blog_Project.png",
      technologies: ["Nextjs", "Typescript", "Tailwind CSS", "shadcn/ui", "Next.js API Routes","PostgreSQL with Prisma ORM"," JWT with bcryptjs"],
      liveUrl: "#",
      githubUrl: "https://github.com/sruthin21/TechBlog",
    },
    {
      title: "HireHub",
      description:
        "A simple platform for interviewers to create rooms, share video, and chat in real time for seamless candidate evaluation.",
      image: "/Interview_pro.png",
      technologies: ["Reactjs", "TailwindCSS", "Nodejs", "Expressjs","Socket.io","Webrtc"],
      liveUrl: "#",
      githubUrl: "https://github.com/sruthin21/InterviewPro",
    },
    {
      title: "Cashly",
      description: "Send and receive money instantly with a simple, secure, and user-friendly digital wallet.",
      image: "/PayFlow.png",
      technologies: ["MonoRepo", "Nextjs", "Tailwind CSS", "TypeScript","NextAuth","ReactJs"],
      liveUrl: "#",
      githubUrl: "https://github.com/sruthin21/Paytm",
    },
    {
        title: "TuneVote",
        description: "A collaborative music app where users create rooms, add songs, and vote to decide what plays next.",
        image: "/Music_app.png",
        technologies: ["Next.js", "PostgreSQL", "PrismORM", "Tailwind CSS", "TypeScript"],
        liveUrl: "#",
        githubUrl: "https://github.com/sruthin21/MelodyCraft",
      },
  ]

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">A selection of my recent work and personal projects</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl">{project.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-3">
                 
                <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Button size="sm" variant="outline" className="flex items-center gap-2">
                    <Github className="h-4 w-4" />
                    Code
                    </Button>
                </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
