import { motion } from 'motion/react';
import { CheckCircle2, Clock, Image as ImageIcon, MousePointerClick } from 'lucide-react';

export default function Projects() {
  const finishedProjects = [
    { name: "CATE HOTEL", location: "MOROGORO", details: "6 STOPS" },
    { name: "RAFIKI HOTEL", location: "DODOMA", details: "5 STOPS" },
    { name: "KIBO COMPLEX", location: "TEGETA - DSM", details: "5 STOPS" },
    { name: "GOVERMENT BUILDING", location: "SONGWE", details: "3 STOPS" },
    { name: "IMPERIAL PACKAGING LTD", location: "KEKO - DSM", details: "CARGO 2000 KG" },
    { name: "DERMA LTD", location: "MWENGE - DSM", details: "CARGO ELEVATOR" },
    { name: "MR ARIF HOUSE", location: "UPANGA - DSM", details: "3 STOPS" },
    { name: "NUBAFASA APARTMENT (Mr Said)", location: "MSASANI - DSM", details: "6 STOPS" },
    { name: "LADISLAWS COMMERCIAL BUILDING", location: "KARIAKOO - DSM", details: "13 STOPS" },
    { name: "Mr SIDIK SUMARI SIDIK BUILDING", location: "KARIAKOO - DSM", details: "6 STOPS" },
    { name: "PLAZA MBEZI", location: "MBEZI", details: "4 STOPS" },
    { name: "Mr SAID OMARY BUILDING", location: "MAGOMENI - DSM", details: "10 STOPS" },
    { name: "PHINISON INVESTMENT", location: "KARIAKOO - DSM", details: "13 STOPS - 2000KG" },
    { name: "PHINISON INVESTMENT", location: "KARIAKOO - DSM", details: "13 STOPS - 800KG" },
    { name: "MRS ZUHURA SELEMAN", location: "ILALA - DSM", details: "7 STOPS - 800 KG" },
    { name: "MRS RUWAIDAH MOHAMED", location: "ILALA - DSM", details: "11 STOPS - 630 KG" },
    { name: "MRS BETTY", location: "KARIAKOO", details: "15 STOPS - 2000 KG" },
    { name: "MR AZARIA MBOMBO", location: "KARIAKOO", details: "13 STOPS - 1300 KG" },
    { name: "IMPERIAL PACKAGING LTD", location: "KEKO", details: "2 STOPS - CARGO - 1500KG" },
    { name: "STC CONSTRUCTION", location: "MAGOMENI", details: "6 STOPS - 800 KG" },
    { name: "MR AZAN BUILDING", location: "KARIAKOO", details: "10 STOPS - 450 KG" },
    { name: "CITYBANK", location: "OSTERBAY", details: "4 STOPS - 630 KG" },
    { name: "MRS SHIFA BUILDING", location: "KARIAKOO", details: "9 STOPS - 630 KG" }
  ];

  const ongoingProjects = [
    { name: "MRS RUWAIDAH MOHAMED", location: "ZANZIBAR", details: "4 STOPS - 800 KG" },
    { name: "NHC & JVITEL", location: "KARIAKOO", details: "14 STOPS - 2000 KG" },
    { name: "NHC & JVITEL", location: "KARIAKOO", details: "14 STOPS - 800 KG" },
    { name: "MR AZAN BUILDING", location: "KARIAKOO", details: "10 STOPS - 450 KG" },
    { name: "SMILES HOTEL", location: "ZANZIBAR", details: "6 STOPS - 2000 KG DUBLEX" },
    { name: "MRS BETTY RESIDENTIAL BUILDING", location: "SINZA", details: "7 STOPS - 800 KG" }
  ];

  const cabinPhotos = [
    { url: "/img/paslanmaz.jpg", title: "Satin Stainless Steel Cabin" },
    { url: "/img/cam.png", title: "Glass Cabin" },
    { url: "/img/luxury.jpg", title: "Luxury Cabin" },
    { url: "/img/esb.jpg", title: "ESB Cabin" }
  ];

  return (
    <section id="projects" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-cyan-600 font-semibold tracking-wider uppercase text-sm mb-3">Products & Portfolio</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            Our Work & Premium Elevator Models
          </h3>
          <p className="text-slate-600 text-lg">
            Explore our successful installations across Tanzania and browse our premium selection of elevator cabins and control panels engineered for safety, elegance, and durability.
          </p>
        </div>

        {/* Cabin Gallery Section */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-8 border-b border-slate-200 pb-4">
            <div className="w-10 h-10 rounded-lg bg-cyan-100 flex items-center justify-center text-cyan-600">
              <ImageIcon size={20} />
            </div>
            <h3 className="text-2xl font-bold text-slate-900">Cabin Models & Gallery</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {cabinPhotos.map((photo, index) => (
              <motion.div
                key={`photo-${index}`}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group relative rounded-2xl overflow-hidden aspect-[4/5] bg-slate-200 shadow-md"
              >
                <img 
                  src={photo.url} 
                  alt={photo.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-80 transition-opacity group-hover:opacity-100"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 transition-transform group-hover:translate-y-0">
                  <h4 className="text-white font-bold text-lg">{photo.title}</h4>
                </div>
              </motion.div>
            ))}
          </div>
          <p className="text-center text-sm text-slate-500 mt-6">
            * These are sample representations. Contact us for our full catalog of Turkish engineering cabin designs.
          </p>
        </div>

        {/* Ongoing Projects */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8 border-b border-slate-200 pb-4">
            <div className="w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center text-amber-600">
              <Clock size={20} />
            </div>
            <h3 className="text-2xl font-bold text-slate-900">Ongoing Projects</h3>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {ongoingProjects.map((project, index) => (
              <motion.div
                key={`ongoing-${index}`}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm hover:border-amber-300 hover:shadow-md transition-all flex items-start gap-3"
              >
                <div className="mt-1 w-2 h-2 rounded-full bg-amber-500 shrink-0"></div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm leading-tight mb-1">{project.name}</h4>
                  <p className="text-xs text-slate-500 font-medium mb-1">{project.location}</p>
                  <p className="text-xs text-cyan-600 font-semibold bg-cyan-50 inline-block px-2 py-0.5 rounded">{project.details}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Finished Projects */}
        <div className="mb-24">
          <div className="flex items-center gap-3 mb-8 border-b border-slate-200 pb-4">
            <div className="w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-600">
              <CheckCircle2 size={20} />
            </div>
            <h3 className="text-2xl font-bold text-slate-900">Finished Projects</h3>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {finishedProjects.map((project, index) => (
              <motion.div
                key={`finished-${index}`}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: (index % 10) * 0.05 }}
                className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm hover:border-emerald-300 hover:shadow-md transition-all flex items-start gap-3"
              >
                <div className="mt-1 w-2 h-2 rounded-full bg-emerald-500 shrink-0"></div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm leading-tight mb-1">{project.name}</h4>
                  <p className="text-xs text-slate-500 font-medium mb-1">{project.location}</p>
                  <p className="text-xs text-cyan-600 font-semibold bg-cyan-50 inline-block px-2 py-0.5 rounded">{project.details}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
