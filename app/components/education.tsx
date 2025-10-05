import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, BookOpen, Calendar } from "lucide-react"

export function Education() {
  const education = [
    {
      degree: "Bachelor of Engineering  in Artifical Intelligence and Machine Learning",
      institution: "University College of Engineering , Osmania University",
      location: "Hyderabad",
      period: "2022 - 2026",
      gpa: "8.3/10.0",
      achievements: ["IEEE CS Organiser"],
      icon: <BookOpen className="h-6 w-6" />,
    },
  ]


  return (
    <section id="education" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Education & Certifications</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            My academic background and professional certifications
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Education */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Education</h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-gradient-to-br from-red-500 via-purple-600 to-blue-800 rounded-lg text-white">
                        {edu.icon}
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-lg">{edu.degree}</CardTitle>
                        <p className="text-gray-600 font-medium">{edu.institution}</p>
                        <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
                          <span className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            {edu.period}
                          </span>
                          <span>GPA: {edu.gpa}</span>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <p className="text-sm font-medium text-gray-700">Key Achievements:</p>
                      <div className="flex flex-wrap gap-2">
                        {edu.achievements.map((achievement, achIndex) => (
                          <Badge key={achIndex} variant="secondary" className="text-xs">
                            {achievement}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Certifications */}
        </div>
      </div>
    </section>
  )
}
