 import { motion } from "framer-motion";
 import { Star, Quote } from "lucide-react";
 import { testimonials } from "@/lib/data";
 
 export const Testimonials = () => {
   return (
     <section id="avis" className="py-24 bg-background">
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
             Témoignages
           </span>
           <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary mb-4">
             Ce que disent nos clients
           </h2>
           <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
             La satisfaction de nos clients est notre meilleure récompense
           </p>
         </motion.div>
 
         {/* Testimonials Grid */}
         <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
           {testimonials.map((testimonial, index) => (
             <motion.div
               key={testimonial.id}
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.6, delay: index * 0.1 }}
               className="bg-card p-8 rounded-2xl shadow-luxury border border-border relative"
             >
               {/* Quote Icon */}
               <div className="absolute -top-4 -left-4 w-10 h-10 bg-gold rounded-full flex items-center justify-center">
                 <Quote className="w-5 h-5 text-primary" />
               </div>
 
               {/* Rating */}
               <div className="flex gap-1 mb-4">
                 {[...Array(testimonial.rating)].map((_, i) => (
                   <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                 ))}
               </div>
 
               {/* Content */}
               <p className="text-foreground mb-6 leading-relaxed">
                 "{testimonial.content}"
               </p>
 
               {/* Author */}
               <div className="flex items-center gap-4">
                 <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                   <span className="text-primary-foreground font-semibold">
                     {testimonial.avatar}
                   </span>
                 </div>
                 <div>
                   <div className="font-semibold text-primary">{testimonial.name}</div>
                   <div className="text-sm text-muted-foreground">
                     {testimonial.role} • {testimonial.location}
                   </div>
                 </div>
               </div>
             </motion.div>
           ))}
         </div>
 
         {/* Trust Indicators */}
         <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6, delay: 0.4 }}
           className="mt-16 text-center"
         >
           <div className="inline-flex items-center gap-8 p-6 bg-beige rounded-2xl">
             <div className="text-center">
               <div className="flex justify-center gap-1 mb-2">
                 {[...Array(5)].map((_, i) => (
                   <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                 ))}
               </div>
               <div className="text-sm text-muted-foreground">Note moyenne 5/5</div>
             </div>
             <div className="w-px h-12 bg-border" />
             <div className="text-center">
               <div className="text-2xl font-serif font-bold text-primary">98%</div>
               <div className="text-sm text-muted-foreground">Clients satisfaits</div>
             </div>
             <div className="w-px h-12 bg-border hidden sm:block" />
             <div className="text-center hidden sm:block">
               <div className="text-2xl font-serif font-bold text-primary">500+</div>
               <div className="text-sm text-muted-foreground">Projets réalisés</div>
             </div>
           </div>
         </motion.div>
       </div>
     </section>
   );
 };