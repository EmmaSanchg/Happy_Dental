import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { useForm } from "react-hook-form";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const { toast } = useToast();
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
    toast({
      title: "¡Mensaje enviado!",
      description: "Nos pondremos en contacto contigo lo antes posible para confirmar tu cita.",
    });
    reset();
  };

  return (
    <div className="min-h-screen font-sans bg-slate-50">
      <Navbar />
      
      <main>
        {/* Header */}
        <section className="bg-primary py-20 text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">Contacto y Citas</h1>
            <p className="text-blue-100 text-lg max-w-2xl mx-auto">
              Estamos aquí para ayudarte. Visítanos, llámanos o envíanos un mensaje para agendar tu consulta.
            </p>
          </div>
        </section>

        <section className="py-20 -mt-10">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              
              {/* Info Cards */}
              <div className="lg:col-span-1 space-y-6">
                <Card className="border-none shadow-lg">
                  <CardContent className="p-8">
                    <h3 className="font-bold text-xl mb-6 text-slate-800">Información de Contacto</h3>
                    
                    <div className="space-y-6">
                      <div className="flex items-start gap-4">
                        <div className="bg-blue-50 p-3 rounded-xl text-primary">
                          <MapPin className="h-6 w-6" />
                        </div>
                        <div>
                          <p className="font-semibold text-slate-900">Ubicación</p>
                          <p className="text-slate-600 text-sm">Santa Isabel, Los Milagros, 21138 Mexicali, Baja California</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="bg-green-50 p-3 rounded-xl text-green-600">
                          <Phone className="h-6 w-6" />
                        </div>
                        <div>
                          <p className="font-semibold text-slate-900">Teléfono</p>
                          <p className="text-slate-600 text-sm">+52 686 514 9883</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="bg-purple-50 p-3 rounded-xl text-purple-600">
                          <Mail className="h-6 w-6" />
                        </div>
                        <div>
                          <p className="font-semibold text-slate-900">Email</p>
                          <p className="text-slate-600 text-sm">GrupoHappyDental@Milagros.com</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="bg-orange-50 p-3 rounded-xl text-orange-600">
                          <Clock className="h-6 w-6" />
                        </div>
                        <div>
                          <p className="font-semibold text-slate-900">Horarios</p>
                          <div className="text-slate-600 text-sm space-y-1">
                            <p>Lun-Vie: 9am-1pm / 3pm-7pm</p>
                            <p className="text-red-500">Sab-Dom: Cerrado</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2">
                <Card className="border-none shadow-lg h-full">
                  <CardContent className="p-8 md:p-10">
                    <h3 className="font-bold text-2xl mb-2 text-slate-800">Envíanos un mensaje</h3>
                    <p className="text-slate-500 mb-8">Completa el formulario y te contactaremos para confirmar tu cita.</p>
                    
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="name">Nombre Completo</Label>
                          <Input id="name" placeholder="Juan Pérez" {...register("name", { required: true })} className="h-12 bg-slate-50 border-slate-200" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone">Teléfono</Label>
                          <Input id="phone" placeholder="(686) 123 4567" {...register("phone", { required: true })} className="h-12 bg-slate-50 border-slate-200" />
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="email">Correo Electrónico</Label>
                          <Input id="email" type="email" placeholder="juan@ejemplo.com" {...register("email")} className="h-12 bg-slate-50 border-slate-200" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="service">Servicio de Interés</Label>
                          <Select>
                            <SelectTrigger className="h-12 bg-slate-50 border-slate-200">
                              <SelectValue placeholder="Selecciona un servicio" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="general">Consulta General</SelectItem>
                              <SelectItem value="limpieza">Limpieza Dental</SelectItem>
                              <SelectItem value="ortodoncia">Ortodoncia</SelectItem>
                              <SelectItem value="blanqueamiento">Blanqueamiento</SelectItem>
                              <SelectItem value="dolor">Dolor / Urgencia</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Mensaje o Dudas</Label>
                        <Textarea id="message" placeholder="¿Tienes alguna preferencia de horario o síntoma específico?" className="min-h-[120px] bg-slate-50 border-slate-200" {...register("message")} />
                      </div>

                      <Button type="submit" size="lg" className="w-full md:w-auto px-8 h-12 rounded-full shadow-lg shadow-primary/20">
                        Enviar Solicitud
                        <Send className="ml-2 h-4 w-4" />
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

            </div>
          </div>
        </section>

        {/* Map Placeholder */}
        <section className="h-[400px] w-full bg-slate-200 relative">
          <div className="absolute inset-0 flex items-center justify-center bg-slate-100">
             <p className="text-slate-400 font-medium">Mapa de Google Maps Integrado Aquí</p>
             {/* Note: In a real app, embed the iframe here */}
             <iframe 
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3359.865328841443!2d-115.49504832446698!3d32.63665397371946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d7700000000001%3A0x0!2zMzLCsDM4JzEyLjAiTiAxMTXCsDI5JzMzLjEiVw!5e0!3m2!1sen!2smx!4v1700000000000!5m2!1sen!2smx" 
               width="100%" 
               height="100%" 
               style={{border:0}} 
               allowFullScreen 
               loading="lazy" 
               referrerPolicy="no-referrer-when-downgrade"
               className="w-full h-full grayscale-[50%] hover:grayscale-0 transition-all duration-500"
             ></iframe>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
