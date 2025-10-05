import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail } from "lucide-react"

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-500 via-purple-600 to-blue-800 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6">
              {"Hi, I'm"}{" "}
              <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                Rayella Sruthin Teja
              </span>
            </h1>
            <p className="text-xl sm:text-2xl lg:text-3xl mb-8 text-gray-200">Full Stack Developer</p>
            <p className="text-lg sm:text-xl mb-12 text-gray-300 max-w-2xl lg:max-w-none">
              I create beautiful, functional, and user-centered digital experiences. Passionate about clean code and
              innovative solutions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100">
                View My Work
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-white text-gray-900"
              >
                Download CV
              </Button>
            </div>

            <div className="flex justify-center lg:justify-start space-x-6">
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
                <Github className="h-6 w-6" />
              </Button>
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
                <Linkedin className="h-6 w-6" />
              </Button>
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
                <Mail className="h-6 w-6" />
              </Button>
            </div>
          </div>

          {/* Profile Image */}
          
        </div>
      </div>
    </section>
  )
}