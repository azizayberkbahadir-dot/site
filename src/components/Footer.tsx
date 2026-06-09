import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 py-12 border-t border-white/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <img 
                src="/img/logoo.png" 
                alt="Gibango Elevator Logo" 
                className="h-[72px] w-auto object-contain -mr-8"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
              <div className="flex flex-col relative z-10">
                <span className="text-2xl font-bold leading-none text-white">
                  Gibango
                </span>
                <span className="text-xs font-medium tracking-widest uppercase text-cyan-500 mt-1">
                  Company Limited
                </span>
              </div>
            </div>
            <p className="max-w-md mb-6">
              Gibango Company Limited is committed to becoming a leading company in the production, distribution, and installation of high-quality branded elevators and automatic doors within and outside Tanzania.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-cyan-400 transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-cyan-400 transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-cyan-400 transition-colors">Services</Link></li>
              <li><Link to="/projects" className="hover:text-cyan-400 transition-colors">Projects</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><Link to="/privacy" className="hover:text-cyan-400 transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-cyan-400 transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 flex items-center justify-center text-center">
          <p>&copy; {new Date().getFullYear()} Gibango Company Limited. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
