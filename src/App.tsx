import { Github, Linkedin, ArrowRight } from "lucide-react"
import { MeshGradient } from "@paper-design/shaders-react"

const speed = 1.0

export default function App() {
  return (
    <div className="w-full h-screen bg-black relative overflow-hidden font-sans">
      {/* Animated MeshGradient Background — exactly like demo */}
      <MeshGradient
        className="w-full h-full absolute inset-0"
        colors={["#000000", "#1a1a1a", "#333333", "#ffffff"]}
        speed={speed}
        grainOverlay={0.03}
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
      />

      {/* Lighting overlay effects from demo */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/4 left-1/3 w-32 h-32 bg-gray-800/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDuration: `${3 / speed}s` }}
        />
        <div
          className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-white/2 rounded-full blur-2xl animate-pulse"
          style={{ animationDuration: `${2 / speed}s`, animationDelay: "1s" }}
        />
        <div
          className="absolute top-1/2 right-1/3 w-20 h-20 bg-gray-900/3 rounded-full blur-xl animate-pulse"
          style={{ animationDuration: `${4 / speed}s`, animationDelay: "0.5s" }}
        />
      </div>

      {/* Main Content */}
      <main className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 text-center">
        {/* Name Section */}
        <div className="flex flex-col items-center gap-6 mb-10 opacity-0 animate-fade-in-up">
          <h1 className="font-display text-[clamp(3rem,10vw,6rem)] font-bold tracking-[-0.05em] text-white leading-none">
            <a
              href="/games/minesweeper/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-inherit no-underline transition-colors duration-300 hover:text-orange-500"
            >
              O
            </a>
            mer Kalay
          </h1>
          <div className="h-px w-48 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          <p className="font-mono text-[clamp(0.875rem,2vw,1.25rem)] tracking-[0.2em] uppercase text-white/40">
            Software Engineer &amp; Student
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-4 w-full max-w-[400px] sm:max-w-none sm:w-auto opacity-0 animate-fade-in-up [animation-delay:200ms]">
          <a
            href="https://github.com/omerkalay"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center gap-3 px-8 py-4 border border-white/10 text-white font-medium tracking-wide backdrop-blur-sm transition-all duration-300 hover:border-white/30 hover:bg-white/[0.05] min-w-[180px]"
          >
            <Github className="w-5 h-5 transition-colors duration-300 group-hover:text-white" />
            <span>View Projects</span>
            <ArrowRight className="w-4 h-4 opacity-30 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-1" />
          </a>
          <a
            href="https://linkedin.com/in/omer-kalay-04282a272"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center gap-3 px-8 py-4 border border-white/10 text-white font-medium tracking-wide backdrop-blur-sm transition-all duration-300 hover:border-white/30 hover:bg-white/[0.05] min-w-[180px]"
          >
            <Linkedin className="w-5 h-5 transition-colors duration-300 group-hover:text-white" />
            <span>Contact Me</span>
          </a>
        </div>
      </main>

      {/* Footer */}
      <footer className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[10px] text-white/20 tracking-[0.3em] uppercase z-10">
        &copy; {new Date().getFullYear()}
      </footer>
    </div>
  )
}
