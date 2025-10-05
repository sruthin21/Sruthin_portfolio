import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Database, Globe } from "lucide-react"

export function Skills() {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Code className="h-6 w-6" />,
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML5", "CSS3", "JavaScript","Recoil"],
    },
    {
      title: "Backend Development",
      icon: <Database className="h-6 w-6" />,
      skills: ["Node.js","TypeScript","PostgreSQL","PrismaORM" , "MongoDB", "Express.js"],
    },
    {
      title: "Tools & Technologies",
      icon: <Globe className="h-6 w-6" />,
      skills: ["Git", "Docker", "AWS EC2", "Vercel", "Linux", "CI/CD"],
    },
  ]

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Skills & Expertise</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and areas of expertise
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 bg-gradient-to-br from-red-500 via-purple-600 to-blue-800 rounded-full text-white w-fit">
                  {category.icon}
                </div>
                <CardTitle className="text-xl">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge key={skillIndex} variant="secondary" className="text-sm">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
