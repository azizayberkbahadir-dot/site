import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function About() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const officeImages = [
    "/img/ofis1.jpeg",
    "/img/ofis2.jpeg",
    "/img/ofis3.jpeg",
    "/img/ofis4.jpeg",
    "/img/ofis5.jpeg"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % officeImages.length);
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, [currentImageIndex, officeImages.length]);

  const features = [
    "Premium materials imported directly from Turkey",
    "Expert installation by certified technicians",
    "Comprehensive maintenance and repair services",
    "Solutions for residential, commercial, and industrial buildings"
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl h-[500px] bg-slate-100">
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentImageIndex}
                  src={officeImages[currentImageIndex]}
                  alt={`Gibango Office ${currentImageIndex + 1}`}
                  className="absolute inset-0 w-full h-full object-cover"
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  referrerPolicy="no-referrer"
                />
              </AnimatePresence>
              
              {/* Slider Indicators */}
              <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-20">
                {officeImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentImageIndex ? 'bg-cyan-500 w-6' : 'bg-white/60 hover:bg-white'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-cyan-100 rounded-2xl -z-10"></div>
            <div className="absolute -top-6 -right-6 w-48 h-48 border-2 border-slate-200 rounded-2xl -z-10"></div>
            
            <div className="absolute bottom-8 -right-8 bg-white p-6 rounded-xl shadow-xl z-20 max-w-xs border border-slate-100">
              <div className="text-4xl font-bold text-cyan-600 mb-1">7+</div>
              <div className="text-slate-800 font-semibold">Years of Excellence</div>
              <div className="text-slate-500 text-sm mt-1">Serving Tanzania since 2019</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-cyan-600 font-semibold tracking-wider uppercase text-sm mb-3">About Gibango Elevator</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
              Setting the Standard for Vertical Mobility in Tanzania
            </h3>
            
            <p className="text-slate-600 text-lg mb-6 leading-relaxed">
              Gibango Company Limited specializes in the production, distribution, and installation of high-quality elevators and automatic doors. Based in Dar es Salaam, we bring world-class Turkish engineering to the Tanzanian market.
            </p>

            <div className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="text-cyan-500 shrink-0 mt-1" size={20} />
                  <span className="text-slate-700">{feature}</span>
                </div>
              ))}
            </div>

            <div className="grid sm:grid-cols-2 gap-6 pt-6 border-t border-slate-200">
              <div>
                <h4 className="text-xl font-bold text-slate-900 mb-2">Our Mission</h4>
                <p className="text-slate-600 text-sm leading-relaxed">
                  To deliver exceptional customer satisfaction by providing reliable, safe, and innovative elevator solutions within and outside Tanzania.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-bold text-slate-900 mb-2">Our Vision</h4>
                <p className="text-slate-600 text-sm leading-relaxed">
                  To be the undisputed leader in the vertical transportation industry across East Africa, known for quality, safety, and technological advancement.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
