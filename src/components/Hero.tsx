import { motion } from 'motion/react';
import { ArrowRight, ShieldCheck, Wrench } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1541888061680-482024b4570c?q=80&w=2070&auto=format&fit=crop"
          alt="Modern Elevator"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-slate-900/70 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-cyan-500/20 text-cyan-300 text-sm font-semibold tracking-wider uppercase mb-6 border border-cyan-500/30">
              Premium Elevator Solutions in Tanzania
            </span>
          </motion.div>
          
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Elevating Your Space with <span className="text-cyan-400">Turkish Engineering</span>
          </motion.h1>
          
          <motion.p
            className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Gibango Company Limited delivers world-class elevator and automatic door systems. 
            Expert installation, reliable maintenance, and unparalleled safety standards for residential and commercial buildings in Dar es Salaam.
          </motion.p>
          
          <motion.div
            className="flex flex-col sm:flex-row flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-cyan-600 hover:bg-cyan-500 text-white px-8 py-4 rounded-md font-semibold transition-all hover:shadow-lg hover:shadow-cyan-600/30"
            >
              Request a Consultation
              <ArrowRight size={18} />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-md font-semibold transition-all border border-white/20"
            >
              Explore Our Services
            </Link>
            <Link
              to="/projects"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-md font-semibold transition-all border border-white/20"
            >
              Explore Our Projects
            </Link>
          </motion.div>

          <motion.div 
            className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-6 pt-8 border-t border-white/10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400">
                <ShieldCheck size={24} />
              </div>
              <div>
                <p className="text-white font-bold">100% Safe</p>
                <p className="text-slate-400 text-sm">Certified Systems</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400">
                <Wrench size={24} />
              </div>
              <div>
                <p className="text-white font-bold">24/7 Support</p>
                <p className="text-slate-400 text-sm">Rapid Response</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
