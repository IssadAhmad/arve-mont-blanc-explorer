 import { motion } from "framer-motion";
 import { Shield, Award, Users, MapPin, CheckCircle } from "lucide-react";
 import { companyInfo, values } from "@/lib/data";
 
 const highlights = [
   { icon: Shield, label: "Garantie Décennale" },
   { icon: Award, label: "Certifié HQE" },
   { icon: Users, label: `${companyInfo.employees}+ Experts` },
   { icon: MapPin, label: "100% Local" }
 ];
 
 export const About = () => {
   return (
     <section id="apropos" className="py-24 bg-beige">
       <div className="container mx-auto px-4">
         <div className="grid lg:grid-cols-2 gap-16 items-center">
           {/* Left Column - Image & Highlights */}
           <motion.div
             initial={{ opacity: 0, x: -30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6 }}
             className="relative"
           >
             <div className="relative rounded-2xl overflow-hidden shadow-luxury">
               <img
                 src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=600&fit=crop"
                 alt="Équipe Construction Arve Mont-Blanc"
                 className="w-full aspect-[4/3] object-cover"
               />
               <div className="absolute inset-0 bg-gradient-to-tr from-navy/40 to-transparent" />
             </div>
 
             {/* Floating Card */}
             <div className="absolute -bottom-8 -right-8 bg-card p-6 rounded-2xl shadow-luxury border border-border max-w-xs hidden md:block">
               <div className="flex items-center gap-4 mb-4">
                 <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center">
                   <Award className="w-6 h-6 text-gold" />
                 </div>
                 <div>
                   <div className="font-serif font-bold text-2xl text-primary">25+</div>
                   <div className="text-sm text-muted-foreground">Années d'expérience</div>
                 </div>
               </div>
               <p className="text-sm text-muted-foreground">
                 Une expertise reconnue dans la construction alpine depuis {companyInfo.founded}
               </p>
             </div>
           </motion.div>
 
           {/* Right Column - Content */}
           <motion.div
             initial={{ opacity: 0, x: 30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6 }}
           >
             <span className="inline-block px-4 py-2 bg-gold/10 text-gold rounded-full text-sm font-medium mb-4">
               À Propos de Nous
             </span>
             <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary mb-6 leading-tight">
               Bâtisseurs de confiance depuis {new Date().getFullYear() - companyInfo.founded} ans
             </h2>
             <p className="text-muted-foreground text-lg mb-6">
               Fondée en {companyInfo.founded} par des artisans locaux passionnés, Construction Arve Mont-Blanc 
               est devenue le leader de la construction durable dans la vallée de l'Arve et la région du Mont-Blanc.
             </p>
             <p className="text-muted-foreground mb-8">
               Notre équipe de {companyInfo.employees} professionnels qualifiés met son expertise au service 
               de vos projets, qu'il s'agisse de construction neuve, de rénovation ou d'aménagement.
               Nous maîtrisons parfaitement les contraintes du terrain montagnard et nous engageons 
               pour une construction respectueuse de l'environnement alpin.
             </p>
 
             {/* Highlights Grid */}
             <div className="grid grid-cols-2 gap-4 mb-8">
               {highlights.map((item, index) => (
                 <div
                   key={index}
                   className="flex items-center gap-3 p-4 bg-card rounded-xl border border-border"
                 >
                   <div className="w-10 h-10 bg-gold/10 rounded-lg flex items-center justify-center flex-shrink-0">
                     <item.icon className="w-5 h-5 text-gold" />
                   </div>
                   <span className="font-medium text-primary text-sm">{item.label}</span>
                 </div>
               ))}
             </div>
 
             {/* Certifications */}
             <div className="p-6 bg-primary rounded-xl">
               <h4 className="font-serif font-semibold text-primary-foreground mb-4">
                 Nos Certifications
               </h4>
               <div className="flex flex-wrap gap-3">
                 {companyInfo.certifications.map((cert, index) => (
                   <span
                     key={index}
                     className="flex items-center gap-2 px-3 py-1.5 bg-white/10 rounded-full text-sm text-primary-foreground"
                   >
                     <CheckCircle className="w-4 h-4 text-gold" />
                     {cert}
                   </span>
                 ))}
               </div>
             </div>
           </motion.div>
         </div>
 
         {/* Values Section */}
         <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
           className="mt-24"
         >
           <h3 className="text-2xl font-serif font-bold text-primary text-center mb-12">
             Nos Valeurs
           </h3>
           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
             {values.map((value, index) => (
               <motion.div
                 key={index}
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.4, delay: index * 0.1 }}
                 className="text-center p-6 bg-card rounded-xl border border-border"
               >
                 <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                   <span className="text-gold font-serif font-bold text-xl">{index + 1}</span>
                 </div>
                 <h4 className="font-serif font-semibold text-primary mb-2">{value.title}</h4>
                 <p className="text-sm text-muted-foreground">{value.description}</p>
               </motion.div>
             ))}
           </div>
         </motion.div>
       </div>
     </section>
   );
 };