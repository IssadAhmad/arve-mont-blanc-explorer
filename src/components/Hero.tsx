 import { motion } from "framer-motion";
 import { ChevronDown, Phone, FileText } from "lucide-react";
 import { Button } from "@/components/ui/button";
 import { companyInfo, stats } from "@/lib/data";
 import { useEffect, useState } from "react";
 
 const CountUp = ({ end, suffix = "", duration = 2 }: { end: number; suffix?: string; duration?: number }) => {
   const [count, setCount] = useState(0);
 
   useEffect(() => {
     let start = 0;
     const increment = end / (duration * 60);
     const timer = setInterval(() => {
       start += increment;
       if (start >= end) {
         setCount(end);
         clearInterval(timer);
       } else {
         setCount(Math.floor(start));
       }
     }, 1000 / 60);
     return () => clearInterval(timer);
   }, [end, duration]);
 
   return (
     <span>
       {count}
       {suffix}
     </span>
   );
 };
 
 export const Hero = () => {
   const scrollToSection = (href: string) => {
     const element = document.querySelector(href);
     if (element) {
       element.scrollIntoView({ behavior: "smooth" });
     }
   };
 
   return (
     <section
       id="accueil"
       className="relative min-h-screen flex items-center justify-center overflow-hidden"
     >
       {/* Background Image with Overlay */}
       <div className="absolute inset-0">
         <img
           src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&h=1080&fit=crop"
           alt="Mont-Blanc"
           className="w-full h-full object-cover"
         />
         <div className="absolute inset-0 bg-gradient-to-b from-navy/80 via-navy/60 to-navy/90" />
       </div>
 
       {/* Content */}
       <div className="relative z-10 container mx-auto px-4 pt-20">
         <div className="max-w-4xl mx-auto text-center">
           <motion.div
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8 }}
           >
             <span className="inline-block px-4 py-2 bg-gold/20 border border-gold/30 rounded-full text-gold text-sm font-medium mb-6">
               Depuis {companyInfo.founded} • {companyInfo.zone}
             </span>
           </motion.div>
 
           <motion.h1
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8, delay: 0.2 }}
             className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 leading-tight"
           >
             Construction
             <span className="block text-gold">Arve Mont-Blanc</span>
           </motion.h1>
 
           <motion.p
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8, delay: 0.4 }}
             className="text-xl md:text-2xl text-white/80 mb-10 font-light"
           >
             {companyInfo.tagline}
           </motion.p>
 
           <motion.div
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8, delay: 0.6 }}
             className="flex flex-col sm:flex-row items-center justify-center gap-4"
           >
             <Button
               onClick={() => scrollToSection("#contact")}
               size="lg"
               className="bg-gold hover:bg-gold-light text-primary font-semibold px-8 py-6 text-lg shadow-gold"
             >
               <FileText className="w-5 h-5 mr-2" />
               Demander un Devis Gratuit
             </Button>
             <Button
               asChild
               variant="outline"
               size="lg"
               className="border-white/30 text-white hover:bg-white/10 px-8 py-6 text-lg"
             >
               <a href={`tel:${companyInfo.contact.phone}`}>
                 <Phone className="w-5 h-5 mr-2" />
                 {companyInfo.contact.phoneDisplay}
               </a>
             </Button>
           </motion.div>
         </div>
 
         {/* Stats */}
         <motion.div
           initial={{ opacity: 0, y: 50 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, delay: 0.8 }}
           className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
         >
           {stats.map((stat, index) => (
             <div
               key={index}
               className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10"
             >
               <div className="text-3xl md:text-4xl font-serif font-bold text-gold mb-2">
                 <CountUp end={stat.value} suffix={stat.suffix} />
               </div>
               <div className="text-white/70 text-sm">{stat.label}</div>
             </div>
           ))}
         </motion.div>
       </div>
 
       {/* Scroll Indicator */}
       <motion.div
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         transition={{ duration: 1, delay: 1.2 }}
         className="absolute bottom-8 left-1/2 -translate-x-1/2"
       >
         <button
           onClick={() => scrollToSection("#services")}
           className="flex flex-col items-center text-white/60 hover:text-gold transition-colors"
         >
           <span className="text-xs mb-2">Découvrir</span>
           <ChevronDown className="w-6 h-6 animate-bounce" />
         </button>
       </motion.div>
     </section>
   );
 };