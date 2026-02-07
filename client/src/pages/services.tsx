import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { CheckCircle2 } from "lucide-react";

export default function Services() {
  const treatments = [
    {
      category: "Odontología General",
      items: [
        {
          title: "Limpieza Dental Profunda",
          desc: "Eliminación de sarro y placa bacteriana con ultrasonido para prevenir enfermedades de las encías.",
          price: "Desde $500"
        },
        {
          title: "Resinas Estéticas",
          desc: "Restauraciones del color de tu diente para reparar caries o fracturas sin que se note.",
          price: "Consulta"
        },
        {
          title: "Extracciones Simples",
          desc: "Retiro de piezas dentales dañadas con anestesia local y mínima molestia.",
          price: "Consulta"
        }
      ]
    },
    {
      category: "Estética Dental",
      items: [
        {
          title: "Blanqueamiento Dental",
          desc: "Aclara varios tonos el color de tus dientes en una sola sesión o con tratamiento en casa.",
          price: "Promoción"
        },
        {
          title: "Diseño de Sonrisa",
          desc: "Planificación digital para mejorar la forma, tamaño y color de tus dientes.",
          price: "Personalizado"
        }
      ]
    },
    {
      category: "Especialidades",
      items: [
        {
          title: "Ortodoncia (Brackets)",
          desc: "Corrección de la posición de los dientes. Ofrecemos brackets metálicos, estéticos y autoligados.",
          price: "Mensualidades"
        },
        {
          title: "Endodoncia",
          desc: "Tratamiento de conductos para salvar dientes con caries profunda que ha llegado al nervio.",
          price: "Consulta"
        },
        {
          title: "Implantes Dentales",
          desc: "La mejor solución para reemplazar dientes perdidos. Raíces artificiales de titanio.",
          price: "Consulta"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen font-sans bg-background">
      <Navbar />
      
      <main>
        <section className="bg-slate-50 py-20">
          <div className="container mx-auto px-4 text-center">
            <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-2 block">
              Nuestros Tratamientos
            </span>
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-slate-900">
              Soluciones Integrales para tu Sonrisa
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Utilizamos tecnología de vanguardia y materiales de alta calidad para garantizar resultados duraderos y estéticos.
            </p>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="space-y-20">
              {treatments.map((category, idx) => (
                <div key={idx}>
                  <div className="flex items-center gap-4 mb-8">
                    <div className="h-px bg-slate-200 flex-1"></div>
                    <h2 className="text-2xl md:text-3xl font-heading font-bold text-slate-800 text-center px-4">
                      {category.category}
                    </h2>
                    <div className="h-px bg-slate-200 flex-1"></div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {category.items.map((item, itemIdx) => (
                      <div key={itemIdx} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow group">
                        <div className="w-12 h-12 rounded-full bg-blue-50 text-primary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                          <CheckCircle2 className="h-6 w-6" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                        <p className="text-slate-500 mb-4 text-sm leading-relaxed">{item.desc}</p>
                        <div className="pt-4 border-t border-slate-100 flex justify-between items-center">
                          <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                            {item.price}
                          </span>
                          <Link href="/contacto">
                            <span className="text-primary text-sm font-bold cursor-pointer hover:underline">
                              Agendar
                            </span>
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-primary text-white text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-6">¿No encuentras lo que buscas?</h2>
            <p className="text-blue-100 mb-8 max-w-xl mx-auto">
              Ofrecemos muchos otros tratamientos personalizados. Contáctanos para una valoración completa de tu caso.
            </p>
            <Link href="/contacto">
              <Button variant="secondary" size="lg" className="rounded-full px-8">
                Contactar Especialista
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
