 import { useState, useEffect } from "react";
 import { Menu, X, Phone } from "lucide-react";
 import { Button } from "@/components/ui/button";
 import { companyInfo } from "@/lib/data";
 import { motion, AnimatePresence } from "framer-motion";
 
 const navLinks = [
   { href: "#accueil", label: "Accueil" },
   { href: "#services", label: "Services" },
   { href: "#realisations", label: "Réalisations" },
   { href: "#apropos", label: "À Propos" },
   { href: "#avis", label: "Avis" },
   { href: "#contact", label: "Contact" }
 ];
 
 export const Header = () => {
   const [isScrolled, setIsScrolled] = useState(false);
   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
 
   useEffect(() => {
     const handleScroll = () => {
       setIsScrolled(window.scrollY > 50);
     };
     window.addEventListener("scroll", handleScroll);
     return () => window.removeEventListener("scroll", handleScroll);
   }, []);
 
   const scrollToSection = (href: string) => {
     const element = document.querySelector(href);
     if (element) {
       element.scrollIntoView({ behavior: "smooth" });
     }
     setIsMobileMenuOpen(false);
   };
 
   return (
     <header
       className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
         isScrolled
           ? "bg-primary/95 backdrop-blur-md shadow-lg py-3"
           : "bg-transparent py-5"
       }`}
     >
       <div className="container mx-auto px-4">
         <div className="flex items-center justify-between">
           {/* Logo */}
           <a
             href="#accueil"
             onClick={(e) => {
               e.preventDefault();
               scrollToSection("#accueil");
             }}
             className="flex items-center gap-3"
           >
             <div className="w-10 h-10 bg-gold rounded-lg flex items-center justify-center">
               <span className="text-primary font-serif font-bold text-lg">C</span>
             </div>
             <div className="hidden sm:block">
               <span className="text-primary-foreground font-serif font-semibold text-lg leading-tight block">
                 Construction
               </span>
               <span className="text-gold text-xs font-medium tracking-wider">
                 ARVE MONT-BLANC
               </span>
             </div>
           </a>
 
           {/* Desktop Navigation */}
           <nav className="hidden lg:flex items-center gap-8">
             {navLinks.map((link) => (
               <a
                 key={link.href}
                 href={link.href}
                 onClick={(e) => {
                   e.preventDefault();
                   scrollToSection(link.href);
                 }}
                 className="text-primary-foreground/80 hover:text-gold transition-colors text-sm font-medium"
               >
                 {link.label}
               </a>
             ))}
           </nav>
 
           {/* CTA & Phone */}
           <div className="hidden md:flex items-center gap-4">
             <a
               href={`tel:${companyInfo.contact.phone}`}
               className="flex items-center gap-2 text-primary-foreground/80 hover:text-gold transition-colors"
             >
               <Phone className="w-4 h-4" />
               <span className="text-sm font-medium">{companyInfo.contact.phoneDisplay}</span>
             </a>
             <Button
               onClick={() => scrollToSection("#contact")}
               className="bg-gold hover:bg-gold-light text-primary font-semibold px-6"
             >
               Devis Gratuit
             </Button>
           </div>
 
           {/* Mobile Menu Button */}
           <button
             onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
             className="lg:hidden text-primary-foreground p-2"
             aria-label="Menu"
           >
             {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
           </button>
         </div>
       </div>
 
       {/* Mobile Menu */}
       <AnimatePresence>
         {isMobileMenuOpen && (
           <motion.div
             initial={{ opacity: 0, height: 0 }}
             animate={{ opacity: 1, height: "auto" }}
             exit={{ opacity: 0, height: 0 }}
             className="lg:hidden bg-primary/95 backdrop-blur-md border-t border-primary-foreground/10"
           >
             <nav className="container mx-auto px-4 py-6 flex flex-col gap-4">
               {navLinks.map((link) => (
                 <a
                   key={link.href}
                   href={link.href}
                   onClick={(e) => {
                     e.preventDefault();
                     scrollToSection(link.href);
                   }}
                   className="text-primary-foreground/80 hover:text-gold transition-colors text-base font-medium py-2"
                 >
                   {link.label}
                 </a>
               ))}
               <div className="pt-4 border-t border-primary-foreground/10 flex flex-col gap-3">
                 <a
                   href={`tel:${companyInfo.contact.phone}`}
                   className="flex items-center gap-2 text-primary-foreground/80"
                 >
                   <Phone className="w-4 h-4" />
                   <span>{companyInfo.contact.phoneDisplay}</span>
                 </a>
                 <Button
                   onClick={() => scrollToSection("#contact")}
                   className="bg-gold hover:bg-gold-light text-primary font-semibold w-full"
                 >
                   Devis Gratuit
                 </Button>
               </div>
             </nav>
           </motion.div>
         )}
       </AnimatePresence>
     </header>
   );
 };