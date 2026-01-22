import Cursor from './components/Cursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Expertise from './components/Expertise';
import About from './components/About';
import Founders from './components/Founders';
import Journey from './components/Journey';
import Stats from './components/Stats';
import ContextForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-background min-h-screen text-white selection:bg-primary selection:text-white cursor-none">
      <Cursor />
      <Navbar />
      <main>
        <Hero />
        <Expertise />
        <About />
        <section id="portfolio" className="py-24 px-6 bg-surface text-center">
          <div className="container mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">Portfolio</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-12">
              Our latest masterpieces in design and development. Coming soon...
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: "Digital Banking App", img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop" },
                { title: "E-Commerce Rebrand", img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop" },
                { title: "AI Analytics Dashboard", img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop" }
              ].map((project, i) => (
                <div key={i} className="group relative aspect-video bg-white/[0.02] border border-white/5 rounded-3xl overflow-hidden">
                  <img
                    src={project.img}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-110 group-hover:opacity-60 transition-all duration-700"
                  />
                  <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                    <p className="text-white font-bold text-lg">{project.title}</p>
                    <p className="text-primary text-xs uppercase tracking-widest mt-1">View Project</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <Founders />
        <Journey />
        <Stats />
      </main>
      <ContextForm />
      <Footer />
    </div>
  );
}

export default App;
