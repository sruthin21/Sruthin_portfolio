import { Achievements } from "./components/achievements";
import { Education } from "./components/education";
import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { Hero } from "./components/hero";
import { Projects } from "./components/projects";
import { Skills } from "./components/skills";


export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Achievements />
        <Education />
      </main>
      <Footer />
    </div>
  )
}
