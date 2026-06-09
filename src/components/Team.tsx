import { motion } from 'motion/react';

export default function Team() {
  const team = [
    {
      name: "Dr. Ahmet Bahadir",
      role: "Founder",
      image: "/img/Ahmet Bahadır.png"
    },
    {
      name: "Mec. Eng. Ayhan Bahadir",
      role: "Director",
      image: "/img/Ayhan Bahadır.png"
    },
    {
      name: "Olester Leonard",
      role: "CEO",
      image: "/img/Olester.png"
    },
    {
      name: "Jeromin William Olomi",
      role: "Marketing Manager",
      image: "/img/Jerome.png"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-cyan-600 font-semibold tracking-wider uppercase text-sm mb-3">Our Team</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            A Collective That Makes Dreams Come True
          </h3>
          <p className="text-slate-600 text-lg">
            We work in a family environment with hard-working staff who are experienced in their fields and aim at absolute customer satisfaction.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-2xl mb-4 aspect-[4/5]">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <h4 className="text-xl font-bold text-slate-900">{member.name}</h4>
              <p className="text-cyan-600 font-medium">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
