import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Showcase from './components/Showcase';

function App() {
  return (
    <main className="min-h-screen bg-[#0b0e14] text-white antialiased">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Showcase />
    </main>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0b0e14]/70 backdrop-blur-md">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <a href="#home" className="text-sm font-semibold tracking-tight text-white">
          Leander Josh
        </a>
        <nav className="hidden gap-6 text-sm text-white/80 sm:flex">
          <a href="#about" className="hover:text-white">About</a>
          <a href="#skills" className="hover:text-white">Skills</a>
          <a href="#projects" className="hover:text-white">Projects</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </nav>
      </div>
    </header>
  );
}

export default App;
