 import { MapPin, Phone, Mail, ArrowUp } from "lucide-react";
 import { companyInfo, services } from "@/lib/data";
 
 export const Footer = () => {
   const scrollToTop = () => {
     window.scrollTo({ top: 0, behavior: "smooth" });
   };
 
   const scrollToSection = (href: string) => {
     const element = document.querySelector(href);
     if (element) {
       element.scrollIntoView({ behavior: "smooth" });
     }
   };
 
   return (
     <footer className="bg-primary text-primary-foreground">
       <div className="container mx-auto px-4 py-16">
         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
           {/* Company Info */}
           <div>
             <div className="flex items-center gap-3 mb-6">
               <div className="w-10 h-10 bg-gold rounded-lg flex items-center justify-center">
                 <span className="text-primary font-serif font-bold text-lg">C</span>
               </div>
               <div>
                 <span className="font-serif font-semibold text-lg block">Construction</span>
                 <span className="text-gold text-xs font-medium tracking-wider">
                   ARVE MONT-BLANC
                 </span>
               </div>
             </div>
             <p className="text-primary-foreground/70 text-sm mb-6">
               {companyInfo.description}
             </p>
             <div className="flex flex-wrap gap-2">
               {companyInfo.certifications.slice(0, 3).map((cert, i) => (
                 <span
                   key={i}
                   className="px-3 py-1 bg-white/10 rounded-full text-xs"
                 >
                   {cert}
                 </span>
               ))}
             </div>
           </div>
 
           {/* Services */}
           <div>
             <h4 className="font-serif font-semibold text-lg mb-6">Nos Services</h4>
             <ul className="space-y-3">
               {services.map((service) => (
                 <li key={service.id}>
                   <a
                     href="#services"
                     onClick={(e) => {
                       e.preventDefault();
                       scrollToSection("#services");
                     }}
                     className="text-primary-foreground/70 hover:text-gold transition-colors text-sm"
                   >
                     {service.title}
                   </a>
                 </li>
               ))}
             </ul>
           </div>
 
           {/* Navigation */}
           <div>
             <h4 className="font-serif font-semibold text-lg mb-6">Navigation</h4>
             <ul className="space-y-3">
               {[
                 { href: "#accueil", label: "Accueil" },
                 { href: "#services", label: "Services" },
                 { href: "#realisations", label: "Réalisations" },
                 { href: "#apropos", label: "À Propos" },
                 { href: "#avis", label: "Avis Clients" },
                 { href: "#contact", label: "Contact" }
               ].map((link) => (
                 <li key={link.href}>
                   <a
                     href={link.href}
                     onClick={(e) => {
                       e.preventDefault();
                       scrollToSection(link.href);
                     }}
                     className="text-primary-foreground/70 hover:text-gold transition-colors text-sm"
                   >
                     {link.label}
                   </a>
                 </li>
               ))}
             </ul>
           </div>
 
           {/* Contact */}
           <div>
             <h4 className="font-serif font-semibold text-lg mb-6">Contact</h4>
             <ul className="space-y-4">
               <li>
                 <a
                   href={`https://maps.google.com/?q=${encodeURIComponent(companyInfo.address.full)}`}
                   target="_blank"
                   rel="noopener noreferrer"
                   className="flex items-start gap-3 text-primary-foreground/70 hover:text-gold transition-colors text-sm"
                 >
                   <MapPin className="w-4 h-4 mt-1 text-gold flex-shrink-0" />
                   <span>{companyInfo.address.full}</span>
                 </a>
               </li>
               <li>
                 <a
                   href={`tel:${companyInfo.contact.phone}`}
                   className="flex items-center gap-3 text-primary-foreground/70 hover:text-gold transition-colors text-sm"
                 >
                   <Phone className="w-4 h-4 text-gold flex-shrink-0" />
                   <span>{companyInfo.contact.phoneDisplay}</span>
                 </a>
               </li>
               <li>
                 <a
                   href={`mailto:${companyInfo.contact.email}`}
                   className="flex items-start gap-3 text-primary-foreground/70 hover:text-gold transition-colors text-sm"
                 >
                   <Mail className="w-4 h-4 mt-1 text-gold flex-shrink-0" />
                   <span className="break-all">{companyInfo.contact.email}</span>
                 </a>
               </li>
             </ul>
             <div className="mt-6 p-4 bg-white/5 rounded-lg">
               <p className="text-sm text-primary-foreground/70">
                 {companyInfo.hours.weekdays}
                 <br />
                 {companyInfo.hours.saturday}
               </p>
             </div>
           </div>
         </div>
       </div>
 
       {/* Bottom Bar */}
       <div className="border-t border-white/10">
         <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
           <p className="text-sm text-primary-foreground/50">
             © {new Date().getFullYear()} {companyInfo.name}. Tous droits réservés.
           </p>
           <button
             onClick={scrollToTop}
             className="flex items-center gap-2 text-primary-foreground/50 hover:text-gold transition-colors text-sm"
           >
             Retour en haut
             <ArrowUp className="w-4 h-4" />
           </button>
         </div>
       </div>
     </footer>
   );
 };