 import { useState, useEffect } from "react";
 import { Phone } from "lucide-react";
 import { motion, AnimatePresence } from "framer-motion";
 import { companyInfo } from "@/lib/data";
 
 export const FloatingCTA = () => {
   const [isVisible, setIsVisible] = useState(false);
 
   useEffect(() => {
     const handleScroll = () => {
       setIsVisible(window.scrollY > 500);
     };
     window.addEventListener("scroll", handleScroll);
     return () => window.removeEventListener("scroll", handleScroll);
   }, []);
 
   return (
     <AnimatePresence>
       {isVisible && (
         <motion.a
           initial={{ opacity: 0, scale: 0.8 }}
           animate={{ opacity: 1, scale: 1 }}
           exit={{ opacity: 0, scale: 0.8 }}
           href={`tel:${companyInfo.contact.phone}`}
           className="fixed bottom-6 right-6 z-50 md:hidden flex items-center justify-center w-14 h-14 bg-gold rounded-full shadow-gold hover:bg-gold-light transition-colors"
           aria-label="Appeler"
         >
           <Phone className="w-6 h-6 text-primary" />
         </motion.a>
       )}
     </AnimatePresence>
   );
 };