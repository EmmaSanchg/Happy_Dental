import { Link } from "wouter";
import { Facebook, MapPin, Phone, Mail, Clock } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-50 border-t border-border/40 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="bg-primary/10 p-2 rounded-xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6 text-primary"
                >
                  <path d="M12 2C7.029 2 3 6.029 3 11c0 4.971 4.029 9 9 9 4.971 0 9-4.029 9-9 0-4.971-4.029-9-9-9z" />
                  <path d="M12 2v18" />
                  <path d="M2 12h20" />
                </svg>
              </div>
              <div>
                <span className="font-heading font-bold text-lg leading-none text-primary block">
                  Happy Dental
                </span>
                <span className="text-xs text-muted-foreground font-medium tracking-wider uppercase">
                  Milagros
                </span>
              </div>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Cuidamos tu sonrisa con la mejor tecnología y un equipo de expertos dedicados a tu salud dental.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/HDMilagros/"
                target="_blank"
                rel="noreferrer"
                className="bg-white p-2 rounded-full border border-border shadow-sm hover:text-primary hover:border-primary transition-all"
              >
                <Facebook className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-heading font-semibold text-foreground mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/nosotros" className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                  Sobre Nosotros
                </Link>
              </li>
              <li>
                <Link href="/servicios" className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                  Servicios
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                  Agendar Cita
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading font-semibold text-foreground mb-4">Contacto</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span className="text-muted-foreground">
                  Santa Isabel, Los Milagros, 21138 Mexicali, Baja California
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary shrink-0" />
                <a href="tel:+526865149883" className="text-muted-foreground hover:text-primary">
                  +52 686 514 9883
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary shrink-0" />
                <a href="mailto:GrupoHappyDental@Milagros.com" className="text-muted-foreground hover:text-primary">
                  GrupoHappyDental@Milagros.com
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="font-heading font-semibold text-foreground mb-4">Horarios</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex justify-between text-muted-foreground">
                <span>Lunes - Viernes</span>
                <span className="font-medium text-foreground">9 AM - 1 PM / 3 - 7 PM</span>
              </li>
              <li className="flex justify-between text-muted-foreground">
                <span>Sábado</span>
                <span className="text-destructive font-medium">Cerrado</span>
              </li>
              <li className="flex justify-between text-muted-foreground">
                <span>Domingo</span>
                <span className="text-destructive font-medium">Cerrado</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border/40 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground text-center md:text-left">
            © {new Date().getFullYear()} Grupo Happy Dental. Todos los derechos reservados.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground">Aviso de Privacidad</a>
            <a href="#" className="hover:text-foreground">Términos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
