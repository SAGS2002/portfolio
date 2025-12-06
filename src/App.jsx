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
      title: "Admin Me - Gestión para Emprendedores",
      desc: "Co-fundé y desarrollé esta aplicación web diseñada para ayudar a pequeños comerciantes a digitalizar sus negocios. Simplifica la gestión de ventas, inventario y finanzas.",
      tags: ["React 18", "Tailwind", "NodeJS", "Producción"],
      status: "En Producción",
      statusColor: "green",
      features: [
        "Dashboard financiero con cálculo de ganancias en tiempo real.",
        "Diseño 'Mobile-First' enfocado en la usabilidad en campo.",
        "Integración con API REST y manejo de estado global.",
        "Despliegue CI/CD en Vercel y Render."
      ],
      // CAMBIO: Objeto de links separado
      links: {
        demo: "https://admin-me-blue.vercel.app",
        repo: null // null para ocultar el botón de código
      },
      visual: (
        <svg width="250" height="70" viewBox="0 0 400 100" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto drop-shadow-2xl transform group-hover:scale-105 transition-transform duration-500">
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
      )
    },
    {
      title: "Medieval Combat Arena",
      desc: "Simulador de combate RPG por turnos. Un proyecto enfocado en la lógica de programación pura, Orientación a Objetos (POO) y manipulación avanzada del DOM sin frameworks.",
      tags: ["Vanilla JS", "POO", "LocalStorage", "CSS Animations"],
      status: "Logic & Algorithms",
      statusColor: "yellow",
      features: [
        "Sistema de clases (Guerrero, Mago, etc.) usando Herencia.",
        "Inteligencia Artificial básica para contraataques.",
        "Persistencia de estado (Torneo) usando LocalStorage.",
        "Animaciones de combate fluidas con CSS puro."
      ],
      links: {
        demo: "https://medieval-combat-arena.vercel.app/index.html",
        repo: "https://github.com/SAGS2002/Medieval-Combat-Arena"
      },
      visual: (
        <div className="relative group-hover:rotate-12 transition-transform duration-500">
          <div className="absolute -inset-4 bg-orange-600/30 rounded-full blur-xl animate-pulse"></div>
          <Gamepad2 size={120} className="text-orange-500 relative z-10 drop-shadow-[0_0_15px_rgba(249,115,22,0.5)]" />
          <div className="absolute -bottom-2 -right-2 text-white bg-red-600 text-xs font-bold px-2 py-1 rounded border border-red-400">VS</div>
        </div>
      )
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['inicio', 'habilidades', 'proyectos', 'contacto'];
      const scrollPosition = window.scrollY + 100;
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
    <div className="min-h-screen bg-slate-900 text-slate-200 font-sans selection:bg-indigo-500 selection:text-white">

      {/* Navegación */}
      <nav className="fixed w-full z-50 bg-slate-900/90 backdrop-blur-sm border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0 cursor-pointer" onClick={() => scrollToSection('inicio')}>
              <span className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
                &lt;SebasCodes/&gt;
              </span>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {['Inicio', 'Habilidades', 'Proyectos', 'Contacto'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className={`${activeSection === item.toLowerCase()
                        ? 'text-indigo-400 border-b-2 border-indigo-400'
                        : 'text-slate-300 hover:text-white'
                      } px-3 py-2 text-sm font-medium transition-all duration-300`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-slate-300 hover:text-white p-2">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden bg-slate-800 border-b border-slate-700">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {['Inicio', 'Habilidades', 'Proyectos', 'Contacto'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-slate-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium w-full text-left"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-700" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-block px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 mb-6 font-medium animate-fade-in-up">
            Hola, soy {personalInfo.name}
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6">
            Desarrollo Web <br />
            <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              con propósito
            </span>
          </h1>
          <h2 className="text-xl md:text-2xl font-medium text-slate-400 mb-8 max-w-2xl mx-auto">
            {personalInfo.role}
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-slate-400 mb-10 leading-relaxed">
            {personalInfo.description}
          </p>
          <div className="flex justify-center gap-4">
            <button onClick={() => scrollToSection('proyectos')} className="px-8 py-3 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-medium transition-colors shadow-lg shadow-indigo-500/30">
              Ver Mis Proyectos
            </button>
            <button onClick={() => scrollToSection('contacto')} className="px-8 py-3 rounded-lg border border-slate-600 hover:border-slate-500 hover:bg-slate-800 text-slate-300 transition-all">
              Contactar
            </button>
          </div>
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer" onClick={() => scrollToSection('habilidades')}>
            <ChevronDown className="text-slate-500" size={32} />
          </div>
        </div>
      </section>

      {/* Habilidades Section */}
      <section id="habilidades" className="py-24 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-white">
            Stack Tecnológico
          </h2>
          <p className="text-center text-slate-400 mb-16 max-w-2xl mx-auto">
            Herramientas que utilizo para construir aplicaciones web modernas.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <div key={index} className="group bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-indigo-500/50 hover:bg-slate-750 transition-all duration-300 flex items-center gap-4">
                <div className="p-3 bg-slate-900 rounded-lg group-hover:scale-110 transition-transform duration-300">
                  <skill.icon className="w-6 h-6 text-indigo-400 group-hover:text-indigo-300" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-white">{skill.name}</h3>
                  <span className="text-xs text-slate-500 font-mono">{skill.category}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proyectos Section */}
      <section id="proyectos" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-white">
            Proyectos Destacados
          </h2>

          <div className="max-w-5xl mx-auto space-y-16">
            {projects.map((project, index) => (
              <div key={index} className="bg-slate-800 rounded-2xl overflow-hidden border border-slate-700 hover:border-indigo-500/30 transition-all group flex flex-col lg:flex-row shadow-2xl">

                {/* Visual del Proyecto */}
                <div className="lg:w-2/5 bg-gradient-to-br from-indigo-900/50 to-slate-900 flex flex-col items-center justify-center p-12 relative overflow-hidden">
                  <div className="absolute inset-0 bg-grid-white/[0.05] bg-[length:20px_20px]" />

                  {/* Renderizado Dinámico del Visual */}
                  <div className="relative z-10 p-4">
                    {project.visual}
                  </div>

                  <div className="mt-8 flex flex-wrap gap-2 justify-center relative z-10">
                    <span className={`px-3 py-1 bg-${project.statusColor}-500/20 text-${project.statusColor}-300 text-xs font-bold rounded-full border border-${project.statusColor}-500/30 flex items-center gap-1`}>
                      <span className={`w-2 h-2 bg-${project.statusColor}-500 rounded-full animate-pulse`} /> {project.status}
                    </span>
                  </div>
                </div>

                {/* Contenido */}
                <div className="p-8 lg:p-12 lg:w-3/5 flex flex-col justify-center">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h3 className="text-3xl font-bold text-white mb-2">{project.title}</h3>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, i) => (
                          <span key={i} className="text-xs font-medium text-indigo-300 bg-indigo-500/10 px-2 py-1 rounded border border-indigo-500/20">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <p className="text-slate-300 mb-8 text-lg leading-relaxed">
                    {project.desc}
                  </p>

                  <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-700/50 mb-8">
                    <h4 className="text-sm font-bold text-white mb-4 uppercase tracking-wider">Características Clave</h4>
                    <ul className="space-y-3">
                      {project.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start text-slate-400 text-sm">
                          <TrendingUp className="w-4 h-4 text-indigo-500 mt-0.5 mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* SECCIÓN DE BOTONES: Aquí está la magia */}
                  <div className="flex gap-4 mt-auto">
                    {project.links.demo && (
                      <a
                        href={project.links.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white text-center py-4 rounded-xl font-bold transition-all shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/40 flex items-center justify-center gap-2 group-hover:translate-y-[-2px]"
                      >
                        <Globe size={20} /> Ver Aplicación
                      </a>
                    )}

                    {/* Renderizado condicional del botón de GitHub */}
                    {project.links.repo && (
                      <a
                        href={project.links.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-slate-700 hover:bg-slate-600 text-white text-center py-4 rounded-xl font-bold transition-all border border-slate-600 hover:border-slate-500 flex items-center justify-center gap-2 group-hover:translate-y-[-2px]"
                      >
                        <Github size={20} /> Ver Código
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
      <section id="contacto" className="py-24 bg-gradient-to-t from-slate-800/50 to-transparent">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">
            ¿Listo para colaborar?
          </h2>
          <p className="text-slate-400 mb-12 text-lg">
            Busco un equipo donde pueda aprender, crecer y aportar valor desde el primer día. <br />
            ¡Hablemos!
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-16">
            <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-3 px-8 py-4 bg-slate-800 rounded-lg hover:bg-slate-700 border border-slate-700 transition-all group w-full md:w-auto justify-center">
              <Mail className="text-indigo-400 group-hover:scale-110 transition-transform" />
              <span className="text-white">Enviar Correo</span>
            </a>
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-8 py-4 bg-[#0077b5]/10 rounded-lg hover:bg-[#0077b5]/20 border border-[#0077b5]/30 transition-all group w-full md:w-auto justify-center">
              <Linkedin className="text-[#0077b5] group-hover:scale-110 transition-transform" />
              <span className="text-white">LinkedIn</span>
            </a>
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-8 py-4 bg-white/5 rounded-lg hover:bg-white/10 border border-white/10 transition-all group w-full md:w-auto justify-center">
              <Github className="text-white group-hover:scale-110 transition-transform" />
              <span className="text-white">GitHub</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 py-8 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} {personalInfo.name}. Creado con React.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href={personalInfo.github} className="text-slate-500 hover:text-indigo-400 transition-colors"><Github size={20} /></a>
            <a href={personalInfo.linkedin} className="text-slate-500 hover:text-indigo-400 transition-colors"><Linkedin size={20} /></a>
            <a href={`mailto:${personalInfo.email}`} className="text-slate-500 hover:text-indigo-400 transition-colors"><Mail size={20} /></a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;