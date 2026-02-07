import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50/50 via-white to-green-50/30 pt-16 pb-24 md:pt-24 md:pb-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">
          
          {/* Text Content */}
          <div className="flex flex-col gap-6 lg:gap-8 z-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-white border border-blue-100 rounded-full px-4 py-1.5 w-fit shadow-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-xs font-semibold text-primary tracking-wide uppercase">
                Aceptamos nuevos pacientes
              </span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-slate-900 leading-[1.1]"
            >
              Tu sonrisa ideal comienza <span className="text-primary">aquí</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-muted-foreground leading-relaxed max-w-xl"
            >
              En Grupo Happy Dental, combinamos tecnología moderna con un trato humano para que te sientas seguro y tranquilo. Especialistas en devolverte la confianza al sonreír.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 mt-2"
            >
              <Link href="/contacto">
                <Button size="lg" className="rounded-full px-8 h-12 bg-primary hover:bg-primary/90 text-base shadow-lg shadow-primary/25">
                  Agendar Cita Ahora
                </Button>
              </Link>
              <Link href="/servicios">
                <Button size="lg" variant="outline" className="rounded-full px-8 h-12 text-base border-2 hover:bg-slate-50">
                  Ver Tratamientos
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex items-center gap-6 mt-4 text-sm text-slate-600 font-medium"
            >
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-500" />
                <span>Atención Personalizada</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-500" />
                <span>Tecnología Moderna</span>
              </div>
            </motion.div>
          </div>

          {/* Image Content */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative lg:h-[600px] flex items-center justify-center"
          >
            {/* Background blobs */}
            <div className="absolute top-10 right-10 w-64 h-64 bg-blue-200/40 rounded-full blur-3xl -z-10 animate-pulse" />
            <div className="absolute bottom-10 left-10 w-64 h-64 bg-green-200/40 rounded-full blur-3xl -z-10" />

            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl shadow-blue-900/10 border-4 border-white">
              <img 
                src="/assets/clinic-interior.jpg" 
                alt="Consultorio Grupo Happy Dental" 
                className="w-full h-full object-cover"
              />
              {/* Floating Badge */}
              <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur p-4 rounded-xl shadow-lg border border-white/50 max-w-[200px]">
                <div className="flex -space-x-2 mb-2">
                  {[1,2,3].map(i => (
                    <div key={i} className="w-8 h-8 rounded-full bg-slate-200 border-2 border-white flex items-center justify-center text-[10px] font-bold text-slate-500">
                      U
                    </div>
                  ))}
                  <div className="w-8 h-8 rounded-full bg-primary text-white border-2 border-white flex items-center justify-center text-[10px] font-bold">
                    +1k
                  </div>
                </div>
                <p className="text-xs font-bold text-slate-800">Pacientes Felices</p>
                <div className="flex gap-1 mt-1">
                  {[1,2,3,4,5].map(i => (
                    <svg key={i} className="w-3 h-3 text-yellow-400 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
