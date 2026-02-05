 import { useState } from "react";
 import { motion } from "framer-motion";
 import { MapPin, Phone, Mail, Clock, Send, CheckCircle, FileText } from "lucide-react";
 import { Button } from "@/components/ui/button";
 import { Input } from "@/components/ui/input";
 import { Textarea } from "@/components/ui/textarea";
 import { Label } from "@/components/ui/label";
 import {
   Select,
   SelectContent,
   SelectItem,
   SelectTrigger,
   SelectValue,
 } from "@/components/ui/select";
 import { companyInfo, services } from "@/lib/data";
 import { useToast } from "@/hooks/use-toast";
 
 const benefits = [
   "Étude gratuite de votre projet",
   "Devis détaillé sous 48h",
   "Accompagnement personnalisé",
   "Respect des normes et délais"
 ];
 
 export const Contact = () => {
   const { toast } = useToast();
   const [isSubmitting, setIsSubmitting] = useState(false);
   const [formData, setFormData] = useState({
     name: "",
     email: "",
     phone: "",
     projectType: "",
     message: "",
     budget: ""
   });
 
   const handleSubmit = async (e: React.FormEvent) => {
     e.preventDefault();
     setIsSubmitting(true);
 
     // Simulate form submission
     await new Promise((resolve) => setTimeout(resolve, 1500));
 
     toast({
       title: "Demande envoyée avec succès !",
       description: "Nous vous recontacterons sous 48h.",
     });
 
     setFormData({
       name: "",
       email: "",
       phone: "",
       projectType: "",
       message: "",
       budget: ""
     });
     setIsSubmitting(false);
   };
 
   return (
     <section id="contact" className="py-24 bg-beige">
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
             Contactez-nous
           </span>
           <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary mb-4">
             Demandez votre devis gratuit
           </h2>
           <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
             Notre équipe vous accompagne dans tous vos projets de construction en Haute-Savoie
           </p>
         </motion.div>
 
         <div className="grid lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
           {/* Contact Form */}
           <motion.div
             initial={{ opacity: 0, x: -30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6 }}
             className="lg:col-span-3"
           >
             <form onSubmit={handleSubmit} className="bg-card p-8 rounded-2xl shadow-luxury border border-border">
               <div className="grid md:grid-cols-2 gap-6">
                 <div className="space-y-2">
                   <Label htmlFor="name">Nom complet *</Label>
                   <Input
                     id="name"
                     value={formData.name}
                     onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                     placeholder="Jean Dupont"
                     required
                     className="bg-background"
                   />
                 </div>
                 <div className="space-y-2">
                   <Label htmlFor="email">Email *</Label>
                   <Input
                     id="email"
                     type="email"
                     value={formData.email}
                     onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                     placeholder="jean@exemple.fr"
                     required
                     className="bg-background"
                   />
                 </div>
                 <div className="space-y-2">
                   <Label htmlFor="phone">Téléphone *</Label>
                   <Input
                     id="phone"
                     type="tel"
                     value={formData.phone}
                     onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                     placeholder="06 12 34 56 78"
                     required
                     className="bg-background"
                   />
                 </div>
                 <div className="space-y-2">
                   <Label htmlFor="projectType">Type de projet *</Label>
                   <Select
                     value={formData.projectType}
                     onValueChange={(value) => setFormData({ ...formData, projectType: value })}
                     required
                   >
                     <SelectTrigger className="bg-background">
                       <SelectValue placeholder="Sélectionnez..." />
                     </SelectTrigger>
                     <SelectContent>
                       {services.map((service) => (
                         <SelectItem key={service.id} value={service.id}>
                           {service.title}
                         </SelectItem>
                       ))}
                     </SelectContent>
                   </Select>
                 </div>
                 <div className="space-y-2 md:col-span-2">
                   <Label htmlFor="budget">Budget estimé (optionnel)</Label>
                   <Select
                     value={formData.budget}
                     onValueChange={(value) => setFormData({ ...formData, budget: value })}
                   >
                     <SelectTrigger className="bg-background">
                       <SelectValue placeholder="Sélectionnez une fourchette..." />
                     </SelectTrigger>
                     <SelectContent>
                       <SelectItem value="<50k">Moins de 50 000 €</SelectItem>
                       <SelectItem value="50k-100k">50 000 € - 100 000 €</SelectItem>
                       <SelectItem value="100k-250k">100 000 € - 250 000 €</SelectItem>
                       <SelectItem value="250k-500k">250 000 € - 500 000 €</SelectItem>
                       <SelectItem value=">500k">Plus de 500 000 €</SelectItem>
                     </SelectContent>
                   </Select>
                 </div>
                 <div className="space-y-2 md:col-span-2">
                   <Label htmlFor="message">Description du projet *</Label>
                   <Textarea
                     id="message"
                     value={formData.message}
                     onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                     placeholder="Décrivez votre projet : lieu, surface, besoins spécifiques..."
                     rows={5}
                     required
                     className="bg-background resize-none"
                   />
                 </div>
               </div>
 
               <Button
                 type="submit"
                 disabled={isSubmitting}
                 className="w-full mt-6 bg-gold hover:bg-gold-light text-primary font-semibold py-6 text-lg shadow-gold"
               >
                 {isSubmitting ? (
                   <>
                     <span className="animate-spin mr-2">◌</span>
                     Envoi en cours...
                   </>
                 ) : (
                   <>
                     <Send className="w-5 h-5 mr-2" />
                     Envoyer ma demande
                   </>
                 )}
               </Button>
             </form>
           </motion.div>
 
           {/* Contact Info */}
           <motion.div
             initial={{ opacity: 0, x: 30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6 }}
             className="lg:col-span-2 space-y-6"
           >
             {/* Contact Details Card */}
             <div className="bg-primary p-8 rounded-2xl text-primary-foreground">
               <h3 className="font-serif font-semibold text-xl mb-6">Nos Coordonnées</h3>
               <div className="space-y-4">
                 <a
                   href={`https://maps.google.com/?q=${encodeURIComponent(companyInfo.address.full)}`}
                   target="_blank"
                   rel="noopener noreferrer"
                   className="flex items-start gap-4 hover:text-gold transition-colors"
                 >
                   <MapPin className="w-5 h-5 mt-1 text-gold flex-shrink-0" />
                   <span>{companyInfo.address.full}</span>
                 </a>
                 <a
                   href={`tel:${companyInfo.contact.phone}`}
                   className="flex items-center gap-4 hover:text-gold transition-colors"
                 >
                   <Phone className="w-5 h-5 text-gold flex-shrink-0" />
                   <span>{companyInfo.contact.phoneDisplay}</span>
                 </a>
                 <a
                   href={`mailto:${companyInfo.contact.email}`}
                   className="flex items-center gap-4 hover:text-gold transition-colors"
                 >
                   <Mail className="w-5 h-5 text-gold flex-shrink-0" />
                   <span className="break-all">{companyInfo.contact.email}</span>
                 </a>
                 <div className="flex items-start gap-4">
                   <Clock className="w-5 h-5 mt-1 text-gold flex-shrink-0" />
                   <div>
                     <p>{companyInfo.hours.weekdays}</p>
                     <p>{companyInfo.hours.saturday}</p>
                   </div>
                 </div>
               </div>
             </div>
 
             {/* Benefits Card */}
             <div className="bg-card p-8 rounded-2xl border border-border">
               <div className="flex items-center gap-3 mb-6">
                 <FileText className="w-6 h-6 text-gold" />
                 <h3 className="font-serif font-semibold text-lg text-primary">
                   Pourquoi nous choisir ?
                 </h3>
               </div>
               <ul className="space-y-3">
                 {benefits.map((benefit, index) => (
                   <li key={index} className="flex items-center gap-3 text-muted-foreground">
                     <CheckCircle className="w-5 h-5 text-gold flex-shrink-0" />
                     <span>{benefit}</span>
                   </li>
                 ))}
               </ul>
             </div>
           </motion.div>
         </div>
       </div>
     </section>
   );
 };