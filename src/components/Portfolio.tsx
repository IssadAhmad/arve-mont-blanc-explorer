 import { useState } from "react";
 import { motion, AnimatePresence } from "framer-motion";
 import { MapPin, Calendar, X, ExternalLink } from "lucide-react";
 import { projects, services } from "@/lib/data";
 import { Button } from "@/components/ui/button";
 import {
   Dialog,
   DialogContent,
   DialogHeader,
   DialogTitle,
 } from "@/components/ui/dialog";
 
 type Project = typeof projects[0];
 
 const categories = [
   { id: "all", label: "Tous" },
   ...services.slice(0, 4).map((s) => ({ id: s.id, label: s.title.split(" ")[0] }))
 ];
 
 export const Portfolio = () => {
   const [activeCategory, setActiveCategory] = useState("all");
   const [selectedProject, setSelectedProject] = useState<Project | null>(null);
 
   const filteredProjects =
     activeCategory === "all"
       ? projects
       : projects.filter((p) => p.category === activeCategory);
 
   return (
     <section id="realisations" className="py-24 bg-background">
       <div className="container mx-auto px-4">
         {/* Section Header */}
         <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
           className="text-center mb-12"
         >
           <span className="inline-block px-4 py-2 bg-gold/10 text-gold rounded-full text-sm font-medium mb-4">
             Notre Portfolio
           </span>
           <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary mb-4">
             Nos Réalisations
           </h2>
           <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
             Découvrez nos projets phares qui témoignent de notre savoir-faire et de notre engagement qualité
           </p>
         </motion.div>
 
         {/* Category Filters */}
         <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6, delay: 0.2 }}
           className="flex flex-wrap justify-center gap-3 mb-12"
         >
           {categories.map((cat) => (
             <button
               key={cat.id}
               onClick={() => setActiveCategory(cat.id)}
               className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                 activeCategory === cat.id
                   ? "bg-gold text-primary"
                   : "bg-secondary text-muted-foreground hover:bg-gold/10 hover:text-gold"
               }`}
             >
               {cat.label}
             </button>
           ))}
         </motion.div>
 
         {/* Projects Grid */}
         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
           <AnimatePresence mode="wait">
             {filteredProjects.map((project, index) => (
               <motion.div
                 key={project.id}
                 layout
                 initial={{ opacity: 0, scale: 0.9 }}
                 animate={{ opacity: 1, scale: 1 }}
                 exit={{ opacity: 0, scale: 0.9 }}
                 transition={{ duration: 0.4, delay: index * 0.1 }}
                 className="group cursor-pointer"
                 onClick={() => setSelectedProject(project)}
               >
                 <div className="relative overflow-hidden rounded-2xl shadow-luxury">
                   <img
                     src={project.image}
                     alt={project.title}
                     className="w-full aspect-[4/3] object-cover group-hover:scale-110 transition-transform duration-500"
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                   <div className="absolute bottom-0 left-0 right-0 p-6">
                     <h3 className="text-xl font-serif font-semibold text-white mb-2">
                       {project.title}
                     </h3>
                     <div className="flex items-center gap-4 text-white/70 text-sm">
                       <span className="flex items-center gap-1">
                         <MapPin className="w-4 h-4" />
                         {project.location}
                       </span>
                       <span className="flex items-center gap-1">
                         <Calendar className="w-4 h-4" />
                         {project.year}
                       </span>
                     </div>
                   </div>
                   <div className="absolute top-4 right-4 w-10 h-10 bg-gold rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                     <ExternalLink className="w-5 h-5 text-primary" />
                   </div>
                 </div>
               </motion.div>
             ))}
           </AnimatePresence>
         </div>
       </div>
 
       {/* Project Modal */}
       <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
         <DialogContent className="max-w-3xl p-0 overflow-hidden">
           {selectedProject && (
             <>
               <div className="relative">
                 <img
                   src={selectedProject.image}
                   alt={selectedProject.title}
                   className="w-full aspect-video object-cover"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent" />
               </div>
               <div className="p-6">
                 <DialogHeader>
                   <DialogTitle className="text-2xl font-serif font-bold text-primary">
                     {selectedProject.title}
                   </DialogTitle>
                 </DialogHeader>
                 <div className="flex items-center gap-4 text-muted-foreground text-sm mt-2 mb-4">
                   <span className="flex items-center gap-1">
                     <MapPin className="w-4 h-4 text-gold" />
                     {selectedProject.location}
                   </span>
                   <span className="flex items-center gap-1">
                     <Calendar className="w-4 h-4 text-gold" />
                     {selectedProject.year}
                   </span>
                 </div>
                 <p className="text-foreground mb-4">{selectedProject.description}</p>
                 <p className="text-sm text-muted-foreground bg-secondary px-4 py-3 rounded-lg">
                   {selectedProject.details}
                 </p>
                 <div className="mt-6">
                   <Button
                     onClick={() => {
                       setSelectedProject(null);
                       document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
                     }}
                     className="bg-gold hover:bg-gold-light text-primary font-semibold"
                   >
                     Demander un projet similaire
                   </Button>
                 </div>
               </div>
             </>
           )}
         </DialogContent>
       </Dialog>
     </section>
   );
 };