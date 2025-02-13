import { Inter } from "next/font/google"
import Header from "../components/Header"
import Hero from "../components/Hero"
import About from "../components/About"
import Projects from "../components/Projects"
import Contact from "../components/Contact"

const inter = Inter({ subsets: ["latin"] })

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f0ead6] text-[#333] font-mono">
      <Header />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </main>
  )
}

