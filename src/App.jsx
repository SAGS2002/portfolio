import React, { useState, useEffect } from 'react';
import {
  Menu,
  X,
  Github,
  Linkedin,
  Mail,
  Database,
  Server,
  Layout,
  Globe,
  Zap,
  Terminal,
  ChevronDown,
  Cloud,
  TrendingUp,
  Braces,
  Gamepad2,
  ListTodo
} from 'lucide-react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');

  const personalInfo = {
    name: "Sebastián Gallardo",
    role: "Desarrollador Frontend Junior",
    description: "Desarrollador web enfocado en crear soluciones digitales útiles y accesibles. Me especializo en React y en transformar necesidades reales de los usuarios en interfaces limpias y funcionales.",
    email: "gallardosebas8668@gmail.com",
    github: "https://github.com/SAGS2002",
    linkedin: "https://www.linkedin.com/in/sebastián-gallardo-4b252a33a/"
  };

  const skills = [
    { name: "React + Vite", icon: Zap, category: "Frontend" },
    { name: "Tailwind CSS", icon: Layout, category: "Frontend" },
    { name: "HTML5 & CSS3", icon: Globe, category: "Frontend" },
    { name: "JavaScript (ES6+)", icon: Braces, category: "Frontend" },
    { name: "PostgreSQL", icon: Database, category: "Backend" },
    { name: "Node.js", icon: Server, category: "Backend" },
    { name: "Express", icon: Terminal, category: "Backend" },
    { name: "Vercel/Render", icon: Cloud, category: "DevOps" },
    { name: "Git/GitHub", icon: Github, category: "DevOps" },
  ];

  const projects = [
    {
      title: "Admin Me",
      subtitle: "Gestión para Emprendedores",
      desc: "Co-fundé y desarrollé esta aplicación web diseñada para ayudar a pequeños comerciantes a digitalizar sus negocios. Simplifica la gestión de ventas, inventario y finanzas.",
      tags: ["React 18", "Tailwind", "NodeJS", "Producción"],
      status: "En Producción",
      statusColor: "green",
      features: [
        "Dashboard financiero en tiempo real.",
        "Diseño 'Mobile-First' para uso en campo.",
        "Integración API REST y estado global.",
        "Despliegue CI/CD en Vercel."
      ],
      links: {
        demo: "https://admin-me-blue.vercel.app",
        repo: null
      },
      visual: (
        // Optimización visual SVG responsive
        <div className="w-full max-w-[280px] mx-auto">
             <svg viewBox="0 0 400 100" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto drop-shadow-2xl transform group-hover:scale-105 transition-transform duration-500">
          <defs>
            <style>@import url('https://fonts.googleapis.com/css2?family=Inter:wght@800&display=swap');</style>
          </defs>
          <g transform="translate(10, 15)">
            <rect x="0" y="0" width="70" height="70" rx="15" fill="#7C3AED" />
            <rect x="14" y="18" width="42" height="5" rx="2.5" fill="white" />
            <rect x="24" y="30" width="22" height="5" rx="2.5" fill="white" />
            <rect x="14" y="42" width="42" height="5" rx="2.5" fill="white" />
            <rect x="28" y="54" width="14" height="5" rx="2.5" fill="white" />
            <g transform="translate(60, 10) rotate(12)">
              <circle cx="0" cy="0" r="14" fill="#10B981" stroke="white" strokeWidth="2" />
              <path d="M-5 2 L-1 6 L7 -4" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            </g>
          </g>
          <g transform="translate(95, 60)">
            <text x="0" y="0" fontFamily="Arial, sans-serif" fontWeight="900" fontSize="48">
              <tspan fill="#F3F4F6">Admin</tspan>
              <tspan fill="#A78BFA">Me</tspan>
            </text>
            <text x="2" y="22" fontFamily="Arial, sans-serif" fontSize="14" fill="#9CA3AF">Tu control, simplificado.</text>
          </g>
        </svg>
        </div>
      )
    },
    {
      title: "Medieval Arena",
      subtitle: "Simulador RPG",
      desc: "Simulador de combate por turnos. Un proyecto enfocado en la lógica pura, POO y manipulación del DOM sin frameworks.",
      tags: ["Vanilla JS", "POO", "LocalStorage", "CSS Anim"],
      status: "Logic & Algorithms",
      statusColor: "yellow",
      features: [
        "Sistema de clases y Herencia.",
        "IA básica para contraataques.",
        "Persistencia con LocalStorage.",
        "Animaciones con CSS puro."
      ],
      links: {
        demo: "https://medieval-combat-arena.vercel.app/index.html",
        repo: "https://github.com/SAGS2002/Medieval-Combat-Arena"
      },
      visual: (
        <div className="relative group-hover:rotate-12 transition-transform duration-500 py-4">
          <div className="absolute -inset-4 bg-orange-600/30 rounded-full blur-xl animate-pulse"></div>
          <Gamepad2 size={100} className="text-orange-500 relative z-10 drop-shadow-[0_0_15px_rgba(249,115,22,0.5)] md:w-[120px] md:h-[120px]" />
          <div className="absolute -bottom-2 -right-2 text-white bg-red-600 text-xs font-bold px-2 py-1 rounded border border-red-400">VS</div>
        </div>
      )
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['inicio', 'habilidades', 'proyectos', 'contacto'];
      // Ajuste de offset para detectar mejor en movil
      const scrollPosition = window.scrollY + 150; 
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && element.offsetTop <= scrollPosition && (element.offsetTop + element.offsetHeight) > scrollPosition) {
          setActiveSection(section);
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    // scroll-pt-20 asegura que el header no tape el titulo al hacer scroll
    <div className="min-h-screen bg-slate-900 text-slate-200 font-sans selection:bg-indigo-500 selection:text-white scroll-pt-20">

      {/* Navegación */}
      <nav className="fixed w-full z-50 bg-slate-900/95 backdrop-blur-sm border-b border-slate-800 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0 cursor-pointer group" onClick={() => scrollToSection('inicio')}>
              <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent group-hover:from-indigo-300 group-hover:to-cyan-300 transition-all">
                &lt;SebasCodes/&gt;
              </span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {['Inicio', 'Habilidades', 'Proyectos', 'Contacto'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className={`${activeSection === item.toLowerCase()
                        ? 'text-indigo-400 border-b-2 border-indigo-400'
                        : 'text-slate-300 hover:text-white'
                      } px-3 py-2 text-sm font-medium transition-all duration-300 hover:scale-105`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)} 
                className="text-slate-300 hover:text-white p-2 hover:bg-slate-800 rounded-md transition-colors"
                aria-label="Abrir menú"
              >
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Content */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-900 border-b border-slate-700 absolute w-full left-0 shadow-2xl animate-fade-in-down">
            <div className="px-4 pt-2 pb-4 space-y-2">
              {['Inicio', 'Habilidades', 'Proyectos', 'Contacto'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`block w-full text-left px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                    activeSection === item.toLowerCase() 
                    ? 'bg-indigo-500/10 text-indigo-400 border border-indigo-500/20' 
                    : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden px-4">
        {/* Background Gradients - Adjusted sizes for mobile */}
        <div className="absolute top-20 -left-10 w-64 h-64 md:w-72 md:h-72 bg-indigo-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 -right-10 w-64 h-64 md:w-96 md:h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-700" />

        <div className="max-w-7xl mx-auto text-center relative z-10 w-full">
          <div className="inline-block px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 mb-6 font-medium text-sm sm:text-base animate-fade-in-up">
            Hola, soy {personalInfo.name}
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 leading-tight">
            Desarrollo Web <br />
            <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              con propósito
            </span>
          </h1>
          
          <h2 className="text-lg sm:text-xl md:text-2xl font-medium text-slate-400 mb-8 max-w-2xl mx-auto px-4">
            {personalInfo.role}
          </h2>
          
          <p className="max-w-xl md:max-w-2xl mx-auto text-base sm:text-lg text-slate-400 mb-10 leading-relaxed px-2">
            {personalInfo.description}
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 px-4">
            <button onClick={() => scrollToSection('proyectos')} className="w-full sm:w-auto px-8 py-3.5 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-medium transition-colors shadow-lg shadow-indigo-500/30 active:scale-95">
              Ver Mis Proyectos
            </button>
            <button onClick={() => scrollToSection('contacto')} className="w-full sm:w-auto px-8 py-3.5 rounded-lg border border-slate-600 hover:border-slate-500 hover:bg-slate-800 text-slate-300 transition-all active:scale-95">
              Contactar
            </button>
          </div>
          
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer hidden sm:block" onClick={() => scrollToSection('habilidades')}>
            <ChevronDown className="text-slate-500 hover:text-indigo-400 transition-colors" size={32} />
          </div>
        </div>
      </section>

      {/* Habilidades Section */}
      <section id="habilidades" className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-white">
            Stack Tecnológico
          </h2>
          <p className="text-center text-slate-400 mb-12 max-w-2xl mx-auto text-sm sm:text-base">
            Herramientas que utilizo para construir aplicaciones web modernas.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {skills.map((skill, index) => (
              <div key={index} className="group bg-slate-800 p-4 sm:p-6 rounded-xl border border-slate-700 hover:border-indigo-500/50 hover:bg-slate-750 transition-all duration-300 flex flex-col sm:flex-row items-center gap-3 sm:gap-4 text-center sm:text-left shadow-sm hover:shadow-indigo-500/10">
                <div className="p-3 bg-slate-900 rounded-lg group-hover:scale-110 transition-transform duration-300">
                  <skill.icon className="w-6 h-6 sm:w-8 sm:h-8 text-indigo-400 group-hover:text-indigo-300" />
                </div>
                <div>
                  <h3 className="text-sm sm:text-base font-semibold text-white">{skill.name}</h3>
                  <span className="text-xs text-slate-500 font-mono hidden sm:inline-block">{skill.category}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proyectos Section */}
      <section id="proyectos" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
            Proyectos Destacados
          </h2>

          <div className="max-w-5xl mx-auto space-y-12 sm:space-y-16">
            {projects.map((project, index) => (
              <div key={index} className="bg-slate-800 rounded-2xl overflow-hidden border border-slate-700 hover:border-indigo-500/30 transition-all group flex flex-col lg:flex-row shadow-2xl">

                {/* Visual del Proyecto */}
                <div className="lg:w-2/5 bg-gradient-to-br from-indigo-900/50 to-slate-900 flex flex-col items-center justify-center p-8 sm:p-12 relative overflow-hidden min-h-[250px]">
                  <div className="absolute inset-0 bg-grid-white/[0.05] bg-[length:20px_20px]" />

                  <div className="relative z-10 w-full flex justify-center">
                    {project.visual}
                  </div>

                  <div className="mt-6 sm:mt-8 flex flex-wrap gap-2 justify-center relative z-10">
                    <span className={`px-3 py-1 bg-${project.statusColor}-500/20 text-${project.statusColor}-300 text-xs font-bold rounded-full border border-${project.statusColor}-500/30 flex items-center gap-1`}>
                      <span className={`w-2 h-2 bg-${project.statusColor}-500 rounded-full animate-pulse`} /> {project.status}
                    </span>
                  </div>
                </div>

                {/* Contenido */}
                <div className="p-6 sm:p-8 lg:p-12 lg:w-3/5 flex flex-col justify-center">
                  <div className="mb-6">
                    <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-indigo-400 font-medium mb-3 text-sm">{project.subtitle}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, i) => (
                        <span key={i} className="text-xs font-medium text-indigo-300 bg-indigo-500/10 px-2 py-1 rounded border border-indigo-500/20">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <p className="text-slate-300 mb-8 text-base sm:text-lg leading-relaxed">
                    {project.desc}
                  </p>

                  <div className="bg-slate-900/50 rounded-xl p-5 border border-slate-700/50 mb-8">
                    <h4 className="text-xs sm:text-sm font-bold text-white mb-4 uppercase tracking-wider">Características Clave</h4>
                    <ul className="space-y-3">
                      {project.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start text-slate-400 text-sm">
                          <TrendingUp className="w-4 h-4 text-indigo-500 mt-0.5 mr-3 flex-shrink-0" />
                          <span className="leading-snug">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Botones Responsive */}
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-auto">
                    {project.links.demo && (
                      <a
                        href={project.links.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:flex-1 bg-indigo-600 hover:bg-indigo-700 text-white text-center py-3 sm:py-4 rounded-xl font-bold transition-all shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/40 flex items-center justify-center gap-2 group-hover:translate-y-[-2px]"
                      >
                        <Globe size={18} /> <span className="text-sm sm:text-base">Ver App</span>
                      </a>
                    )}

                    {project.links.repo && (
                      <a
                        href={project.links.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:flex-1 bg-slate-700 hover:bg-slate-600 text-white text-center py-3 sm:py-4 rounded-xl font-bold transition-all border border-slate-600 hover:border-slate-500 flex items-center justify-center gap-2 group-hover:translate-y-[-2px]"
                      >
                        <Github size={18} /> <span className="text-sm sm:text-base">Ver Código</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contacto Section */}
      <section id="contacto" className="py-20 bg-gradient-to-t from-slate-800/50 to-transparent">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            ¿Listo para colaborar?
          </h2>
          <p className="text-slate-400 mb-10 text-base sm:text-lg px-2">
            Busco un equipo donde pueda aprender, crecer y aportar valor desde el primer día.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 mb-16 w-full">
            <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-3 px-6 py-4 bg-slate-800 rounded-lg hover:bg-slate-700 border border-slate-700 transition-all group w-full sm:w-auto justify-center">
              <Mail className="text-indigo-400 group-hover:scale-110 transition-transform" />
              <span className="text-white font-medium">Email</span>
            </a>
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-6 py-4 bg-[#0077b5]/10 rounded-lg hover:bg-[#0077b5]/20 border border-[#0077b5]/30 transition-all group w-full sm:w-auto justify-center">
              <Linkedin className="text-[#0077b5] group-hover:scale-110 transition-transform" />
              <span className="text-white font-medium">LinkedIn</span>
            </a>
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-6 py-4 bg-white/5 rounded-lg hover:bg-white/10 border border-white/10 transition-all group w-full sm:w-auto justify-center">
              <Github className="text-white group-hover:scale-110 transition-transform" />
              <span className="text-white font-medium">GitHub</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 py-8 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm text-center md:text-left">
            © {new Date().getFullYear()} {personalInfo.name}.
          </p>
          <div className="flex space-x-6">
            <a href={personalInfo.github} className="text-slate-500 hover:text-indigo-400 transition-colors p-2"><Github size={20} /></a>
            <a href={personalInfo.linkedin} className="text-slate-500 hover:text-indigo-400 transition-colors p-2"><Linkedin size={20} /></a>
            <a href={`mailto:${personalInfo.email}`} className="text-slate-500 hover:text-indigo-400 transition-colors p-2"><Mail size={20} /></a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;