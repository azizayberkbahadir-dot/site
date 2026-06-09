import { motion } from 'motion/react';
import { Settings, Wrench, Shield, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Services() {
  const services = [
    {
      icon: <Settings className="w-10 h-10 text-cyan-500" />,
      title: "Elevator Installation",
      description: "Professional installation of passenger, freight, and panoramic elevators using premium Turkish components for maximum reliability and safety."
    },
    {
      icon: <Wrench className="w-10 h-10 text-cyan-500" />,
      title: "Maintenance & Repair",
      description: "Comprehensive preventative maintenance plans and rapid-response repair services to ensure your elevators operate smoothly 24/7."
    },
    {
      icon: <Shield className="w-10 h-10 text-cyan-500" />,
      title: "Automatic Doors",
      description: "Supply and installation of high-quality automatic sliding doors for commercial buildings, hospitals, and retail spaces."
    }
  ];

  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-cyan-600 font-semibold tracking-wider uppercase text-sm mb-3">Our Expertise</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            Comprehensive Elevator Solutions
          </h3>
          <p className="text-slate-600 text-lg">
            We provide end-to-end services for all your vertical transportation needs, ensuring safety, efficiency, and longevity.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:border-cyan-100 transition-all group"
            >
              <div className="w-16 h-16 bg-cyan-50 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-4">{service.title}</h4>
              <p className="text-slate-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              <Link to="/contact" className="inline-flex items-center gap-2 text-cyan-600 font-semibold hover:text-cyan-700 transition-colors">
                Learn more <ArrowUpRight size={18} />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
