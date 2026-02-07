import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function About() {
  return (
    <div className="min-h-screen font-sans bg-background">
      <Navbar />
      
      <main>
        {/* Header */}
        <section className="relative py-24 bg-white overflow-hidden">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-2 block">
                  Nuestra Historia
                </span>
                <h1 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 mb-6">
                  Comprometidos con tu salud bucal desde el primer día
                </h1>
                <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                  Grupo Happy Dental nació con la misión de transformar la experiencia de ir al dentista. En Los Milagros, Mexicali, hemos creado un espacio donde la tecnología de punta se une a la calidez humana.
                </p>
                <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                  Creemos que una sonrisa saludable es fundamental para la confianza y bienestar de cada persona. Nuestro equipo de especialistas trabaja día a día para brindarte los mejores resultados.
                </p>
              </div>
              <div className="relative">
                <div className="aspect-square rounded-[2rem] overflow-hidden shadow-2xl rotate-3 bg-slate-100">
                  <img src="/assets/perfect-smile.jpg" alt="Sonrisa perfecta" className="w-full h-full object-cover" />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl max-w-xs">
                  <p className="font-heading font-bold text-2xl text-primary mb-1">10+ Años</p>
                  <p className="text-slate-600 text-sm">De experiencia creando sonrisas felices en nuestra comunidad.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="p-6">
                <div className="w-16 h-16 bg-blue-100 text-primary rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">1</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Honestidad</h3>
                <p className="text-muted-foreground">Te recomendaremos solo los tratamientos que realmente necesitas, explicando todo con claridad.</p>
              </div>
              <div className="p-6">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">2</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Calidad</h3>
                <p className="text-muted-foreground">Utilizamos materiales certificados y técnicas modernas para asegurar la durabilidad de tu tratamiento.</p>
              </div>
              <div className="p-6">
                <div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">3</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Empatía</h3>
                <p className="text-muted-foreground">Sabemos que cada paciente es único. Escuchamos tus preocupaciones y adaptamos la atención a ti.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-white text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-heading font-bold text-slate-900 mb-6">
              Ven a conocernos
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Estamos listos para recibirte y ayudarte a conseguir la sonrisa que siempre has querido.
            </p>
            <Link href="/contacto">
              <Button size="lg" className="rounded-full px-8 shadow-lg shadow-primary/20">
                Agendar una visita
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
