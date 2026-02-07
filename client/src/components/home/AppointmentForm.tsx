import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";
import { CalendarIcon, Clock, Smile } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

export function AppointmentForm() {
  const [date, setDate] = useState<Date>();
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Solicitud enviada",
      description: "Nos comunicaremos contigo para confirmar tu cita.",
    });
  };

  return (
    <Card className="border-none shadow-2xl shadow-primary/10 bg-white/80 backdrop-blur">
      <CardContent className="p-6 md:p-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="bg-primary p-2 rounded-lg">
            <Smile className="h-5 w-5 text-primary-foreground" />
          </div>
          <h3 className="font-heading font-bold text-xl text-slate-900">Agendar Cita</h3>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Nombre</Label>
              <Input id="name" placeholder="Tu nombre" className="bg-white border-slate-200" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Teléfono / WhatsApp</Label>
              <Input id="phone" placeholder="686 000 0000" className="bg-white border-slate-200" required />
            </div>
          </div>

          <div className="space-y-2">
            <Label>Servicio</Label>
            <Select>
              <SelectTrigger className="bg-white border-slate-200">
                <SelectValue placeholder="Selecciona un tratamiento" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="limpieza">Limpieza Dental</SelectItem>
                <SelectItem value="ortodoncia">Ortodoncia</SelectItem>
                <SelectItem value="blanqueamiento">Blanqueamiento</SelectItem>
                <SelectItem value="consulta">Consulta General</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2 flex flex-col">
              <Label>Fecha preferida</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant={"outline"}
                    className={cn(
                      "w-full justify-start text-left font-normal bg-white border-slate-200 h-10",
                      !date && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? format(date, "PPP") : <span>Seleccionar fecha</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>
            <div className="space-y-2">
              <Label>Horario preferido</Label>
              <div className="relative">
                <Clock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Select>
                  <SelectTrigger className="pl-10 bg-white border-slate-200 h-10">
                    <SelectValue placeholder="Seleccionar" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="morning">Mañana (9am - 1pm)</SelectItem>
                    <SelectItem value="afternoon">Tarde (3pm - 7pm)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold h-12 rounded-xl mt-4 shadow-lg shadow-primary/20">
            Confirmar Solicitud
          </Button>
          
          <p className="text-[10px] text-center text-muted-foreground mt-2">
            * Te contactaremos vía WhatsApp para confirmar disponibilidad.
          </p>
        </form>
      </CardContent>
    </Card>
  );
}
