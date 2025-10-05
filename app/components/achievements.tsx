import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Trophy, Award, Star, Target } from "lucide-react"

export function Achievements() {
  const achievements = [
    {
      title: "Global Rank 880 in CodeVita Season 12",
      organization: "TCS",
      date: "JAN 2025",
      description: "Achieved a global rank of 880 out of 400,000+ registrations in the global TCS CodeVita competition ",
      icon: <Trophy className="h-6 w-6" />,
      type: "Award",
    },
    {
      title: "CodeGrage Lead and Chairperson (IEEE Computer Society)",
      organization: "College Level",
      date: "JULY 2025 - SEP 2025",
      description: "Conducted various technical  sessions for juniors on Competitive Programming and OOP concepts.",
      icon: <Award className="h-6 w-6" />,
      type: "Competition",
    },
  ]

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Award":
        return "bg-yellow-100 text-yellow-800"
      case "Competition":
        return "bg-green-100 text-green-800"
      case "Certification":
        return "bg-blue-100 text-blue-800"
      case "Recognition":
        return "bg-purple-100 text-purple-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <section id="achievements" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Achievements & Recognition</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Milestones and recognition that highlight my professional journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievements.map((achievement, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-gradient-to-br from-red-500 via-purple-600 to-blue-800 rounded-lg text-white">
                      {achievement.icon}
                    </div>
                    <div>
                      <CardTitle className="text-lg">{achievement.title}</CardTitle>
                      <p className="text-sm text-gray-600">{achievement.organization}</p>
                    </div>
                  </div>
                  <Badge className={getTypeColor(achievement.type)}>{achievement.type}</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-3">{achievement.description}</p>
                <p className="text-sm font-medium text-gray-500">{achievement.date}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
