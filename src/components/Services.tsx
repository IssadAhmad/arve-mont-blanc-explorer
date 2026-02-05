 import { motion } from "framer-motion";
 import { Home, Hammer, Building2, Construction, Leaf, TreePine, ArrowRight } from "lucide-react";
 import { services } from "@/lib/data";
 import { Button } from "@/components/ui/button";
 
 const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
   Home,
   Hammer,
   Building2,
   Construction,
   Leaf,
   TreePine
 };
 
 export const Services = () => {
   const scrollToContact = () => {
     const element = document.querySelector("#contact");
     if (element) {
       element.scrollIntoView({ behavior: "smooth" });
     }
   };
 
   return (
     <section id="services" className="py-24 bg-beige">
       <div className="container mx-auto px-4">
         {/* Section Header */}
         <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
           className="text-center mb-16"
         >
           <span className="inline-block px-4 py-2 bg-gold/10 text-gold rounded-full text-sm font-medium mb-4">
             Nos Expertises
           </span>
           <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary mb-4">
             Nos Services
           </h2>
           <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
             Une gamme complète de services pour tous vos projets de construction et de rénovation en Haute-Savoie
           </p>
         </motion.div>
 
         {/* Services Grid */}
         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
           {services.map((service, index) => {
             const IconComponent = iconMap[service.icon];
             return (
               <motion.div
                 key={service.id}
                 initial={{ opacity: 0, y: 30 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.6, delay: index * 0.1 }}
                 className="group bg-card rounded-2xl p-8 shadow-luxury hover:shadow-2xl transition-all duration-300 border border-border hover:border-gold/30"
               >
                 <div className="w-14 h-14 bg-gold/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-gold/20 transition-colors">
                   {IconComponent && (
                     <IconComponent className="w-7 h-7 text-gold" />
                   )}
                 </div>
                 <h3 className="text-xl font-serif font-semibold text-primary mb-3">
                   {service.title}
                 </h3>
                 <p className="text-muted-foreground mb-4">{service.shortDesc}</p>
                 <ul className="space-y-2 mb-6">
                   {service.features.slice(0, 3).map((feature, i) => (
                     <li key={i} className="flex items-center text-sm text-muted-foreground">
                       <span className="w-1.5 h-1.5 bg-gold rounded-full mr-3" />
                       {feature}
                     </li>
                   ))}
                 </ul>
                 <Button
                   variant="ghost"
                   onClick={scrollToContact}
                   className="text-gold hover:text-gold hover:bg-gold/10 p-0 h-auto font-medium group/btn"
                 >
                   Demander un devis
                   <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                 </Button>
               </motion.div>
             );
           })}
         </div>
       </div>
     </section>
   );
 };