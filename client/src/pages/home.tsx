import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/home/Hero";
import { ServicesPreview } from "@/components/home/ServicesPreview";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Star, MessageSquare } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function Home() {
  return (
    <div className="min-h-screen font-sans bg-background">
      <Navbar />
      
      <main>
        <Hero />
        
        <ServicesPreview />

        {/* About / Trust Section */}
        <section className="py-24 bg-slate-50 overflow-hidden">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="relative order-2 lg:order-1">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  <img src="/assets/dentist-patient.jpg" alt="Dentista con paciente" className="w-full h-auto object-cover" />
                </div>
                <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10" />
                <div className="absolute -top-8 -left-8 w-64 h-64 bg-green-500/10 rounded-full blur-3xl -z-10" />
              </div>
              
              <div className="order-1 lg:order-2">
                <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-2 block">
                  Sobre Nosotros
                </span>
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-6">
                  Más que una clínica, somos tu familia dental
                </h2>
                <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                  En Grupo Happy Dental, entendemos que visitar al dentista puede generar ansiedad. Por eso, hemos creado un ambiente donde te sentirás escuchado y cuidado desde el primer momento.
                </p>
                <ul className="space-y-4 mb-8">
                  {[
                    "Equipo certificado y en constante actualización.",
                    "Instalaciones modernas y esterilizadas.",
                    "Trato amable y explicaciones claras.",
                    "Planes de tratamiento a tu medida."
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                        <svg className="w-4 h-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-slate-700 font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/nosotros">
                  <Button variant="outline" className="rounded-full px-8 h-12 border-primary text-primary hover:bg-primary/5">
                    Conoce más de nosotros
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-2 block">
                Testimonios
              </span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900">
                Lo que dicen nuestros pacientes
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: "María González",
                  text: "Excelente servicio, el doctor fue muy amable y me explicó todo el procedimiento. ¡Mi sonrisa quedó increíble!",
                  stars: 5
                },
                {
                  name: "Carlos Ruiz",
                  text: "Tenía mucho miedo al dentista, pero aquí me hicieron sentir muy cómodo. Recomiendo totalmente la clínica.",
                  stars: 5
                },
                {
                  name: "Ana López",
                  text: "Llevo a mis hijos aquí y les encanta. Tienen mucha paciencia con los niños y los precios son justos.",
                  stars: 5
                }
              ].map((testimonial, i) => (
                <Card key={i} className="bg-slate-50 border-none shadow-sm">
                  <CardContent className="pt-6">
                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonial.stars)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-slate-600 mb-6 italic">"{testimonial.text}"</p>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-primary font-bold">
                        {testimonial.name[0]}
                      </div>
                      <div>
                        <p className="font-bold text-slate-900 text-sm">{testimonial.name}</p>
                        <p className="text-xs text-muted-foreground">Paciente verificado</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 bg-slate-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div>
                <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-2 block">
                  Preguntas Frecuentes
                </span>
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-6">
                  Resolvemos tus dudas
                </h2>
                <p className="text-muted-foreground text-lg mb-8">
                  Aquí encontrarás respuestas a las preguntas más comunes de nuestros pacientes. Si tienes otra duda, contáctanos directamente.
                </p>
                <div className="flex gap-4">
                  <Link href="/contacto">
                    <Button className="rounded-full shadow-lg shadow-primary/20">
                      <MessageSquare className="mr-2 h-4 w-4" />
                      Contáctanos por WhatsApp
                    </Button>
                  </Link>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="text-left font-semibold text-slate-900">¿Duelen los tratamientos dentales?</AccordionTrigger>
                    <AccordionContent className="text-slate-600">
                      Utilizamos anestesia moderna y técnicas mínimamente invasivas para asegurar que tu experiencia sea lo más cómoda y libre de dolor posible.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger className="text-left font-semibold text-slate-900">¿Aceptan seguros médicos?</AccordionTrigger>
                    <AccordionContent className="text-slate-600">
                      Sí, trabajamos con varias aseguradoras. Por favor contáctanos con los detalles de tu póliza para verificar tu cobertura antes de tu cita.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger className="text-left font-semibold text-slate-900">¿Cuáles son sus formas de pago?</AccordionTrigger>
                    <AccordionContent className="text-slate-600">
                      Aceptamos efectivo, tarjetas de débito y crédito, y transferencias bancarias. También ofrecemos planes de financiamiento para tratamientos mayores.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-4">
                    <AccordionTrigger className="text-left font-semibold text-slate-900">¿Cada cuánto debo hacerme una limpieza?</AccordionTrigger>
                    <AccordionContent className="text-slate-600">
                      Recomendamos una limpieza dental profesional cada 6 meses para mantener tus dientes y encías saludables y prevenir problemas futuros.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-primary text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 skew-x-12 transform translate-x-20" />
          <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
              ¿Listo para sonreír con confianza?
            </h2>
            <p className="text-blue-100 text-lg md:text-xl max-w-2xl mx-auto mb-10">
              Agenda tu cita hoy mismo y descubre la diferencia de una atención dental de calidad en un ambiente relajado.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contacto">
                <Button size="lg" variant="secondary" className="rounded-full px-8 h-14 text-lg font-bold text-primary bg-white hover:bg-slate-100">
                  Agendar mi Cita
                </Button>
              </Link>
              <a href="https://wa.me/526865149883" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="rounded-full px-8 h-14 text-lg border-white/30 hover:bg-white/10 text-white">
                  Enviar WhatsApp
                </Button>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
