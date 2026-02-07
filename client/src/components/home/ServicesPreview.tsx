import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Sparkles, Activity, Smile, Heart, ShieldCheck, PenTool } from "lucide-react";

export function ServicesPreview() {
  const services = [
    {
      title: "Limpieza Dental",
      description: "Elimina la placa y el sarro para prevenir enfermedades y mantener tus dientes brillantes.",
      icon: Sparkles,
      color: "text-blue-500",
      bg: "bg-blue-50"
    },
    {
      title: "Ortodoncia",
      description: "Alineación perfecta de tus dientes con brackets tradicionales o alineadores invisibles.",
      icon: Smile,
      color: "text-green-500",
      bg: "bg-green-50"
    },
    {
      title: "Blanqueamiento",
      description: "Aclara el tono de tus dientes de forma segura para una sonrisa radiante.",
      icon: Heart,
      color: "text-rose-500",
      bg: "bg-rose-50"
    },
    {
      title: "Endodoncia",
      description: "Tratamiento de conductos para salvar dientes dañados y aliviar el dolor.",
      icon: Activity,
      color: "text-amber-500",
      bg: "bg-amber-50"
    },
    {
      title: "Implantes",
      description: "Recupera piezas dentales perdidas con soluciones permanentes y naturales.",
      icon: ShieldCheck,
      color: "text-indigo-500",
      bg: "bg-indigo-50"
    },
    {
      title: "Extracciones",
      description: "Procedimientos seguros y sin dolor cuando un diente no puede ser salvado.",
      icon: PenTool,
      color: "text-slate-500",
      bg: "bg-slate-50"
    }
  ];

  return (
    <section className="py-24 bg-white" id="servicios">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-2 block">
            Nuestros Tratamientos
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-4">
            Cuidado integral para toda tu familia
          </h2>
          <p className="text-muted-foreground text-lg">
            Ofrecemos una amplia gama de servicios dentales utilizando las últimas técnicas para garantizar resultados duraderos y sin dolor.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group border-none shadow-lg shadow-slate-200/50 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300 hover:-translate-y-1 overflow-hidden">
              <CardHeader>
                <div className={`w-14 h-14 rounded-2xl ${service.bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className={`h-7 w-7 ${service.color}`} />
                </div>
                <CardTitle className="text-xl font-bold text-slate-900">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
