 // Données de l'entreprise Construction Arve Mont-Blanc
 
 export const companyInfo = {
   name: "Construction Arve Mont-Blanc",
   shortName: "CAMB",
   tagline: "Excellence en construction depuis 2000",
   description: "Leader de la construction durable dans la vallée de l'Arve et la région du Mont-Blanc",
   founded: 2000,
   employees: 50,
   address: {
     street: "123 Avenue du Mont Blanc",
     city: "Chamonix",
     postalCode: "74400",
     country: "France",
     full: "123 Avenue du Mont Blanc, 74400 Chamonix"
   },
   contact: {
     phone: "+33 4 50 53 00 00",
     phoneDisplay: "04 50 53 00 00",
     email: "contact@arvemontblanc-construction.fr"
   },
   hours: {
     weekdays: "Lun-Ven: 8h00-18h00",
     saturday: "Sam: 9h00-12h00",
     sunday: "Dim: Fermé"
   },
   certifications: ["RT 2012", "HQE", "Breeam", "Garantie Décennale"],
   zone: "Vallée de l'Arve, Mont-Blanc, Haute-Savoie"
 };
 
 export const services = [
   {
     id: "residential",
     icon: "Home",
     title: "Construction Résidentielle",
     shortDesc: "Maisons individuelles, appartements et chalets",
     description: "Nous construisons des maisons individuelles, appartements et chalets adaptés au climat alpin. Chaque projet bénéficie de notre expertise locale et de notre engagement pour la qualité.",
     features: ["Maisons individuelles", "Appartements", "Chalets traditionnels", "Résidences de standing"]
   },
   {
     id: "renovation",
     icon: "Hammer",
     title: "Rénovation & Extension",
     shortDesc: "Modernisation et agrandissements",
     description: "Transformez et agrandissez votre bien avec nos solutions de rénovation complètes. De la modernisation énergétique aux extensions architecturales, nous donnons vie à vos projets.",
     features: ["Rénovation intérieure", "Rénovation extérieure", "Extensions", "Surélévations"]
   },
   {
     id: "commercial",
     icon: "Building2",
     title: "Construction Commerciale",
     shortDesc: "Bureaux, commerces et hôtels",
     description: "Nous réalisons des bâtiments commerciaux fonctionnels et esthétiques : bureaux modernes, espaces commerciaux et établissements hôteliers adaptés aux exigences alpines.",
     features: ["Bureaux professionnels", "Centres commerciaux", "Hôtels & résidences", "Locaux industriels"]
   },
   {
     id: "civil",
     icon: "Construction",
     title: "Génie Civil",
     shortDesc: "Voiries, réseaux et infrastructures",
     description: "Notre expertise en génie civil couvre les voiries, réseaux divers et infrastructures. Nous maîtrisons les contraintes techniques du terrain montagnard.",
     features: ["Voiries & routes", "Réseaux VRD", "Ouvrages d'art", "Terrassements"]
   },
   {
     id: "eco",
     icon: "Leaf",
     title: "Éco-construction",
     shortDesc: "Bâtiments durables, certification HQE",
     description: "Engagés pour l'environnement, nous proposons des solutions de construction durable : matériaux biosourcés, performance énergétique optimale et certifications environnementales.",
     features: ["Certification HQE", "RT 2012 / RE 2020", "Matériaux biosourcés", "Performance énergétique"]
   },
   {
     id: "exterior",
     icon: "TreePine",
     title: "Aménagement Extérieur",
     shortDesc: "Terrassements et espaces verts",
     description: "Nous créons des espaces extérieurs harmonieux : terrassements, aménagements paysagers, parkings et accès adaptés à l'environnement montagnard.",
     features: ["Terrassements", "Aménagements paysagers", "Parkings", "Clôtures & portails"]
   }
 ];
 
 export const projects = [
   {
     id: "residence-alpes",
     title: "Résidence Les Alpes",
     location: "Chamonix",
     year: 2023,
     category: "residential",
     description: "Ensemble résidentiel de standing comprenant 24 appartements avec vue panoramique sur le Mont-Blanc. Architecture contemporaine intégrée au paysage alpin.",
     details: "Surface: 3 200 m² | 24 appartements | Certification HQE",
     image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop"
   },
   {
     id: "centre-commercial",
     title: "Centre Commercial du Mont",
     location: "Saint-Gervais",
     year: 2022,
     category: "commercial",
     description: "Rénovation complète d'un bâtiment historique transformé en centre commercial moderne. Préservation du patrimoine architectural avec intégration d'équipements contemporains.",
     details: "Surface: 5 500 m² | 18 boutiques | Rénovation patrimoniale",
     image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop"
   },
   {
     id: "eco-quartier",
     title: "Éco-quartier des Arves",
     location: "Les Houches",
     year: 2021,
     category: "eco",
     description: "Développement d'un éco-quartier exemplaire de 48 maisons à haute performance énergétique. Projet pionnier en construction durable dans la vallée.",
     details: "Surface: 12 000 m² | 48 maisons | Label E+C-",
     image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop"
   },
   {
     id: "hotel-spa",
     title: "Hôtel Spa Mont Blanc",
     location: "Megève",
     year: 2020,
     category: "commercial",
     description: "Extension et rénovation d'un hôtel 4 étoiles avec création d'un espace spa de 800 m². Alliance du charme savoyard et du confort moderne.",
     details: "Surface: 2 800 m² | 45 chambres | Spa 800 m²",
     image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop"
   },
   {
     id: "bureau-hqe",
     title: "Bureau d'Entreprise HQE",
     location: "Cluses",
     year: 2019,
     category: "commercial",
     description: "Construction d'un immeuble de bureaux certifié HQE, conçu pour optimiser le confort des occupants et minimiser l'impact environnemental.",
     details: "Surface: 1 800 m² | 3 étages | Certification HQE",
     image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop"
   },
   {
     id: "chalet-traditionnel",
     title: "Chalet Traditionnel",
     location: "Sallanches",
     year: 2018,
     category: "residential",
     description: "Restauration d'un chalet classé monument historique. Travail minutieux de préservation des éléments traditionnels avec mise aux normes contemporaines.",
     details: "Surface: 320 m² | Monument historique | Restauration intégrale",
     image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=800&h=600&fit=crop"
   }
 ];
 
 export const testimonials = [
   {
     id: 1,
     name: "Jean-Pierre Dumont",
     role: "Propriétaire",
     location: "Chamonix",
     content: "Une équipe exceptionnelle qui a su concrétiser notre rêve de chalet. Professionnalisme, écoute et respect des délais. Je recommande vivement !",
     rating: 5,
     avatar: "JP"
   },
   {
     id: 2,
     name: "Marie-Claire Bertrand",
     role: "Directrice Hôtel Alpin",
     location: "Megève",
     content: "La rénovation de notre hôtel a été réalisée avec un savoir-faire remarquable. L'équipe a su préserver l'âme du lieu tout en le modernisant.",
     rating: 5,
     avatar: "MB"
   },
   {
     id: 3,
     name: "Laurent Moreau",
     role: "Promoteur immobilier",
     location: "Les Houches",
     content: "Partenaire de confiance pour nos projets depuis 10 ans. Leur expertise en éco-construction est un véritable atout pour nos réalisations.",
     rating: 5,
     avatar: "LM"
   },
   {
     id: 4,
     name: "Sophie Martin",
     role: "Architecte",
     location: "Annecy",
     content: "Collaboration parfaite sur plusieurs projets. Leur maîtrise technique et leur réactivité en font un partenaire idéal pour les architectes.",
     rating: 5,
     avatar: "SM"
   }
 ];
 
 export const stats = [
   { value: 25, suffix: "+", label: "Années d'expérience" },
   { value: 50, suffix: "+", label: "Professionnels" },
   { value: 500, suffix: "+", label: "Projets réalisés" },
   { value: 98, suffix: "%", label: "Clients satisfaits" }
 ];
 
 export const values = [
   {
     title: "Expertise Locale",
     description: "Une connaissance approfondie du terrain montagnard et de ses contraintes techniques spécifiques."
   },
   {
     title: "Éco-responsabilité",
     description: "Un engagement fort pour la construction durable et le respect de l'environnement alpin."
   },
   {
     title: "Fiabilité",
     description: "Le respect des délais et des budgets, avec une communication transparente à chaque étape."
   },
   {
     title: "Innovation",
     description: "L'intégration des dernières technologies et méthodes de construction pour des résultats optimaux."
   }
 ];